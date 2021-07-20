const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/tmp')
  },
})

// controllers
const { create: createLead } = require('../controllers/LeadsController')
const { index: sendVacancyApplication } = require('../controllers/CareersController')
const { send } = require('../controllers/SendEmailController')

const router = express.Router()

router.post('/leads', createLead)
router.post('/careers', multer({ storage }).single('cvFile'), sendVacancyApplication)
router.post('/send-email', multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } }).single('base64'), send)

module.exports = router
