module.exports = {
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ['js', 'json', 'vue'],
  watchman: false,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/client/$1',
    '^~~/(.*)$': '<rootDir>/client/$1',
    '^@/(.*)$': '<rootDir>/client/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest_config/assetsTransformer.js', '\\.(css|less)$': '<rootDir>/jest_config/assetsTransformer.js'
  },
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    // process `*.svg` files with `imgTransform.js`
    '\\.(svg|png|webp|jpg)$': '<rootDir>/jest_config/imgTransformer.js'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.vue',
    '<rootDir>/client/pages/*.vue',
    '<rootDir>/client/mixins/*.js'
  ],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov'
  ]
};
