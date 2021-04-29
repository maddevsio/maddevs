const axios = require('axios')

const config = {
  username: 'Marketing Radiator',
  icon_emoji: ':radio:',
}

async function sendMessage(message, channel) {
  const data = {
    ...config,
    ...message,
    channel,
  }

  await axios.post(process.env.RADIATOR_WEBHOOK_URL, data)
}

module.exports = sendMessage
