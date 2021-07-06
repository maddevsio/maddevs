const axios = require('axios')

async function getIPInfo() {
  try {
    const response = await axios.get('https://ipapi.co/json')
    return response.data
  } catch (error) {
    return {}
  }
}

module.exports = {
  getIPInfo,
}
