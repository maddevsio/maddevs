const express = require('express');
const router = express.Router();

const sendpulse = require('./sendpulse');
const amocrm = require('./amocrm');

router.use('/sendpulse', sendpulse);
router.use('/amocrm', amocrm);

module.exports = router;
