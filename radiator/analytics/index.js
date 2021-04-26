const authorize = require('./auth')
const getCoreData = require('./getCoreData')
const getCountriesData = require('./getCountriesData')
const getDevicesData = require('./getDevicesData')
const getGoalsData = require('./getGoalsData')

async function main() {
  const finish = await authorize()

  const core = await getCoreData()
  const countries = await getCountriesData()
  const devices = await getDevicesData()
  const goals = await getGoalsData()

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
