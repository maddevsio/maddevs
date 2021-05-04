const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const main = require('./main')

function index() {
  const { argv } = yargs(hideBin(process.argv))

  const {
    slack = false, telegram = false, period = 'day', slackChannelId, telegramChannelId,
  } = argv

  if (!slack && !telegram) {
    throw new Error('You need to add --slack or --telegram argument')
  }

  if (period !== 'day' && period !== 'week' && period !== 'month') {
    throw new Error(`Only allowed values for --period arg is "day(default)", "week", "month", got: ${period}`)
  }

  main({
    slack,
    telegram,
    period,
    slackChannelId,
    telegramChannelId,
  })
}

index()

// main()
