/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import * as api from '@/api/ipInfo'

describe('ipInfo api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'ip data' }))
  const failure = jest.fn(() => Promise.reject(error))

  const axios = {
    get: success,
  }

  const axiosFailure = {
    get: failure,
  }

  it('getIPInfo success', async () => {
    const result = await api.getIPInfo(axios)
    expect(result).toEqual({ data: 'ip data' })
  })

  it('getIPInfo failure', async () => {
    const result = await api.getIPInfo(axiosFailure)
    expect(result).toEqual({})
  })
})
