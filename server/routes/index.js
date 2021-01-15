const express = require('express');
const router = express.Router();
const sendpulse = require('sendpulse-api');
const dotenv = require('dotenv');
const shell = require('shelljs');
const redirect = require('./json/redirect.json');
dotenv.config();

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
            'email': 'earthur@maddevs.io'
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
            'email': 'earthur@maddevs.io'
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

// Redirect logic
redirect.list.forEach(link => {
  router.get(link.from, (req, res) => {
    res.redirect(301, link.to);
  });  
});

router.get('https://blog.maddevs.co', (req, res) => {
  res.redirect(301, 'https://maddevs.co/blog');
});  

module.exports = router;
