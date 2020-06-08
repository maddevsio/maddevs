const express = require('express');
const router = express.Router();
const sendpulse = require('sendpulse-api');
const dotenv = require('dotenv');
dotenv.config();

const API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID;
const API_KEY = process.env.NODE_SENDPULSE_API_KEY;
const TOKEN_STORAGE = '/tmp/';

router.post('/send-email', (req, res) => {
  if (req.body.templateId === null || req.body.templateId === undefined) {
    res.json({
      status: 500,
      message: 'templateId not found'
    });
  } else if (typeof req.body.templateId !== 'number') {
    res.json({
      status: 500,
      message: 'templateId must be a type number'
    });
  } else {
    sendpulse.init(API_USER_ID, API_KEY, TOKEN_STORAGE, () => {
      const answerGetter = data => {
        res.json(data);
      }
      const email = {
        'subject': 'Test',
        'template': {
          'id': req.body.templateId, // Required
          'variables': req.body.variables
        },
        'from': {
          'name': 'Mad Devs marketing',
          'email': 'denis.grushkin@maddevs.io'
        },
        'to': [{
          'name': 'Mad Devs team',
          'email': 'denisoed@gmail.com'
        }]
      };
      sendpulse.smtpSendMail(answerGetter, email);
    });
  }
});

module.exports = router;
