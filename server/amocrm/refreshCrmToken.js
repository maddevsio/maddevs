const axios = require('axios');
const config = require('../config');
const { getToken, saveToken, tokensTypes } = require('../tokens');

const refreshCrmToken = async () => {
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
};

module.exports = refreshCrmToken;
