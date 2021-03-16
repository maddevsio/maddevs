// services
const { getToken, tokensTypes } = require('../services/TokenService');
const { refreshCrmToken, storeNewLead } = require('../services/LeadsService');

async function createLead(req, res) {
  try {
    /**
     * We need to refresh the current amocrm token 'cause we haven't an ability to refresh the access token after expiration
     * So, we just refresh token before any request for our safety
     * @see {@link https://www.amocrm.ru/developers/content/oauth/oauth}
     */
    await refreshCrmToken();
    
    const token = await getToken(tokensTypes.AMOCRM);
    const success = await storeNewLead(req.body.variables, token);

    return res.status(200).json({ success });
  } catch(error) {
    console.error(error);
    return res.status(500).json({ message: 'Error during creating lead', details: error });
  }
}

module.exports = {
  createLead
};
