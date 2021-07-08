/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { getIPInfo } from '@/api/ipInfo'

const response = { data: 'ip data' }
jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve(response))

describe('IPinfo service', () => {
  it('should correctly return data from response', async () => {
    const data = await getIPInfo()
    expect(data).toBe('ip data')
  })

  it('should return the empty object if axios failed', async () => {
    axios.get.mockImplementation(() => Promise.reject('error'))

    const error = await getIPInfo()
    expect(error).toEqual({})
  })
})
