/* eslint-disable vue/max-len */
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

  const usersDifference = getPercentage(users, usersPrev)
  const sessionsDifference = getPercentage(sessions, sessionsPrev)
  const bounceRateDifference = getPercentage(bounceRate, bounceRatePrev)
  const durationDifference = getPercentage(duration, durationPrev)

  return {
    users: {
      value: users,
      previous: usersPrev,
      difference: usersDifference > 0 ? `+${usersDifference}` : usersDifference,
      rate: usersDifference > 0 ? 'good' : 'bad',
    },
    sessions: {
      value: sessions,
      previous: sessionsPrev,
      difference: sessionsDifference > 0 ? `+${sessionsDifference}` : sessionsDifference,
      rate: sessionsDifference > 0 ? 'good' : 'bad',
    },
    bounceRate: {
      value: bounceRate,
      previous: bounceRatePrev,
      difference: bounceRateDifference > 0 ? `+${bounceRateDifference}` : bounceRateDifference,
      rate: bounceRateDifference < 0 ? 'good' : 'bad',
    },
    duration: {
      value: formatTime(duration),
      previous: formatTime(durationPrev),
      difference: durationDifference > 0 ? `+${durationDifference}` : durationDifference,
      rate: durationDifference > 0 ? 'good' : 'bad',
    },
  }
}

async function main(range) {
  const rawData = await getAnalytics({ metrics, range })
  return prettify(rawData)
}

module.exports = main
