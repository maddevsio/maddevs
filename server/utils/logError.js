const Sentry = require('@sentry/node')

function logError(error, message = '') {
  Sentry.captureException(error)
  // eslint-disable-next-line
  console.error(message, error)
}

module.exports = logError
