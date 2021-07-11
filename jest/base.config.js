module.exports = {
  // tell Jest to handle `*.vue` files
  rootDir: '../',
  moduleFileExtensions: ['js', 'json', 'vue'],
  watchman: true,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/client/$1',
    '^~~/(.*)$': '<rootDir>/client/$1',
    '^@/(.*)$': '<rootDir>/client/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/jest/assetsTransformer.js',
  },
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    // process `*.svg` files with `imgTransform.js`
    '\\.(svg|png|webp|jpg|jpeg)$': '<rootDir>/jest/imgTransformer.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!vue-lottie)'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/**/*.vue',
    '<rootDir>/client/**/*.js',
    '<rootDir>/server/**/*.js',
    '<rootDir>/radiator/**/*.js',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/server/sentry', '<rootDir>/server/db', '<rootDir>/server/routes', '<rootDir>/server/index.js', '<rootDir>/radiator/index.js', '<rootDir>/client/mixins/createNewLeadMixin.js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  setupFiles: ['jest-canvas-mock'],
  coverageThreshold: {
    global: {
      branches: 70,
      statements: 88.5,
      functions: 83.2,
      lines: 88.5,
    },
  },
  modulePathIgnorePatterns: [
    '<rootDir>/cypress/',
  ],
}
