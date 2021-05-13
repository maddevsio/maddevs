const express = require('express')

// controllers
const { create: createLead } = require('../controllers/LeadsController')

const router = express.Router()

router.post('/leads', createLead)

module.exports = router
