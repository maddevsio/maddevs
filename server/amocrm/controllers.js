const axios = require('axios');
const scraper = require('../scraper');
const storage = require('../helpers/storage');

const _config_ = require('../config');

const axiosApiInstance = axios.create();

let isRefreshing = false;
let failedQueue = [];

// (async () => {
//   const tokens = await scraper();
//   console.log('Tokens ready!'); // For develop
//   const url = _config_.AMOCRM_API_URL + '/oauth2/access_token';
//   const data = {
//     client_id: tokens.client_id,
//     client_secret: tokens.client_secret,
//     grant_type: 'authorization_code',
//     code: tokens.code,
//     redirect_uri: _config_.AMOCRM_REDIRECT_URI
//   };
//   // Don't use axiosApiInstance. Use new instance
//   axios.post(url, data).then(res => {
//     const json = {
//       access_token: res.data.access_token,
//       refresh_token: res.data.refresh_token,
//       client_id: tokens.client_id,
//       client_secret: tokens.client_secret
//     };
//     storage.write(_config_.STORAGE_TOKEN, json);
//     return res.data;
//   }).catch(err => {
//     return err.response && err.response.data || err;
//   });
// })();

const refreshAccessToken = async () => {
  const url = _config_.AMOCRM_API_URL + '/oauth2/access_token';
  const data = {
    client_id: await storage.read(_config_.STORAGE_TOKEN, 'client_id'),
    client_secret: await storage.read(_config_.STORAGE_TOKEN, 'client_secret'),
    grant_type: 'refresh_token',
    refresh_token: await storage.read(_config_.STORAGE_TOKEN, 'refresh_token'),
    redirect_uri: _config_.AMOCRM_REDIRECT_URI
  };
  try {
    const res = await axios.post(url, data);
    const json = {
      access_token: res.data.access_token,
      refresh_token: res.data.refresh_token
    };
    await storage.write(_config_.STORAGE_TOKEN, json);
    return json;
  } catch (error) {
    return error;
  }
};

const createNewLead = async (req, res) => {
  const access_token = await storage.read(_config_.STORAGE_TOKEN, 'access_token');
  const url = _config_.AMOCRM_API_URL + '/api/v4/leads';
  let config = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  };
  return axiosApiInstance.post(url, req.body, config)
    .then(newCard => {
      res.status(200).json(newCard.data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

const processFailedQueue = (error = null) => {
  isRefreshing = false;
  failedQueue.forEach(prom => error ? prom.reject(error) : prom.resolve());
  failedQueue = [];
};

const isAccessTokenExpired = error => error.response.status === 401;
const isRefreshTokenExpired = error => error.response.data.hint &&
  error.response.data.hint === 'Token has been revoked';
const isRefreshTokenInvalid = error => error.response.data.hint &&
  error.response.data.hint === 'Cannot decrypt the refresh token';

const handleAuthenticationError = async error => {
  if (error.config._retry) {
    return Promise.reject(error);
  }

  const originalRequest = error.config;

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    }).then(async () => {
      originalRequest.headers.Authorization = await storage.read(_config_.STORAGE_TOKEN, 'access_token');
      return axiosApiInstance(originalRequest);
    }).catch(error => Promise.reject(error));
  }

  originalRequest._retry = true;
  isRefreshing = true;

  return refreshAccessToken()
    .then(tokens => {
      processFailedQueue();
      originalRequest.headers.Authorization = 'Bearer ' + tokens.access_token;
      return axiosApiInstance(originalRequest);
    })
    .catch(error => {
      processFailedQueue(error);
      return handleRefreshTokenInvalid();
    });
};

/**
 * This functions will be called if the refresh token is invalid. 
 */
const handleRefreshTokenInvalid = () => {
  const respErr = {
    status: 400,
    detail: 'Refresh token invalid!'
  };
  return Promise.reject(respErr);
};

const handleRefreshTokenExpired = () => {
  const respErr = {
    status: 401,
    detail: 'Refresh token expired!'
  };
  return Promise.reject(respErr);
};

axiosApiInstance.interceptors.response.use(response => {
  return response;
}, function (error) {
  if (error.response && isRefreshTokenInvalid(error)) {
    return handleRefreshTokenInvalid();
  }
  if (error.response && isRefreshTokenExpired(error)) {
    return handleRefreshTokenExpired();
  }
  if (error.response && isAccessTokenExpired(error)) {
    return handleAuthenticationError(error);
  }
  return Promise.reject(error.response && error.response.data || error);
});

module.exports = {
  createNewLead
};
