const dotenv = require('dotenv');
dotenv.config();

// Amo CRM
const AMOCRM_API_URL = process.env.NODE_AMOCRM_API_URL;
const AMOCRM_LOGIN = process.env.NODE_AMOCRM_LOGIN;
const AMOCRM_PASSWORD = process.env.NODE_AMOCRM_PASSWORD;
const AMOCRM_INTEGRATION_ID = process.env.NODE_AMOCRM_INTEGRATION_ID;
const AMOCRM_REDIRECT_URI = process.env.NODE_AMOCRM_REDIRECT_URI;

// Send pulse
const API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID;
const API_KEY = process.env.NODE_SENDPULSE_API_KEY;
const TOKEN_STORAGE = '/tmp/';

module.exports = {
  AMOCRM_API_URL,
  AMOCRM_LOGIN,
  AMOCRM_PASSWORD,
  AMOCRM_INTEGRATION_ID,
  AMOCRM_REDIRECT_URI,
  API_USER_ID,
  API_KEY,
  TOKEN_STORAGE
};
