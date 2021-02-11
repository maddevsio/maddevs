const request = require('request');

// Slack message layouts
// https://api.slack.com/messaging/composing/layouts

/**
 * Send message to Slack channel
 * @param {JSON} layout
 */
const webhookUrl = process.env.NODE_PAGESPEED_SLACK_WEBHOOK_URL;
function sendMessageToSlack(layout) {
  const options = {
    uri: webhookUrl,
    method: 'POST',
    json: layout,
    mrkdwn: true
  };
  request(options);
}

module.exports = sendMessageToSlack;
