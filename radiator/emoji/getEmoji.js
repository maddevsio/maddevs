const emoji = require('./index')

const types = {
  slack: 0,
  telegram: 1,
}

function getEmoji(name, type = 'slack') {
  const typeIdx = types[type] || 0
  const foundEmoji = emoji[name]
  if (!foundEmoji) return emoji.notFound[typeIdx]
  return foundEmoji[typeIdx]
}

module.exports = getEmoji
