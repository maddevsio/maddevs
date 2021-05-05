const express = require('express')

// controllers
const { switchLanguage } = require('../controllers/LanguageController')
// const { getSitemap } = require('../controllers/SitemapController')

const router = express.Router()

router.get('/ru', switchLanguage)
router.get('/en', switchLanguage)
// router.get('/sitemap.xml', getSitemap)

module.exports = router
