const getAnalytics = require('./getAnalytics')
const getPercentage = require('../utils/getPercentage')

const GOOD_COUNTRIES = [
  'United States',
  'Japan',
  'United Kingdom',
  'Germany',
  'France',
  'South Korea',
  'Spain',
]

const metrics = [
  { expression: 'ga:users' },
]

const dimensions = [
  { name: 'ga:country' },
]

function prettify(rawData) {
  const total = rawData.reports[0].data.totals[0].values[0]

  const countries = rawData.reports[0].data.rows
    .map(row => ({
      title: row.dimensions[0] === '(not set)' ? 'Other' : row.dimensions[0],
      value: Number(row.metrics[0].values[0]),
      percentage: getPercentage(Number(row.metrics[0].values[0]), total, false),
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map(country => ({
      ...country,
      isBetter: GOOD_COUNTRIES.includes(country.title),
    }))

  return countries
}

async function main() {
  const rawData = await getAnalytics({ metrics, dimensions })
  return prettify(rawData)
}

module.exports = main
