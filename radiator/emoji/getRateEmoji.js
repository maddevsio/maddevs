const getEmoji = require('./getEmoji')

const colors = {
  good: 'partyingFace',
  bad: 'uncensoredFace',
  neutral: 'neutralFace',
}

/**
 * Function for getting color by option
 * @param {'good'|'bad'|'neutral'} rate
 * @param {'slack'|'telegram'} type
 * @returns {string} color
 */
const getRateEmoji = (rate = 'neutral', type) => getEmoji(colors[rate], type)

module.exports = getRateEmoji
