const getAnalytics = require('./getAnalytics')
const getPercentage = require('../utils/getPercentage')

const metrics = [
  { expression: 'ga:users' },
]

const dimensions = [
  { name: 'ga:deviceCategory' },
]

function prettify(rawData) {
  const total = rawData.reports[0].data.totals[0].values[0]
  const totalPrev = rawData.reports[0].data.totals[1].values[0]

  const devices = rawData.reports[0].data.rows
    .map(row => ({
      title: row.dimensions[0].toLowerCase(),
      value: getPercentage(Number(row.metrics[0].values[0]), total, false),
      previous: getPercentage(Number(row.metrics[1].values[0]), totalPrev, false),
    }))
    .map(device => ({
      ...device,
      rate: device.value >= device.previous ? 'good' : 'neutral',
    }))
    .sort((a, b) => b.value - a.value)
    .reduce((acc, device) => ({
      ...acc,
      [device.title]: device,
    }), {})

  if (!devices.tablet) {
    devices.tablet = {
      title: 'tablet',
      value: 0,
      previous: 0,
    }
  }

  return devices
}

async function main(range) {
  const rawData = await getAnalytics({ metrics, dimensions, range })
  return prettify(rawData)
}

module.exports = main
