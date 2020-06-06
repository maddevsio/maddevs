const express = require('express');
const router = express.Router();
const sendpulse = require('sendpulse-api');
const dotenv = require('dotenv');
dotenv.config();

const API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID;
const API_KEY = process.env.NODE_SENDPULSE_API_KEY;
const TOKEN_STORAGE = '/tmp/';

router.post('/send-email', (req, res) => {
  sendpulse.init(API_USER_ID, API_KEY, TOKEN_STORAGE, () => {
    const answerGetter = data => {
      res.json(data);
    }
    const email = {
      'subject': 'Test',
      'template': {
        'id': req.body.templateId, // Required
        'variables': {
          'fullName': req.body.fullName,
          'company': req.body.company,
          'email': req.body.email,
          'phoneNumber': req.body.phoneNumber,
        }
      },
      'from': {
        'name': 'Mad Devs',
        'email': 'denis.grushkin@maddevs.io'
      },
      'to': [{
        'name': 'Mad Devs',
        'email': 'denisoed@gmail.com'
      }]
    };
    sendpulse.smtpSendMail(answerGetter, email);
  });
});

module.exports = router;
