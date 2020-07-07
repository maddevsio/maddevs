module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-new': 0,
    'eol-last': 2,
    'linebreak-style': 0,
    'no-bitwise': 0,
    'indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      'props': false
    }],
    'max-len': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'import/extensions': 'off',
    'no-floating-decimal': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': 0,
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': 'off',
    'no-extra-semi': 'error',
    'import/no-dynamic-require': 0,
    'new-cap': ['error', {
      'newIsCap': false,
      'properties': false
    }]
  }
}
