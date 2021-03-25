// services
const { getToken, tokensTypes } = require('../services/TokenService')
const { refreshCrmToken, createNewLead } = require('../services/LeadsService')

// utilities
const logError = require('../utils/logError')

async function createLead(req, res) {
  try {
    /**
     * We need to refresh the current amocrm token 'cause we haven't an ability to refresh the access token after expiration
     * So, we just refresh token before any request for our safety
     * @see {@link https://www.amocrm.ru/developers/content/oauth/oauth}
     */
    await refreshCrmToken()

    const token = await getToken(tokensTypes.AMOCRM)
    const success = await createNewLead(req.body, token)

    return res.status(200).json({ success })
  } catch (error) {
    logError(error, 'Error during creating lead')
    return res.status(500).json({ success: false, message: 'Error during creating lead', details: error })
  }
}

module.exports = {
  createLead,
}
