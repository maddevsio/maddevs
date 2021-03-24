const axios = require('axios');
const config = require('../config');
const { getToken, saveToken, tokensTypes } = require('./TokenService');

const customFieldIds = {
  phone: 229497,
  email: 229499,
  description: Number(config.AMOCRM_DESCRIPTION_FIELD_ID)
};

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
  const company = await storeEntity(fromRawCompany(rawData), 'companies', token);
  await storeEntity(fromRawLead(rawData, contact, company), 'leads', token);
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
const fromRawContact = ({ fullname, email, phone }) => {
  const customFields = [];

  const name = fullname;
  if(phone) customFields.push(buildCustomField(customFieldIds.phone, phone));
  if(email) customFields.push(buildCustomField(customFieldIds.email, email));

  return [
    {
      name,
      custom_fields_values: [...customFields]
    }
  ];
};

const fromRawCompany = ({ company }) => ([{ name: company }]);

const fromRawLead = ({ fullname, company, description }, { id: contactId }, { id: companyId }) => {
  const customFields = [];
  if(description) customFields.push(buildCustomField(customFieldIds.description, description));

  return [
    {
      name: `${company || fullname}`,
      price: 0,
      _embedded: { contacts: [{ id: contactId }], companies: [{ id: companyId }] },
      custom_fields_values: [...customFields]
    }
  ];
};

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


module.exports = {
  createNewLead,
  refreshCrmToken
};
