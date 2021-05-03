const data = require('./data.json')

function toISO(country) {
  const found = data.find(c => c.Name === country)
  if (!found) return null
  return found.Code
}

module.exports = toISO
