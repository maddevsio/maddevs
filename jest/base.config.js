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
    '\\.(svg|png|webp|jpg)$': '<rootDir>/jest/imgTransformer.js',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.vue',
    '<rootDir>/client/pages/*.vue',
    '<rootDir>/server/**/*.js',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/server/db', '<rootDir>/server/routes', '<rootDir>/server/index.js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
}
