const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const config = require('../config');

dotenv.config();

const router = express.Router();
const axiosApiInstance = axios.create();

// --- Init LowDB --- //
const adapter = new FileAsync('db.json');
let db;
(async () => db = await low(adapter))();
// -- END init LowDB --- //

let isRefreshing = false;
let failedQueue = [];

function refreshAccessToken() {
  const data = {
    client_id: '71d61f61-fc0a-4b5a-80a6-cc9790a0fa80',
    client_secret: '0Edn0bCESOw1smOgKhLhRARW6Ov7Qbm3eSrBdFrJXSLvWE3BOygybOSMLqFgjWX3',
    grant_type: 'refresh_token',
    refresh_token: config.AMOCRM_REFRESH_TOKEN,
    redirect_uri: 'https://d3164645214f.ngrok.io'
  };
  return new Promise((resolve, reject) => {
    return axiosApiInstance.post('https://denisoed.amocrm.ru/oauth2/access_token', data).then(res => {
      db.set('access_token', res.data.access_token).write();
      db.set('refresh_token', res.data.refresh_token).write();
      resolve(db.get('access_token').value());
    }).catch(err => {
      reject(err);
    });
  });
}

function createLead() {
  console.log('GOOOOOOO');
  const token = db.get('access_token').value();
  const data = [
    {
      name: 'Name: ' + Math.random(1, 100)
    }
  ];
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };
  console.log('CREATING');
  return axiosApiInstance.post('https://denisoed.amocrm.ru/api/v4/leads', data, config)
    .then(res => {
      console.log('CREATED');
      return res;
    });
}

const processFailedQueue = (error = null) => {
  isRefreshing = false;
  failedQueue.forEach(prom => error ? prom.reject(error) : prom.resolve());
  failedQueue = [];
};

const isAuthenticationError = error => error.response.status === 401;

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
      console.log('REFRESHED');
      processFailedQueue();
      originalRequest.headers.Authorization = 'Bearer ' + access_token;
      return axios(originalRequest);
    })
    .catch(error => {
      processFailedQueue(error);
      return Promise.reject(error);
    });
};

/**
 * This function will be called if the refresh token is invalid. 
 */
const handleRefreshTokenError = error => {
  console.log('Refresh token expired!');
  return Promise.reject(error);
};

axiosApiInstance.interceptors.response.use(response => {
  return response;
}, function (error) {
  console.log('ERROR');
  if (error.response && isAuthenticationError(error)) {
    return handleAuthenticationError(error)
      .catch(error => handleRefreshTokenError(error));
  }
  return Promise.reject(error);
});

// ------------ Routes ------------- //
router.route('/create-lead').post(createLead);

module.exports = router;
