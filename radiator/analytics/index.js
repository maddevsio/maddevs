const authorize = require('./auth')
const getCoreData = require('./getCoreData')
const getCountriesData = require('./getCountriesData')
const getDevicesData = require('./getDevicesData')
const getGoalsData = require('./getGoalsData')

async function main(range) {
  const finish = await authorize()

  const core = await getCoreData(range)
  const countries = await getCountriesData(range)
  const devices = await getDevicesData(range)
  const goals = await getGoalsData(range)

  const data = {
    core,
    countries,
    devices,
    goals,
  }

  await finish()

  return data
}

module.exports = main
