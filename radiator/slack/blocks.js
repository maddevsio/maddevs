/* eslint-disable vue/max-len */
const getEmoji = require('../emoji/getEmoji')
const getRateEmoji = require('../emoji/getRateEmoji')
const toISO = require('../utils/countryISO/toISO')

const header = text => ({
  type: 'header',
  text: {
    type: 'plain_text',
    emoji: true,
    text,
  },
})

const divider = () => ({
  type: 'divider',
})

const section = (text, type = 'mrkdwn') => ({
  type: 'section',
  text: {
    type,
    text: `${text}\n\n`,
  },
})

const list = (...args) => [...args].join('\n\n')

const listItem = (entity, title, emoji, parensKey, valueType = '', parensType = '') => `${getRateEmoji(entity.rate)} ${getEmoji(emoji)} ${title}: *${entity.value}${valueType}* (${entity[parensKey]}${parensType})`

const getFlag = title => {
  const iso = toISO(title)
  if (iso && getEmoji(`${iso.toLowerCase()}Flag`) !== ':x:') {
    return getEmoji(`${iso.toLowerCase()}Flag`)
  }
  return getEmoji('defaultFlag')
}

const countryListItem = ({ title, percentage }) => {
  const flag = getFlag(title)
  return `${flag} ${title}: *${percentage}%* от всех посетителей сайта`
}

const performanceListItem = (entity, emoji) => `${getRateEmoji(entity.rate)} ${getEmoji(emoji)} ${entity.title}: *${entity.value}%*`

module.exports = {
  header,
  divider,
  section,
  list,
  listItem,
  countryListItem,
  performanceListItem,
}
