const express = require('express');
const axios = require('axios');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const sendMessageToSlack = require('../helpers/sendMessageToSlack');

const _config_ = require('../config');

const router = express.Router();
const axiosApiInstance = axios.create();

// --- Init LowDB --- //
const adapter = new FileAsync(_config_.STORAGE_TOKEN);
let db;
low(adapter).then(database => {
  db = database;
  if (!db.get('refresh_token').value() && db.get('refresh_token').value() !== '') {
    db.defaults({
      access_token: 'xxx',
      refresh_token: _config_.AMOCRM_REFRESH_TOKEN
    }).write();
  }
});
// -- END init LowDB --- //

let isRefreshing = false;
let failedQueue = [];

function refreshAccessToken() {
  const data = {
    client_id: _config_.AMOCRM_CLIENT_ID,
    client_secret: _config_.AMOCRM_CLIENT_SECRET,
    grant_type: 'refresh_token',
    refresh_token: db.get('refresh_token').value(),
    redirect_uri: _config_.AMOCRM_REDIRECT_URI
  };
  const url = _config_.AMOCRM_API_URL + '/oauth2/access_token';
  return new Promise(function (resolve, reject) {
    // Don't use axiosApiInstance. Use new instance
    axios.post(url, data).then(res => {
      db.set('access_token', res.data.access_token).write();
      db.set('refresh_token', res.data.refresh_token).write();
      resolve(db.get('access_token').value());
    }).catch(err => {
      reject(err);
    });
  });
}

function createLead(req, res) {
  const url = _config_.AMOCRM_API_URL + '/api/v4/leads';
  const data = req.body;
  let config = {
    headers: {
      'Authorization': 'Bearer ' + db.get('access_token').value()
    }
  };
  return axiosApiInstance.post(url, data, config)
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
      originalRequest.headers.Authorization = db.get('access_token').value();
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
const sendToSlack = () => {
  const layout = {
    text: 'AmoCRM: Refresh token invalid or expired!'
  };
  sendMessageToSlack(layout);
};

const handleRefreshTokenInvalid = () => {
  db.set('refresh_token', _config_.AMOCRM_REFRESH_TOKEN).write();
  const respErr = {
    status: 400,
    detail: 'Refresh token invalid!'
  };
  return Promise.reject(respErr);
};

const handleRefreshTokenExpired = () => {
  db.set('refresh_token', _config_.AMOCRM_REFRESH_TOKEN).write();
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

// ------------ Routes ------------- //
router.route('/create-lead').post(createLead);

module.exports = router;
