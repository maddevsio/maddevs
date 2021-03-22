const axios = require('axios');
const config = require('../config');
const { getToken, saveToken, tokensTypes } = require('./TokenService');

const storeURLs = {
  contacts: `${config.AMOCRM_URL}/api/v4/contacts`,
  companies: `${config.AMOCRM_URL}/api/v4/companies`,
  leads: `${config.AMOCRM_URL}/api/v4/leads`,
  notes: `${config.AMOCRM_URL}/api/v4/leads/notes`
};

/**
 * Public methods
 */
async function refreshCrmToken() {
  /**
   * We need to get refresh token for refresh access token
   */
  const currentToken = await getToken(tokensTypes.AMOCRM);
  if(!currentToken) throw new Error('Current token not found');

  const url = `${config.AMOCRM_URL}/oauth2/access_token`;
  const body = {
    client_id: config.AMOCRM_ID,
    client_secret: config.AMOCRM_SECRET,
    grant_type: 'refresh_token',
    refresh_token: currentToken.refresh,
    redirect_uri: config.AMOCRM_REDIRECT_URL
  };

  const { 
    data: { 
      access_token: access, 
      refresh_token: refresh 
    } 
  } = await axios.post(url, body);

  /**
   * After getting refresh and access tokens from API, we need to save their
   */
  await saveToken({ access, refresh }, tokensTypes.AMOCRM);

  return true;
}

async function createNewLead(rawData, token) {
  const contact = await storeEntity(fromRawContact(rawData), 'contacts', token);
  if(rawData.company) {
    const company = await storeEntity(fromRawCompany(rawData), 'companies', token);
    await linkCompanyWithContact({ company, contact }, token);
  }
  const lead = await storeEntity(fromRawLead(rawData, contact), 'leads', token);
  if(rawData.description) await storeEntity(fromRawNote(rawData, lead), 'notes', token);
  return true;
}

/**
 * Private pure getters
 */
const getRequestConfig = token => ({ headers: { 'Authorization': `Bearer ${token.access}` } });

const getDataFromResponse = (response, key) => response.data._embedded[key][0];

const buildCustomField = (field_id, value) => ({
  field_id,
  values: [
    {
      value
    }
  ]
});

/**
 * Private fromRaw methods for transform data
 */
const fromRawContact = ({ fullname: name, email, phone }) => {
  const customFields = [];
  if(phone) customFields.push(buildCustomField(229497, phone));
  if(email) customFields.push(buildCustomField(229499, email));

  return [
    {
      name,
      custom_fields_values: [...customFields]
    }
  ];
};

const fromRawCompany = ({ company }) => ([{ name: company }]);

const fromRawLead = ({ fullname, company }, { id }) => ([
  {
    name: `${company || fullname}`,
    price: 0,
    _embedded: { contacts: [{ id }] }
  }
]);

const fromRawNote = ({ description: text }, { id: entity_id }) => ([
  {
    entity_id,
    note_type: 'common',
    params: { text }
  }
]);

/**
 * Private async methods
 */
async function storeEntity(entity, entityType, token) {
  const url = storeURLs[entityType];
  const requestConfig = getRequestConfig(token);

  const response = await axios.post(url, entity, requestConfig);
  return getDataFromResponse(response, entityType);
}

async function linkCompanyWithContact({ company, contact }, token) {
  const url = `${config.AMOCRM_URL}/api/v4/companies/${company.id}/link`;
  const requestConfig = getRequestConfig(token);

  const body = [
    {
      to_entity_id: contact.id,
      to_entity_type: 'contacts'
    }
  ];

  const response = await axios.post(url, body, requestConfig);
  return getDataFromResponse(response, 'links');
}


module.exports = {
  createNewLead,
  refreshCrmToken
};
