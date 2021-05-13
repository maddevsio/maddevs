const axios = require('axios')
const { ATLASSIAN_AUTH_TOKEN, ATLASSIAN_PROJECT_KEY, ATLASSIAN_API_URL } = require('../config/env')

function generateToken(token) {
  return Buffer.from(token).toString('base64')
}

function getAdditionalDescription(variables) {
  if (variables.interestedExpertise) return `Interested expertise in: ${variables.interestedExpertise}`
  if (variables.questionsOnItConsulting) return `I need expert advice: ${variables.questionsOnItConsulting}`
  if (variables.needAssistanceWith) return `I need assistance with: ${variables.needAssistanceWith}`
  if (variables.selectedProjectHost) return `Project hosted on: ${variables.selectedProjectHost}`
  if (variables.selectedTeamSize) return `Expected team size: ${variables.selectedTeamSize}`
  return ''
}

function buildPayload({ variables }) {
  const additionalDescription = getAdditionalDescription(variables)

  const description = variables.projectDescription || variables.projectDescriber || ''

  return {
    fields: {
      summary: variables.fullName, // issue title
      issuetype: {
        id: '10082',
      },
      project: {
        key: ATLASSIAN_PROJECT_KEY,
      },
      customfield_10058: variables.fullName,
      customfield_10056: variables.email,
      customfield_10063: variables.company,
      customfield_10057: variables.phoneNumber,
      customfield_10064: 'maddevs.io',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: additionalDescription ? `${additionalDescription}\n${description}` : description,
                type: 'text',
              },
            ],
          },
        ],
      },
    },
  }
}

async function createLead({ body }) {
  try {
    const token = generateToken(ATLASSIAN_AUTH_TOKEN)
    const payload = buildPayload(body)

    const response = await axios.post(ATLASSIAN_API_URL, payload, {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

module.exports = {
  createLead,
}
