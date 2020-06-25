const jestConfigBase =  require('./jest_config/jest.config');

module.exports = {
  ...jestConfigBase,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.vue',
    '<rootDir>/client/pages/*.vue'
  ],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov'
  ]
};
