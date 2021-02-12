const express = require('express');
const axios = require('axios');
const sendMessageToSlack = require('../helpers/sendMessageToSlack');
const scraper = require('../scraper');
const storage = require('../helpers/storage');

const _config_ = require('../config');

const router = express.Router();
const axiosApiInstance = axios.create();

let isRefreshing = false;
let failedQueue = [];

(async () => {
  const token = await scraper();
  console.log('Token ready!');
  const url = _config_.AMOCRM_API_URL + '/oauth2/access_token';
  const data = {
    client_id: _config_.AMOCRM_CLIENT_ID,
    client_secret: _config_.AMOCRM_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: token,
    redirect_uri: _config_.AMOCRM_REDIRECT_URI
  };
  // Don't use axiosApiInstance. Use new instance
  console.log('#####', data, url);
  axios.post(url, data).then(res => {
    const json = {
      'access_token': res.data.access_token,
      'refresh_token': res.data.refresh_token
    };
    storage.write(_config_.STORAGE_TOKEN, json);
    return res.data;
  }).catch(err => {
    return err.response && err.response.data || err;
  });
})();

const refreshAccessToken = () => {
  const url = _config_.AMOCRM_API_URL + '/oauth2/access_token';
  const data = {
    client_id: _config_.AMOCRM_CLIENT_ID,
    client_secret: _config_.AMOCRM_CLIENT_SECRET,
    grant_type: 'refresh_token',
    refresh_token: storage.read(_config_.STORAGE_TOKEN, 'access_token'),
    redirect_uri: _config_.AMOCRM_REDIRECT_URI
  };
  return new Promise(function (resolve, reject) {
    // Don't use axiosApiInstance. Use new instance
    axios.post(url, data).then(res => {
      const json = {
        'access_token': res.data.access_token,
        'refresh_token': res.data.refresh_token
      };
      storage.write(_config_.STORAGE_TOKEN, json);
    }).catch(err => {
      reject(err);
    });
  });
}

const createLead = async (req, res) => {
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
}

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
    return new Promise(function (resolve, reject) {
      failedQueue.push({ resolve, reject });
    }).then(() => {
      originalRequest.headers.Authorization = storage.read(_config_.STORAGE_TOKEN, 'access_token');
      return axiosApiInstance(originalRequest);
    }).catch(error => Promise.reject(error));
  }

  originalRequest._retry = true;
  isRefreshing = true;

  return refreshAccessToken()
    .then(access_token => {
      processFailedQueue();
      originalRequest.headers.Authorization = 'Bearer ' + access_token;
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
const sendToSlack = (message) => {
  const webhook = _config_.AMOCRM_SLACK_WEBHOOK_URL;
  const layout = {
    text: `AmoCRM: ${message}\nPlease update the auth token.`
  };
  sendMessageToSlack(webhook, layout);
};

const handleRefreshTokenInvalid = () => {
  const message = 'Refresh token invalid!';
  const respErr = {
    status: 400,
    detail: message
  };
  sendToSlack(message);
  return Promise.reject(respErr);
};

const handleRefreshTokenExpired = () => {
  const message = 'Refresh token expired!';
  const respErr = {
    status: 401,
    detail: message
  };
  sendToSlack(message);
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

// ------------ Routes -----------(();
router.route('/create-lead').post(createLead);

module.exports = router;
