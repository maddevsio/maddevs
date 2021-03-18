function isBabelLoader(caller) {
  return caller && caller.name === 'babel-loader';
}

module.exports = function (api) {
  if (api.env('test') && !api.caller(isBabelLoader)) {
    return {
      presets: [
        ['@babel/env', {
          'targets': {
            'ie': '11'
          }
        }]
      ]
    };
  }
  return {};
};
