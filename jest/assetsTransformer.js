const path = require('path');

function process(src, filename, config, options) {
  return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
}

module.exports = {
  process
};
