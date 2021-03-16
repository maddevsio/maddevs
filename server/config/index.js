const envs = require('./env');

// json
const customerUniversityRedirects = require('./json/customer-university-redirects');
const blogRedirects = require('./json/blog-redirects');

const bodyParserJSONConfig = { limit: '5mb' };
const bodyParserURLEncodedConfig = { limit: '5mb', extended: true };

module.exports = {
  ...envs,
  bodyParserJSONConfig,
  bodyParserURLEncodedConfig,
  customerUniversityRedirects,
  blogRedirects
};
