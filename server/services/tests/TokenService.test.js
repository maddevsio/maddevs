import 'regenerator-runtime/runtime'
import * as tokenService from '../TokenService'
import Token from '../../models/TokenModel'
import logError from '../../utils/logError'

jest.mock('../../utils/logError', () => jest.fn())
const logErrorMock = jest.fn()
logError.mockImplementation(logErrorMock)

const tokenMock = {
  access: '123',
  refresh: '321',
  save: jest.fn(() => Promise.resolve(true)),
}

describe('tokenService', () => {
  it('getToken success', async () => {
    jest.spyOn(Token, 'findOne').mockReturnValue(Promise.resolve(tokenMock))
    const token = await tokenService.getToken(tokenService.tokensTypes.AMOCRM)
    expect(token).toEqual(tokenMock)
  })

  it('getToken with error', async () => {
    const error = 'error'
    jest.spyOn(Token, 'findOne').mockReturnValue(Promise.reject(error))
    await tokenService.getToken(tokenService.tokensTypes.AMOCRM)
    expect(logErrorMock).toHaveBeenCalledWith(error, 'Error during getting token')
  })

  it('saveToken success', async () => {
    const newTokens = {
      ...tokenMock,
      access: 'access',
      refresh: 'refresh',
    }

    jest.spyOn(Token, 'findOne').mockReturnValue(Promise.resolve(tokenMock))
    const token = await tokenService.saveToken(newTokens)
    expect(tokenMock.save).toHaveBeenCalledTimes(1)
    expect(token).toEqual(newTokens)
  })

  it('saveToken error', async () => {
    const error = 'error'
    jest.spyOn(Token, 'findOne').mockReturnValue(
      Promise.resolve({
        ...tokenMock,
        save: jest.fn(() => Promise.reject(error)),
      }),
    )
    await tokenService.saveToken(tokenMock)
    expect(logErrorMock).toHaveBeenCalledWith(error, 'Error during save token')
  })
})
