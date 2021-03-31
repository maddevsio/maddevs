const mongoose = require('mongoose')

// utilities
const logError = require('../utils/logError')

async function connect(url, config) {
  try {
    await mongoose.connect(url, config)
  } catch (error) {
    logError(error, 'Error during connecting to database')
  }
}

module.exports = {
  connect,
}
