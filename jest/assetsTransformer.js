const path = require('path')

function process(_, filename) {
  return `module.exports = ${JSON.stringify(path.basename(filename))};`
}

module.exports = {
  process,
}
