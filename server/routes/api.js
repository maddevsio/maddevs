const express = require('express')

// controllers
const { index: sendEmail } = require('../controllers/EmailsController')
const { createLead } = require('../controllers/LeadsController')

const router = express.Router()

router.post('/send-email', sendEmail)
router.post('/leads', createLead)

module.exports = router
