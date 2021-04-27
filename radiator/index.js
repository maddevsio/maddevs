require('dotenv').config()
const getAnalyticsData = require('./analytics')
const sendMessageToSlack = require('./slack')
const getYesterday = require('./utils/getYesterday')

async function main() {
  const range = getYesterday()
  const data = await getAnalyticsData()

  await sendMessageToSlack(data, range)
}

module.exports = main
