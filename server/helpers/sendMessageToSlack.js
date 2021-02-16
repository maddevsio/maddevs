const request = require('request');

// Slack message layouts
// https://api.slack.com/messaging/composing/layouts

/**
 * Send message to Slack channel
 * @param {String} webhook - https://hooks.slack.com/services/xxx/xxx
 * @param {JSON} layout - { text: 'Hello world' }
 */
function sendMessageToSlack(webhook, layout) {
  const options = {
    uri: webhook,
    method: 'POST',
    json: layout,
    mrkdwn: true
  };
  request(options);
}

module.exports = sendMessageToSlack;
