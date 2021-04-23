const getAnalytics = require('./getAnalytics')
const getPercentage = require('../utils/getPercentage')
const formatTime = require('../utils/formatTime')

const metrics = [
  { expression: 'ga:users' },
  { expression: 'ga:sessions' },
  { expression: 'ga:bounceRate' },
  { expression: 'ga:avgSessionDuration' },
]

function prettify(rawData) {
  const [users, sessions, bounceRate, duration] = rawData.reports[0].data.totals[0].values.map(n => Number(Number(n).toFixed(2)))
  const [usersPrev, sessionsPrev, bounceRatePrev, durationPrev] = rawData.reports[0].data.totals[1].values.map(n => Number(Number(n).toFixed(2)))

  return {
    users: {
      value: users,
      previous: usersPrev,
      difference: getPercentage(users, usersPrev),
      isBetter: getPercentage(users, usersPrev) > 0,
    },
    sessions: {
      value: sessions,
      previous: sessionsPrev,
      difference: getPercentage(sessions, sessionsPrev),
      isBetter: getPercentage(sessions, sessionsPrev) > 0,
    },
    bounceRate: {
      value: bounceRate,
      previous: bounceRatePrev,
      difference: getPercentage(bounceRate, bounceRatePrev),
      isBetter: getPercentage(bounceRate, bounceRatePrev) < 0,
    },
    duration: {
      value: formatTime(duration),
      previous: formatTime(durationPrev),
      difference: getPercentage(duration, durationPrev),
      isBetter: getPercentage(duration, durationPrev) > 0,
    },
  }
}

async function main() {
  const rawData = await getAnalytics({ metrics })
  return prettify(rawData)
}

module.exports = main
