const getColorSmile = require('./getColorSmile')

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

const listItem = (entity, title, smile, parensKey, valueType = '') => `${getColorSmile(entity.isBetter)} :${smile}: ${title}: *${entity.value}${valueType}* (${entity[parensKey]}${valueType})`

const countryListItem = ({ title, value, percentage }) => {
  const flags = {
    'United States': 'us',
    India: 'in',
    Russia: 'ru',
    Kyrgyzstan: 'kg',
    Ukraine: 'ua',
    'United Kingdom': 'uk',
    China: 'cn',
    Germany: 'de',
    France: 'fr',
    Japan: 'jp',
  }

  return `:flag-${flags[title]}: ${title}: *${value}* (${percentage}%)`
}

module.exports = {
  header,
  divider,
  section,
  list,
  listItem,
  countryListItem,
}
