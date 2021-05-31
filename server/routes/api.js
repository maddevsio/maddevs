const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/tmp')
  },
})

// controllers
const { create: createLead } = require('../controllers/LeadsController')
const { index: sendCareerEmail } = require('../controllers/CareersController')

const router = express.Router()

router.post('/leads', createLead)
router.post('/careers', multer({ storage }).single('cvFile'), sendCareerEmail)

module.exports = router
