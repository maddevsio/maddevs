import 'regenerator-runtime'
import * as api from '@/api/leads'

describe('Leads api methods', () => {
  const error = new Error('error')
  const success = jest.fn(() => Promise.resolve({ data: 'data' }))
  const failure = jest.fn(() => Promise.reject(error))

  const axios = {
    post: success,
  }

  const axiosFailure = {
    post: failure,
  }

  it('createNewLead success', async () => {
    const payload = 'payload'
    const data = await api.createNewLead(axios, payload)
    expect(data).toBe('data')
  })

  it('createNewLead failure', async () => {
    const payload = 'payload'
    const data = await api.createNewLead(axiosFailure, payload)
    expect(data).toBe(error)
  })
})
