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
        'id': 296617,
        'variables': {
          'name': 'Владислав',
          'code': '123456'
        }
      },
      'from': {
        'name': 'Denisoed',
        'email': 'denis.grushkin@maddevs.io'
      },
      'to': [{
        'name': 'Denis',
        'email': 'denisoed@gmail.com'
      }]
    };
    sendpulse.smtpSendMail(answerGetter, email);
  });
});

module.exports = router;
