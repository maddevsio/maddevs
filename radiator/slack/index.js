const buildMessage = require('./buildMessage')
const sendMessage = require('./sendMessage')

async function main(data) {
  const message = buildMessage(data)
  await sendMessage(message)
}

module.exports = main
