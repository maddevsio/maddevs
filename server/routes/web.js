const express = require('express')

// controllers
const { switchLanguage } = require('../controllers/LanguageController')

const router = express.Router()

router.get('/ru', switchLanguage)
router.get('/en', switchLanguage)

module.exports = router
