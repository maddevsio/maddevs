const data = require('./data.json')

function fromISO(country) {
  const found = data.find(c => c.Code === country)
  if (!found) return null
  return found.Name
}

module.exports = fromISO
