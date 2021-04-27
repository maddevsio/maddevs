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

const listItem = (entity, title, smile, parensKey, valueType = '', parensType = '') => `${getColorSmile(entity.rate)} :${smile}: ${title}: *${entity.value}${valueType}* (${entity[parensKey]}${parensType})`

const countryListItem = ({ title, percentage }) => {
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

  const flag = flags[title] ? `flag-${flags[title]}` : 'flags'
  return `:${flag}: ${title}: *${percentage}%* от всех посетителей сайта`
}

const performanceListItem = (entity, smile) => `${getColorSmile(entity.rate)} :${smile}: ${entity.title}: *${entity.value}%*`

module.exports = {
  header,
  divider,
  section,
  list,
  listItem,
  countryListItem,
  performanceListItem,
}
