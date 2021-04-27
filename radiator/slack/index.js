const buildMessage = require('./buildMessage')
const sendMessage = require('./sendMessage')

async function main(data, range) {
  const message = buildMessage(data, range)
  await sendMessage(message)
}

module.exports = main
