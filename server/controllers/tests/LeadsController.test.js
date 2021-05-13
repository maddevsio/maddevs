import 'regenerator-runtime/runtime'
import * as controller from '../LeadsController'
import * as emailsService from '../../services/EmailsService'
import * as leadsService from '../../services/LeadsService'

jest.mock('../../services/EmailsService', () => ({
  sendEmail: jest.fn(),
}))

jest.mock('../../services/LeadsService', () => ({
  createLead: jest.fn(),
}))

// mocks
const sendEmail = jest.fn()
const createLead = jest.fn(() => Promise.resolve({ data: 'data' }))

emailsService.sendEmail.mockImplementation(sendEmail)
leadsService.createLead.mockImplementation(createLead)

describe('leadsController', () => {
  let json
  let req
  let res

  beforeEach(() => {
    json = jest.fn(data => data)

    req = {
      body: {},
    }

    res = {
      json,
      status: jest.fn(() => ({
        json,
      })),
    }
  })

  it('should correctly handle invalid templateId in req.body', async () => {
    await controller.create(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'templateId key not found or incorrect', status: 500 })
  })

  it('should correctly handle invalid variables in req.body', async () => {
    req.body.templateId = 123
    await controller.create(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ message: 'variables key not found', status: 500 })
  })

  it('should correctly call sendEmail and createLead methods', async () => {
    req.body.templateId = 123
    req.body.variables = {}
    const data = await controller.create(req, res)
    expect(data).toEqual({ data: 'data' })
    expect(emailsService.sendEmail).toHaveBeenCalledTimes(1)
    expect(leadsService.createLead).toHaveBeenCalledTimes(1)
  })
})
