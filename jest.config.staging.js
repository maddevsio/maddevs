const jestConfigBase = require('./jest_config/jest.config');

module.exports = {
  ...jestConfigBase,
  testResultsProcessor: './jest_config/jest-coverage-slack.js'
};
