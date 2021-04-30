const TelegramBot = require('node-telegram-bot-api')
const buildMessage = require('./buildMessage')

const TOKEN = '1660809307:AAESS_Mf_u2jsQxnxg65jbb-R9QHT3T8GPw'

async function main(data) {
  const bot = new TelegramBot(TOKEN, { polling: true })
  const message = buildMessage(data)

  bot.sendMessage(data.telegramChannelId, message, { parse_mode: 'markdown' })
}

module.exports = main
