const express = require('express');
const router = express.Router();
const sendpulse = require('sendpulse-api');
const dotenv = require('dotenv');
const shell = require('shelljs');
const axios = require('axios');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

dotenv.config();

const adapter = new FileAsync('db.json');

const API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID;
const API_KEY = process.env.NODE_SENDPULSE_API_KEY;
const TOKEN_STORAGE = '/tmp/';

router.post('/send-email', (req, res) => {
  if (req.body.templateId === null || req.body.templateId === undefined) {
    res.status(500).json({
      status: 500,
      message: 'templateId key not found'
    });
  } else if (typeof req.body.templateId !== 'number') {
    res.status(500).json({
      status: 500,
      message: 'templateId key must be a type number'
    });
  } else if (req.body.variables === null || req.body.variables === undefined) {
    res.status(500).json({
      status: 500,
      message: 'variables key not found'
    });
  } else {
    sendpulse.init(API_USER_ID, API_KEY, TOKEN_STORAGE, () => {
      const answerGetter = data => {
        res.json(data);
      };
      let email = {};
      if (req.body && req.body.attachment) {
        email = {
          'subject': req.body.variables.subject,
          'template': {
            'id': req.body.templateId, // Required
            'variables': req.body.variables
          },
          'from': {
            'name': req.body.variables.modalTitle,
            'email': 'marketing@maddevs.io'
          },
          'to': [{
            'name': 'Mad Devs team',
            'email': req.body.variables.emailTo
          }],
          'attachments_binary': { [req.body.attachment.name]: req.body.attachment.base64 }
        };
      } else {
        email = {
          'subject': req.body.variables.subject,
          'template': {
            'id': req.body.templateId, // Required
            'variables': req.body.variables
          },
          'from': {
            'name': req.body.variables.modalTitle,
            'email': 'marketing@maddevs.io'
          },
          'to': [{
            'name': 'Mad Devs team',
            'email': req.body.variables.emailTo
          }]
        };
      }
      sendpulse.smtpSendMail(answerGetter, email);
    });
  }
});

router.post('/prismic-hook', (req, res) => {
  if (!req.body.domain || req.body.domain !== 'superpupertest') {
    res.status(404).json({
      status: 403,
      message: 'Access forbidden'
    });
  }

  // Document is published or unpublished
  if (req.body.type === 'api-update' && !!req.body.documents && req.body.documents.length) {
    shell.exec('npm run generate', {async: true});

    res.status(200).json({
      status: 200,
      message: 'Success'
    });
  }

  res.status(500).json({
    status: 500,
    message: 'error'
  });
});

router.post('/create-lead', (req, res) => {
  low(adapter).then(db => {
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
    axios.post('https://denisoed.amocrm.ru/api/v4/leads', data, config).then((res) => {
      res.status(200).json(res);
    }).catch(err => {
      if (err.response && err.response.status && err.response.status === 401) {
        const data = {
          "client_id": "71d61f61-fc0a-4b5a-80a6-cc9790a0fa80",
          "client_secret": "0Edn0bCESOw1smOgKhLhRARW6Ov7Qbm3eSrBdFrJXSLvWE3BOygybOSMLqFgjWX3",
          "grant_type": "refresh_token",
          "refresh_token": process.env.NODE_AMOCRM_REFRESH_TOKEN,
          "redirect_uri": "https://d3164645214f.ngrok.io"
        };
        updateAccessToken(data);
      }
      res.json(err);
    });
  });
});

function updateAccessToken(data) {
  axios.post('https://denisoed.amocrm.ru/oauth2/access_token', data).then((res) => {
    low(adapter).then(db => {
      db.set('access_token', res.data.access_token).write();
    });
  }).catch(err => {
    return err;
  });
};

module.exports = router;
