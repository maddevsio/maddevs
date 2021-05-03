const TelegramBot = require('node-telegram-bot-api')
const buildMessage = require('./buildMessage')

async function main(data) {
  const bot = new TelegramBot(process.env.RADIATOR_TELEGRAM_TOKEN, { polling: true })
  const message = buildMessage(data)

  bot.sendMessage(data.telegramChannelId, message, { parse_mode: 'markdown' })
}

module.exports = main
