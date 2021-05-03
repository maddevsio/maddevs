/* eslint-disable no-console */
require('dotenv').config()
const getAnalyticsData = require('./analytics')
const getLighthouseData = require('./lighthouse')
const sendMessageToSlack = require('./slack')
const sendMessageToTelegram = require('./telegram')
const parseRange = require('./utils/parseRange')

async function main({
  slack, telegram, period, ...params
}) {
  const range = parseRange(period)
  const analytics = await getAnalyticsData(range)
  const lighthouse = await getLighthouseData()

  const data = {
    analytics,
    range,
    lighthouse,
    ...params,
  }

  if (slack) {
    await sendMessageToSlack(data)
  }

  if (telegram) {
    await sendMessageToTelegram(data)
  }
}

module.exports = main
