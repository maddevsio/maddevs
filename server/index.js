const express = require('express')

// db
const cors = require('cors')
const bodyParser = require('body-parser')
const { connect } = require('./db')

// sentry
const { configureSentry } = require('./sentry')

// custom middlewares
const applyXFrame = require('./middlewares/applyXFrame')
const redirectToHttps = require('./middlewares/redirectToHttps')
const redirectToTrailingSlash = require('./middlewares/redirectToTrailingSlash')
const redirectToCorrectBlogUrl = require('./middlewares/redirectToCorrectBlogUrl')
const redirectToCustomerUrl = require('./middlewares/redirectToCustomerUrl')

// config
const config = require('./config')

// routers
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

function bootstrap() {
  const app = express()
  const Sentry = configureSentry(app)

  // DB connect
  connect(config.DATABASE_URL, config.mongoConfig)

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

  // Routers
  app.use(webRouter)
  app.use('/api', apiRouter)

  // Errors handler
  app.use(Sentry.Handlers.errorHandler())

  return app
}

module.exports = bootstrap()
