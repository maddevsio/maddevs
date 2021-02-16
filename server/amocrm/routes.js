const express = require('express');
const { createNewLead } = require('./controllers');

const router = express.Router();

router
  .route('/leads')

  // create new lead
  .post(createNewLead);

module.exports = router;
