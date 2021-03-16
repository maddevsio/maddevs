const axios = require('axios');
const config = require('../config');

const createNewLead = async ({ fullName, email }, { access }) => {
  const url = config.AMOCRM_URL + '/api/v4/leads';

  const body = [
    {
      name: `${fullName}, ${email}`,
      price: 0
    }
  ];

  try {
    const { data } = await axios.post(url, body, {
      headers: {
        'Authorization': `Bearer ${access}`
      }
    });
    return data;
  } catch(err) {
    return err;
  }
};

module.exports = createNewLead; 
