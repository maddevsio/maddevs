/* eslint-disable prefer-promise-reject-errors */
import 'regenerator-runtime'
import axios from 'axios'
import { createLead } from '../LeadsService'

jest.mock('../../config/env', () => ({
  ATLASSIAN_AUTH_TOKEN: '123',
  ATLASSIAN_PROJECT_KEY: 'DELMTEST',
}))

const response = { data: 'some data' }
jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(response))

describe('Leads service', () => {
  let req

  beforeEach(() => {
    req = {
      body: {
        variables: {
          fullName: 'Fullname',
          email: 'email',
          company: 'company',
          phoneNumber: 'phoneNumber',
          projectDescription: 'Description',
        },
      },
    }
  })

  it('should correctly return data from response', async () => {
    const data = await createLead(req)
    expect(data).toBe('some data')
  })

  it('should correctly return error if axios failed', async () => {
    axios.post.mockImplementation(() => Promise.reject('error'))

    const error = await createLead(req)
    expect(error).toBe('error')
  })

  const variablesCases = [
    {
      interestedExpertise: 'interestedExpertise',
    },
    {
      questionsOnItConsulting: 'questionsOnItConsulting',
    },
    {
      needAssistanceWith: 'needAssistanceWith',
    },
    {
      selectedProjectHost: 'selectedProjectHost',
      projectDescription: null,
      projectDescriber: null,
    },
    {
      selectedTeamSize: 'selectedTeamSize',
      projectDescription: null,
      projectDescriber: '321',
    },
  ]
  const expectedCases = [
    'Interested expertise in: interestedExpertise\nDescription',
    'I need expert advice: questionsOnItConsulting\nDescription',
    'I need assistance with: needAssistanceWith\nDescription',
    'Project hosted on: selectedProjectHost\n',
    'Expected team size: selectedTeamSize\n321',
  ]

  it.each([
    [variablesCases[0], expectedCases[0]],
    [variablesCases[1], expectedCases[1]],
    [variablesCases[2], expectedCases[2]],
    [variablesCases[3], expectedCases[3]],
    [variablesCases[4], expectedCases[4]],
  ])('should correctly called axios with %o', async (variables, expectedDescription) => {
    req.body.variables = {
      ...req.body.variables,
      ...variables,
    }

    await createLead(req)

    const expectedPayload = {
      fields: {
        customfield_10056: 'email',
        customfield_10057: 'phoneNumber',
        customfield_10058: 'Fullname',
        customfield_10063: 'company',
        customfield_10064: 'maddevs.io',
        issuetype: {
          id: '10082',
        },
        project: {
          key: 'DELMTEST',
        },
        summary: 'Fullname',
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: expectedDescription,
                  type: 'text',
                },
              ],
            },
          ],
        },
      },
    }
    const headers = {
      Authorization: 'Basic MTIz',
      'Content-Type': 'application/json',
    }

    expect(axios.post).toHaveBeenCalledWith('https://maddevs.atlassian.net/rest/api/3/issue', expectedPayload, { headers })
  })
})
