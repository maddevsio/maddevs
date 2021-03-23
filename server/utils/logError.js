const Sentry = require('@sentry/node');

function logError(error, message = '') {
  Sentry.captureException(error);
  console.error(message, error);
}

module.exports = logError;
