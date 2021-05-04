const getEmoji = require('../emoji/getEmoji')
const getRateEmoji = require('../emoji/getRateEmoji')
const toISO = require('../utils/countryISO/toISO')

const header = text => `*${text}*\n`

const divider = () => '———\n'

const section = text => `${text}\n\n`

const list = (...args) => [...args].join('\n')

const listItem = (entity, title, smile, parensKey, valueType = '', parensType = '') => `${getRateEmoji(entity.rate, 'telegram')} ${getEmoji(smile, 'telegram')} ${title}: *${entity.value}${valueType}* (${entity[parensKey]}${parensType})`

const getFlag = title => {
  const iso = toISO(title)
  if (iso && getEmoji(`${iso.toLowerCase()}Flag`) !== ':x:') {
    return getEmoji(`${iso.toLowerCase()}Flag`, 'telegram')
  }
  return getEmoji('defaultFlag', 'telegram')
}

const countryListItem = ({ title, percentage }) => {
  const flag = getFlag(title)
  return `${flag} ${title}: *${percentage}%* от всех посетителей сайта`
}

const performanceListItem = (entity, smile) => `${getRateEmoji(entity.rate, 'telegram')} ${getEmoji(smile, 'telegram')} ${entity.title}: *${entity.value}%*`

module.exports = {
  header,
  divider,
  section,
  list,
  listItem,
  countryListItem,
  performanceListItem,
}
