const Sentry = require('@sentry/node')
const config = require('../config')

function configureSentry() {
  Sentry.init(config.sentryConfig)
  return Sentry
}

module.exports = {
  configureSentry,
}
