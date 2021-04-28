require('dotenv').config()
const getAnalyticsData = require('./analytics')
const getLighthouseData = require('./lighthouse')
const sendMessageToSlack = require('./slack')
const parseRange = require('./utils/parseRange')

async function main({
  slack, telegram, period, channel,
}) {
  const range = parseRange(period)
  const analytics = await getAnalyticsData(range)
  const lighthouse = await getLighthouseData()

  if (slack) {
    await sendMessageToSlack({
      analytics, range, lighthouse, channel,
    })
  }

  if (telegram) {
    // TODO: Add telegram implementation
  }
}

module.exports = main
