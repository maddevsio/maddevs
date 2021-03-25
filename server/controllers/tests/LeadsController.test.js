import 'regenerator-runtime/runtime'
import * as controller from '../LeadsController'
import * as tokenService from '../../services/TokenService'
import * as leadsService from '../../services/LeadsService'
import logError from '../../utils/logError'

const originalTokenTypes = tokenService.tokensTypes

jest.useFakeTimers()

jest.mock('../../utils/logError', () => jest.fn())

jest.mock('../../services/TokenService', () => ({
  tokensTypes: {},
  getToken: jest.fn(),
}))

jest.mock('../../services/LeadsService', () => ({
  refreshCrmToken: jest.fn(),
  createNewLead: jest.fn(),
}))

// mocks
const refreshCrmToken = jest.fn(() => new Promise(res => setTimeout(res, 5)))
const getToken = jest.fn()
const createNewLead = jest.fn(() => true)
const logErrorMock = jest.fn()

tokenService.tokensTypes = originalTokenTypes
tokenService.getToken.mockImplementation(getToken)
leadsService.refreshCrmToken.mockImplementation(refreshCrmToken)
leadsService.createNewLead.mockImplementation(createNewLead)

logError.mockImplementation(logErrorMock)

describe('leadsController', () => {
  const json = jest.fn()

  const req = {}
  const res = {
    status: jest.fn(() => ({
      json,
    })),
    json,
  }

  it('createLead should correctly called refreshCrmToken, getToken and createNewLead', () => {
    controller.createLead(req, res)
    jest.runAllTimers()
    expect(leadsService.refreshCrmToken).toHaveBeenCalledTimes(1)
  })

  it('createLead should correctly log error and return 500 status', () => {
    const error = new Error('Err')
    leadsService.refreshCrmToken.mockImplementation(() => {
      throw error
    })

    controller.createLead(req, res)
    expect(logErrorMock).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(json).toHaveBeenCalledWith({ success: false, message: 'Error during creating lead', details: error })
  })
})
