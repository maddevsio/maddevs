const axios = require('axios')
const FormData = require('form-data')
const { HUNTFLOW_API_URL, HUNTFLOW_TOKEN, HUNTFLOW_ACCOUNT_ID } = require('../config')

async function sendApplication(req) {
  try {
    const data = new FormData()
    data.append('file', req.file.buffer)
    const response = await axios.post(`${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}/upload`, data, {
      headers: {
        Authorization: `Bearer ${HUNTFLOW_TOKEN}`,
        'Content-Type': 'multipart/form-data',
        ...data.getHeaders(),
      },
    })
    console.log(response.data, '>>>>> success')
    return response.data
  } catch (error) {
    console.log(error.response.data, '>>>>> error')
    return error.response.data
  }
}

module.exports = {
  sendApplication,
}
