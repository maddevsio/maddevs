/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { sendApplication } from '../HuntflowService'

jest.mock('../../config/env', () => ({
  HUNTFLOW_TOKEN: '123',
  HUNTFLOW_ACCOUNT_ID: '36479',
  HUNTFLOW_RESERVE_VACANCY_ID: '2676634',
  HUNTFLOW_API_URL: 'https://api.huntflow.ru',
}))

const response = { data: 'some data' }
jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(response))

describe('Huntflow service', () => {
  let req

  beforeEach(() => {
    req = {
      body: {
        firstName: 'firstName',
        middleName: 'middleName',
        lastName: 'lastName',
        email: 'email@gmail.com',
        linkedinProfile: 'linkedin',
        positionTitle: 'position',
        positionValue: 'position value',
      },

      file: {
        path: 'path',
      },
    }
  })

  it('should correctly return data from response', async () => {
    const data = await sendApplication(req)
    expect(data).toBe('some data')
  })

  it('should correctly return error if axios failed', async () => {
    axios.post.mockImplementation(() => Promise.reject('error'))

    const error = await sendApplication(req)
    expect(error).toBe('error')
  })
})
