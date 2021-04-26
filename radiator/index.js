require('dotenv').config()
const axios = require('axios')
const getAnalyticsData = require('./analytics')
const getColor = require('./utils/getColor')
const getYesterday = require('./utils/getYesterday')

const config = {
  username: 'Marketing Radiator',
  icon_emoji: ':rainbow:',
}

function buildMessage({
  core, countries, devices, goals,
}) {
  const yesterday = getYesterday()

  return {
    text: `*:calendar: Daily report on marketing metrics for ${yesterday}*`,
    attachments: [
      {
        text: '*Google Analytics:*',
        color: getColor(),
      },
      {
        text: `:sunglasses: Users: *${core.users.value}* (${core.users.difference}%)`,
        color: getColor(core.users.isBetter),
      },
      {
        text: `:elevator: Sessions: *${core.sessions.value}* (${core.sessions.difference}%)`,
        color: getColor(core.sessions.isBetter),
      },
      {
        text: `:moyai: Bounce Rate: *${core.bounceRate.value}%* (${core.bounceRate.difference}%)`,
        color: getColor(core.bounceRate.isBetter),
      },
      {
        text: `:clock1: Session Duration: *${core.duration.value}* (${core.duration.difference}%)`,
        color: getColor(core.duration.isBetter),
      },
      {
        text: '*Session by device:*',
        color: getColor(),
      },
      {
        text: `:computer: Desktop: *${devices.desktop.value}%* (${devices.desktop.previous}%)`,
        color: getColor(devices.desktop.isBetter),
      },
      {
        text: `:iphone: Mobile: *${devices.mobile.value}%* (${devices.mobile.previous}%)`,
        color: getColor(devices.mobile.isBetter),
      },
      {
        text: `:pager: Tablet: *${devices.tablet.value}%* (${devices.tablet.previous}%)`,
        color: getColor(devices.tablet.isBetter),
      },
      {
        text: '*:world_map: Top 3 countries:*',
        color: getColor(),
      },
      ...countries.map(({ title, percentage, isBetter }) => ({
        text: `${title}: *${percentage}%*`,
        color: getColor(isBetter),
      })),
      {
        text: '*Conversions:*',
        color: getColor(),
      },
      {
        text: `:telephone_receiver: Leads: *${goals.contact.value}* (${goals.contact.previous})`,
        color: getColor(goals.contact.isBetter),
      },
      {
        text: `:briefcase: Careers: *${goals.career.value}* (${goals.career.previous})`,
        color: getColor(goals.career.isBetter),
      },
    ],
  }
}

async function sendMessage(message) {
  const data = {
    ...config,
    ...message,
  }

  await axios.post(process.env.RADIATOR_WEBHOOK_URL, data)
}

async function main() {
  const data = await getAnalyticsData()
  const message = buildMessage(data)
  await sendMessage(message)
}

module.exports = main
