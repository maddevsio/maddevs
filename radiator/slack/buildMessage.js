const {
  header, divider, section, list, listItem, countryListItem,
} = require('./blocks')

function buildMessage({
  core, countries, devices, goals,
}, range) {
  return {
    blocks: [
      header(`:calendar: Radiator report on marketing metrics for ${range}`),
      divider(),
      section(`За вчера сайт <https://maddevs.io|maddevs.io> посетило *${core.users.value} пользователей*. Всего *${core.sessions.value} сессий*, средняя длительность 1 сессии составляет *${core.duration.value}*. *${core.bounceRate.value}%* пользователей закрыли сайт никак с ним не провзаимодействовав.`),
      section(list(
        listItem(core.users, 'Users', 'technologist', 'difference', '%'),
        listItem(core.sessions, 'Sessions', 'elevator', 'difference', '%'),
        listItem(core.bounceRate, 'Bounce Rate', 'moyai', 'difference', '%'),
        listItem(core.duration, 'Session Duration', 'clock1', 'difference', '%'),
      )),
      divider(),
      section('Сайт просматривают на разных устройствах. Вот соотношение за вчерашний день:'),
      section(list(
        listItem(devices.desktop, 'Desktop', 'computer', 'previous', '%'),
        listItem(devices.mobile, 'Mobile', 'iphone', 'previous', '%'),
        listItem(devices.tablet, 'Tablet', 'pager', 'previous', '%'),
      )),
      divider(),
      section('Топ-3 страны, в которых находятся пользователи, посетившие сайт:'),
      section(list(...countries.map(countryListItem))),
      divider(),
      section('Клики и конверсии произведенные пользователями:'),
      section(list(
        listItem(goals.leads, 'Leads', 'zap', 'previous'),
        listItem(goals.contacts, 'Contacts', 'telephone_receiver', 'previous'),
        listItem(goals.career, 'Careers', 'briefcase', 'previous'),
      )),
      divider(),
    ],
  }
}

module.exports = buildMessage
