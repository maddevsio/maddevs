const express = require('express');
const router = express.Router();

const sendpulseRoutes = require('./sendpulse/routes');
// const amocrmRoutes = require('./amocrm/routes');

router.use('/sendpulse', sendpulseRoutes);
// router.use('/amocrm', amocrmRoutes);

module.exports = router;
