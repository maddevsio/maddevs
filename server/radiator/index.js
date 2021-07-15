require('dotenv').config()
const { Radiator } = require('@maddevs/mad-radiator')

function runRadiator() {
  const baseConfig = {
    env: {
      authType: process.env.RADIATOR_AUTH_TYPE,
      analyticsProjectId: process.env.RADIATOR_PROJECT_ID,
      analyticsPrivateKeyId: process.env.RADIATOR_PRIVATE_KEY_ID,
      analyticsPrivateKey: process.env.RADIATOR_PRIVATE_KEY,
      analyticsClientEmail: process.env.RADIATOR_CLIENT_EMAIL,
      analyticsClientId: process.env.RADIATOR_CLIENT_ID,
      analyticsAuthUrl: process.env.RADIATOR_AUTH_URI,
      analyticsTokenUri: process.env.RADIATOR_TOKEN_URI,
      analyticsProviderCertUrl: process.env.RADIATOR_PROVIDER_CERT_URL,
      analyticsClientCertUrl: process.env.RADIATOR_CLIENT_CERT_URL,
      slackWebhookUrl: process.env.RADIATOR_WEBHOOK_URL,
      googleapisKey: process.env.RADIATOR_GOOGLEAPIS_KEY,
      telegramToken: process.env.RADIATOR_TELEGRAM_TOKEN,
    },
    slack: true,
    telegram: false,
    range: 'day',
    slackChannelId: 'mad-marketing',
    websiteUrl: 'https://maddevs.io',
    analyticsViewId: '230523659',
    analyticsConversions: [
      {
        name: 'Leads',
        emoji: 'zap',
        goals: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        name: 'Contacts',
        emoji: 'telephone_receiver',
        goals: [10, 11, 12, 13, 14, 15],
      },
      {
        name: 'Careers',
        emoji: 'briefcase',
        goals: [9],
      },
    ],
  }

  const weeklyConfig = {
    ...baseConfig,
    range: 'week',
    slackChannelId: 'general',
    telegram: true,
    telegramChannelId: -1001428775098,
    schedule: {
      period: 'week',
      time: 15 - 6, // heroku works with UTC timezone, so we need to calculate diff between Bishkek(UTC+6)
      weekDay: 5,
    },
  }

  const dailyConfig = {
    ...baseConfig,
    range: 'day',
    schedule: {
      period: 'day',
      time: 9 - 6, // heroku works with UTC timezone, so we need to calculate diff between Bishkek(UTC+6)
    },
  }

  const weekly = new Radiator(weeklyConfig)
  const daily = new Radiator(dailyConfig)
  return { weekly, daily }
}

module.exports = runRadiator
