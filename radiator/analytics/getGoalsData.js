const getAnalytics = require('./getAnalytics')

const GOALS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const metrics = GOALS_IDS.map(id => ({
  expression: `ga:goal${id}Completions`,
}))

function prettify(rawData) {
  const goals = {
    contact: {
      value: rawData.reports[0].data.totals[0].values.slice(0, -1).reduce((acc, curr) => acc + Number(curr), 0),
      previous: rawData.reports[0].data.totals[1].values.slice(0, -1).reduce((acc, curr) => acc + Number(curr), 0),
    },
    career: {
      value: rawData.reports[0].data.totals[0].values.slice(-1).reduce((acc, curr) => acc + Number(curr), 0),
      previous: rawData.reports[0].data.totals[1].values.slice(-1).reduce((acc, curr) => acc + Number(curr), 0),
    },
  }

  goals.contact.isBetter = goals.contact.value > goals.contact.previous
  goals.career.isBetter = goals.career.value > goals.career.previous

  return goals
}

async function main() {
  const rawData = await getAnalytics({ metrics })
  return prettify(rawData)
}

module.exports = main
