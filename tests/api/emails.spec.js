import 'regenerator-runtime'
import * as api from '@/api/emails'

describe('Emails api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve('response'))
  const failure = jest.fn(() => Promise.reject(error))

  const axios = {
    post: success,
  }

  const axiosFailure = {
    post: failure,
  }

  it('sendEmail success', async () => {
    const payload = 'payload'
    const data = await api.sendEmail(axios, payload)
    expect(data).toBe('response')
  })

  it('sendEmail failure', async () => {
    const payload = 'payload'
    const data = await api.sendEmail(axiosFailure, payload)
    expect(data).toBe(error)
  })
})
