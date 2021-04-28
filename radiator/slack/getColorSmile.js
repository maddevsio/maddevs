const colors = {
  good: ':partying_face:',
  bad: ':face_with_symbols_on_mouth:',
  neutral: ':neutral_face:',
}

/**
 * Function for getting color by option
 * @param {'good'|'bad'|'neutral'} rate
 * @returns {string} color
 */
const getColorSmile = (rate = 'neutral') => colors[rate]

module.exports = getColorSmile
