const data = require('./data.json')

function fromISO(country) {
  if (!country) return null
  const found = data.find(c => c.Code.toLowerCase() === country.toLowerCase())
  if (!found) return null
  return found.Name
}

module.exports = fromISO
