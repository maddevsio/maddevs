const colors = {
  good: '#43a047',
  bad: '#e53935',
  neutral: '#e0e0e0',
}

/**
 * Function for getting color by option
 * @param {Boolean|string} isBetter
 * @returns {string} color
 */
const getColor = (isBetter = 'neutral') => {
  if (isBetter === 'neutral') return colors.neutral
  return isBetter ? colors.good : colors.bad
}

module.exports = getColor
