/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
const axios = require('axios')
const config = require('../config')
const { getToken, saveToken, tokensTypes } = require('./TokenService')

const customFieldIds = {
  phone: Number(config.AMOCRM_PHONE_FIELD_ID),
  email: Number(config.AMOCRM_EMAIL_FIELD_ID),
  sourceKey: Number(config.AMOCRM_SOURCE_FIELD_ID),
  sourceValue: config.AMOCRM_SOURCE_FIELD_VALUE,
  userId: Number(config.AMOCRM_RESPONSIBLE_USER_ID),
}

const storeURLs = {
  contacts: `${config.AMOCRM_URL}/api/v4/contacts`,
  companies: `${config.AMOCRM_URL}/api/v4/companies`,
  leads: `${config.AMOCRM_URL}/api/v4/leads`,
  notes: `${config.AMOCRM_URL}/api/v4/leads/notes`,
}

/**
 * Public methods
 */
async function refreshCrmToken() {
  /**
   * We need to get refresh token for refresh access token
   */
  const currentToken = await getToken(tokensTypes.AMOCRM)
  if (!currentToken) throw new Error('Current token not found')

  const url = `${config.AMOCRM_URL}/oauth2/access_token`
  const body = {
    client_id: config.AMOCRM_ID,
    client_secret: config.AMOCRM_SECRET,
    grant_type: 'refresh_token',
    refresh_token: currentToken.refresh,
    redirect_uri: config.AMOCRM_REDIRECT_URL,
  }

  const {
    data: { access_token: access, refresh_token: refresh },
  } = await axios.post(url, body)

  /**
   * After getting refresh and access tokens from API, we need to save their
   */
  await saveToken({ access, refresh }, tokensTypes.AMOCRM)

  return true
}

/**
 * Private pure getters
 */
const getRequestConfig = token => ({ headers: { Authorization: `Bearer ${token.access}` } })

const getDataFromResponse = (response, key) => response.data._embedded[key][0]

const buildCustomField = (field_id, value) => ({
  field_id,
  values: [
    {
      value,
    },
  ],
})

/**
 * Private fromRaw methods for transform data
 */
const fromRawContact = ({ fullname, email, phone }) => {
  const customFields = []

  const name = fullname
  if (phone) customFields.push(buildCustomField(customFieldIds.phone, phone))
  if (email) customFields.push(buildCustomField(customFieldIds.email, email))

  return [
    {
      name,
      custom_fields_values: [...customFields],
    },
  ]
}

const fromRawCompany = ({ company }) => (company ? [{ name: company }] : null)

const fromRawLead = ({ fullname, company: companyName }, contact, company) => {
  const _embedded = {}
  const contacts = contact && contact.id ? [{ id: contact.id }] : null
  const companies = company && company.id ? [{ id: company.id }] : null

  if (contacts) _embedded.contacts = contacts
  if (companies) _embedded.companies = companies

  return [
    {
      name: `${companyName || fullname}`,
      price: 0,
      responsible_user_id: customFieldIds.userId,
      _embedded: { contacts, companies },
      custom_fields_values: [buildCustomField(customFieldIds.sourceKey, customFieldIds.sourceValue)],
    },
  ]
}

const fromRawNote = ({ description: text }, { id: entity_id }) => [
  {
    entity_id,
    note_type: 'common',
    params: { text },
  },
]

/**
 * Private async methods
 */
async function storeEntity(entity, entityType, token) {
  if (!entity) return null

  const url = storeURLs[entityType]
  const requestConfig = getRequestConfig(token)

  const response = await axios.post(url, entity, requestConfig)
  return getDataFromResponse(response, entityType)
}

async function linkCompanyWithContact({ company, contact }, token) {
  const url = `${config.AMOCRM_URL}/api/v4/companies/${company.id}/link`
  const requestConfig = getRequestConfig(token)

  const body = [
    {
      to_entity_id: contact.id,
      to_entity_type: 'contacts',
    },
  ]

  const response = await axios.post(url, body, requestConfig)
  return getDataFromResponse(response, 'links')
}

async function createNewLead(rawData, token) {
  const contact = await storeEntity(fromRawContact(rawData), 'contacts', token)
  const company = await storeEntity(fromRawCompany(rawData), 'companies', token)
  if (company && contact) {
    await linkCompanyWithContact({ company, contact }, token)
  }
  const lead = await storeEntity(fromRawLead(rawData, contact), 'leads', token)
  if (rawData.description) {
    await storeEntity(fromRawNote(rawData, lead), 'notes', token)
  }
  return true
}

module.exports = {
  createNewLead,
  refreshCrmToken,
}
