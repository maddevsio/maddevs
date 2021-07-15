const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// sentry
const { configureSentry } = require('./sentry')

// radiator
const runRadiator = require('./radiator')

// custom middlewares
const applyXFrame = require('./middlewares/applyXFrame')
const redirectToHttps = require('./middlewares/redirectToHttps')
const redirectToTrailingSlash = require('./middlewares/redirectToTrailingSlash')
const redirectToCorrectBlogUrl = require('./middlewares/redirectToCorrectBlogUrl')
const redirectToCustomerUrl = require('./middlewares/redirectToCustomerUrl')
const redirectToCorrectPostUrl = require('./middlewares/redirectToCorrectPostUrl')
const redirectHrTags = require('./middlewares/redirectHrTags')
const redirectInvalidLinks = require('./middlewares/redirectInvalidLinks')

// config
const config = require('./config')

// routers
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

function bootstrap() {
  const app = express()
  const Sentry = configureSentry(app)

  // Sentry handlers
  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.tracingHandler())

  // External middlewares
  app.use(cors())
  app.use(bodyParser.json(config.bodyParserJSONConfig))
  app.use(bodyParser.urlencoded(config.bodyParserURLEncodedConfig))

  // Enable trust proxy
  app.enable('trust proxy')

  // Custom middlewares
  app.use(applyXFrame)
  app.use(redirectToHttps)
  app.use(redirectToTrailingSlash)
  app.use(redirectToCorrectBlogUrl)
  app.use(redirectToCustomerUrl)
  app.use(redirectToCorrectPostUrl)
  app.use(redirectHrTags)
  app.use(redirectInvalidLinks)

  // Routers
  app.use(webRouter)
  app.use('/api', apiRouter)

  // Errors handler
  app.use(Sentry.Handlers.errorHandler())

  // radiator running
  if (process.env.FF_ENVIRONMENT === 'staging') runRadiator()

  return app
}

module.exports = bootstrap()
