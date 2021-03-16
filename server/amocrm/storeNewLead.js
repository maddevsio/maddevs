const axios = require('axios');
const config = require('../config');

const createLeadItem = ({ fullName, email }) => ([
  {
    name: `${fullName}, ${email}`,
    price: 0
  }
]);

const storeLead = async (body, token) => {
  const url = config.AMOCRM_URL + '/api/v4/leads';
  const headers = { 'Authorization': `Bearer ${token.access}` };
  const requestConfig = { headers };

  await axios.post(url, body, requestConfig);
  return true;
};

const storeNewLead = async (rawData, token) => {
  const leadItem = createLeadItem(rawData);
  const success = await storeLead(leadItem, token);
  return success;
};

module.exports = storeNewLead; 
