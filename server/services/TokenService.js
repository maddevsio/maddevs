const Token = require('../models/TokenModel');
const logError = require('../utils/logError');

const tokensTypes = {
  AMOCRM: 'amocrm'
};

const getToken = async type => {
  try {
    const token = await Token.findOne({ type });
    return token;
  } catch(error) {
    logError(error, 'Error during getting token');
  }
};

const saveToken = async ({ access, refresh }, type) => {
  const token = await getToken(type);

  try {
    token.access = access;
    token.refresh = refresh;
    await token.save();

    return token;
  } catch(error) {
    logError(error, 'Error during save token');
  }
};

module.exports = {
  getToken,
  saveToken,
  tokensTypes
};
