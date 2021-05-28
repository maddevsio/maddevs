const express = require('express')
const multer = require('multer')

// controllers
const { create: createLead } = require('../controllers/LeadsController')
const { index: sendCareerEmail } = require('../controllers/CareersController')

const router = express.Router()

router.post('/leads', createLead)
router.post('/careers', multer().single('file'), sendCareerEmail)

module.exports = router
