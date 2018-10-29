module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential', 
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "no-new": 0,
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "space-before-function-paren": 0,
    "quotes": ["error", "single"],
    "comma-dangle": ["off", "always"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
