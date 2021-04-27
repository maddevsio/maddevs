const colors = {
  good: ':yum:',
  bad: ':face_with_symbols_on_mouth:',
  neutral: ':neutral_face:',
}

/**
 * Function for getting color by option
 * @param {Boolean|string} isBetter
 * @returns {string} color
 */
const getColorSmile = (isBetter = 'neutral') => {
  if (isBetter === 'neutral') return colors.neutral
  return isBetter ? colors.good : colors.bad
}

module.exports = getColorSmile
