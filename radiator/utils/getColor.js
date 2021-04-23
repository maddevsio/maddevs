const colors = {
  good: '#00ff00',
  bad: '#ff0000',
  neutral: '#ccc',
}

const getColor = (isBetter = 'neutral') => {
  if (isBetter === 'neutral') return colors.neutral
  return isBetter ? colors.good : colors.bad
}

module.exports = getColor
