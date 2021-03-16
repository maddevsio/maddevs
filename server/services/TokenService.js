const mongoose = require('mongoose');

const tokensTypes = {
  AMOCRM: 'amocrm'
};

const tokenSchema = new mongoose.Schema({
  type: String,
  refresh: String,
  access: String
});

const Token = mongoose.model('Token', tokenSchema);


const getToken = async type => {
  try {
    const token = await Token.findOne({ type });
    return token;
  } catch(error) {
    console.error('Error during getting token', error);
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
    console.error('Error during save token', error);
  }
};

module.exports = {
  getToken,
  saveToken,
  tokensTypes
};
