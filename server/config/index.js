const envs = require('./env')

// json
const customerUniversityRedirects = require('./json/customer-university-redirects')
const blogRedirects = require('./json/blog-redirects')
const hrTagsRedirects = require('./json/hr-tags-redirects')
const invalidLinksRedirects = require('./json/invalid-links-redirects')

const bodyParserJSONConfig = { limit: '5mb' }
const bodyParserURLEncodedConfig = { limit: '5mb', extended: true }

const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

const sentryConfig = {
  dsn: envs.SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: envs.NODE_ENV,
}

module.exports = {
  ...envs,
  bodyParserJSONConfig,
  bodyParserURLEncodedConfig,
  mongoConfig,
  customerUniversityRedirects,
  blogRedirects,
  hrTagsRedirects,
  invalidLinksRedirects,
  sentryConfig,
}
