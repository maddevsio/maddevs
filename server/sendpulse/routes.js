const express = require('express');
const { sendEmail } = require('./controllers');

const router = express.Router();

router
  .route('/send-email')

  // create new lead
  .post(sendEmail);

module.exports = router;
