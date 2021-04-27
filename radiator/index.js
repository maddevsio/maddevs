require('dotenv').config()
const getAnalyticsData = require('./analytics')
const getLighthouseData = require('./lighthouse')
const sendMessageToSlack = require('./slack')
const getYesterday = require('./utils/getYesterday')

async function main() {
  const range = getYesterday()
  const analytics = await getAnalyticsData()
  const lighthouse = await getLighthouseData()

  await sendMessageToSlack({ analytics, range, lighthouse })
}

module.exports = main
