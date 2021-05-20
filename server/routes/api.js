const express = require('express')

// controllers
const { create: createLead } = require('../controllers/LeadsController')
const { index: sendCareerEmail } = require('../controllers/CareersController')

const router = express.Router()

router.post('/leads', createLead)
router.post('/careers', sendCareerEmail)

module.exports = router
