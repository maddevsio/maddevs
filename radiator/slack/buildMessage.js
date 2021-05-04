const getEmoji = require('../emoji/getEmoji')
const {
  header, divider, section, list, listItem, countryListItem, performanceListItem,
} = require('./blocks')

function buildMessage({ analytics, range, lighthouse }) {
  const {
    core, devices, goals, countries,
  } = analytics

  return {
    blocks: [
      header(`${getEmoji('calendar')} Отчет радиатора по ключевым метрикам за ${range.text}`),
      divider(),
      section(`<!here> За отчетный период сайт <https://maddevs.io|maddevs.io> посетило *${core.users.value} пользователей*. Всего *${core.sessions.value} сессий*, средняя длительность 1 сессии составляет *${core.duration.value}*. *${core.bounceRate.value}%* пользователей закрыли сайт никак с ним не провзаимодействовав.`),
      section(list(
        listItem(core.users, 'Users', 'technologist', 'difference', '', '%'),
        listItem(core.sessions, 'Sessions', 'elevator', 'difference', '', '%'),
        listItem(core.bounceRate, 'Bounce Rate', 'moyai', 'difference', '%', '%'),
        listItem(core.duration, 'Session Duration', 'clock', 'difference', '', '%'),
      )),
      divider(),
      section('Сайт просматривают на разных устройствах. Соотношение:'),
      section(list(
        listItem(devices.desktop, 'Desktop', 'computer', 'previous', '%', '%'),
        listItem(devices.mobile, 'Mobile', 'iphone', 'previous', '%', '%'),
        listItem(devices.tablet, 'Tablet', 'pager', 'previous', '%', '%'),
      )),
      divider(),
      section('Топ-3 страны, в которых находятся пользователи, посетившие сайт:'),
      section(list(...countries.map(countryListItem))),
      divider(),
      section('Клики и конверсии произведенные пользователями:'),
      section(list(
        listItem(goals.leads, 'Leads', 'zap', 'previous'),
        listItem(goals.contacts, 'Contacts', 'telephoneReceiver', 'previous'),
        listItem(goals.career, 'Careers', 'briefcase', 'previous'),
      )),
      divider(),
      section('Производительность сайта от Google PageSpeed:'),
      section(list(
        performanceListItem(lighthouse.performance, 'chart'),
        performanceListItem(lighthouse.accessibility, 'wheelchair'),
        performanceListItem(lighthouse['best-practices'], 'horns'),
        performanceListItem(lighthouse.seo, 'medal'),
        performanceListItem(lighthouse.pwa, 'iphone'),
      )),
      divider(),
    ],
  }
}

module.exports = buildMessage
