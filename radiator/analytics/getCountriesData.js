const getAnalytics = require('./getAnalytics')
const getPercentage = require('../utils/getPercentage')

const metrics = [
  { expression: 'ga:users' },
]

const dimensions = [
  { name: 'ga:country' },
]

function prettify(rawData) {
  const total = rawData.reports[0].data.totals[0].values[0]

  return rawData.reports[0].data.rows
    .map(row => ({
      title: row.dimensions[0] === '(not set)' ? 'Other' : row.dimensions[0],
      value: Number(row.metrics[0].values[0]),
      percentage: getPercentage(Number(row.metrics[0].values[0]), total, false),
      rate: 'neutral',
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
}

async function main() {
  const rawData = await getAnalytics({ metrics, dimensions })
  return prettify(rawData)
}

module.exports = main
