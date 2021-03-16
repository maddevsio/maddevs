const axios = require('axios');
const mongoose = require('mongoose');
const config = require('../config');

const tokensSchema = new mongoose.Schema({
  type: String,
  refresh: String,
  access: String
});

const Tokens = mongoose.model('Tokens', tokensSchema);

const getTokens = async () => {
  const tokens = await Tokens.findOne({ type: 'amocrm' });
  return tokens;
};

const saveTokens = async ({ access, refresh }) => {
  const tokens = await getTokens();

  tokens.access = access;
  tokens.refresh = refresh;

  await tokens.save();

  return tokens;
};

const refreshTokens = async () => {
  const tokens = await getTokens();
  const url = config.AMOCRM_URL + '/oauth2/access_token';
  const body = {
    client_id: config.AMOCRM_ID,
    client_secret: config.AMOCRM_SECRET,
    grant_type: 'refresh_token',
    refresh_token: tokens.refresh,
    redirect_uri: config.AMOCRM_REDIRECT_URL
  };

  try {
    const { data: { access_token: access, refresh_token: refresh } } = await axios.post(url, body);
    await saveTokens({ access, refresh });
    return { access, refresh };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getTokens,
  saveTokens,
  refreshTokens
};
