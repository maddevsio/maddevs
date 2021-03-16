const express = require('express');

// controllers
const { switchLanguage } = require('../controllers/LanguageController');
const { index: sendEmail } = require('../controllers/EmailsController');
const { createLead } = require('../controllers/LeadsController');

const router = express.Router();

router.get('/ru', switchLanguage);

router.get('/en', switchLanguage);

router.post('/send-email', sendEmail);

router.post('/leads', createLead);

module.exports = router;
