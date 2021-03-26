import 'regenerator-runtime/runtime'
import axios from 'axios'
import * as leadsService from '../LeadsService'
import * as tokenService from '../TokenService'

jest.mock('axios', () => ({
  post: jest.fn(),
}))

jest.mock('../TokenService', () => ({
  tokensTypes: {},
  getToken: jest.fn(),
  saveToken: jest.fn(),
}))

const getToken = jest.fn(() => Promise.resolve('token'))
const saveToken = jest.fn(() => Promise.resolve(true))

tokenService.getToken.mockImplementation(getToken)
tokenService.saveToken.mockImplementation(saveToken)

describe('leadsService', () => {
  it('refreshCrmToken', async () => {
    const axiosPostResponse = {
      data: {
        access_token: 'access',
        refresh_token: 'refresh',
      },
    }
    const axiosPost = jest.fn(() => Promise.resolve(axiosPostResponse))
    axios.post.mockImplementation(axiosPost)

    const success = await leadsService.refreshCrmToken()
    expect(getToken).toHaveBeenCalledTimes(1)
    expect(saveToken).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(success).toBeTruthy()
  })

  it('refreshCrmToken without current token', () => {
    const getTokenEmpty = jest.fn(() => null)
    tokenService.getToken.mockImplementation(getTokenEmpty)
    // eslint-disable-next-line
    expect(leadsService.refreshCrmToken).rejects.toThrow('Current token not found')
  })

  it('createNewLead', async () => {
    const getMockedData = () => [
      {
        id: 1,
      },
    ]

    const axiosPostResponse = {
      data: {
        _embedded: {
          contacts: getMockedData(),
          companies: getMockedData(),
          leads: getMockedData(),
          links: getMockedData(),
          notes: getMockedData(),
        },
      },
    }
    const axiosPost = jest.fn(() => Promise.resolve(axiosPostResponse))
    axios.post.mockImplementation(axiosPost)

    const token = 'token'
    const body = {
      fullname: 'Test user',
      email: 'testemail@email.email',
      phone: '+9212323',
      company: 'Company',
      description: 'Some description',
    }

    const success = await leadsService.createNewLead(body, token)
    expect(success).toBeTruthy()
    expect(axiosPost).toHaveBeenCalledTimes(5)
  })

  it('createNewLead with minimal data', async () => {
    const getMockedData = () => [
      {
        id: 1,
      },
    ]

    const axiosPostResponse = {
      data: {
        _embedded: {
          contacts: getMockedData(),
          companies: getMockedData(),
          leads: getMockedData(),
          links: getMockedData(),
          notes: getMockedData(),
        },
      },
    }
    const axiosPost = jest.fn(() => Promise.resolve(axiosPostResponse))
    axios.post.mockImplementation(axiosPost)

    const token = 'token'
    const body = {
      fullname: 'Test user',
    }

    const success = await leadsService.createNewLead(body, token)
    expect(success).toBeTruthy()
    expect(axiosPost).toHaveBeenCalledTimes(2)
  })
})
