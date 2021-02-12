// Script for notify for update AmoCRM auth token
const request = require('request');

require('dotenv').config();

const message = {
  text: 'AmoCRM API',
  attachments: [
    {
      text: 'Please, update auth token before merging changes to master!\nhttps://www.amocrm.ru/developers/content/oauth/oauth',
      color: '#ff0000'
    }
  ]
};

const sendMessageToSlack = () => {
  const webhookUrl = process.env.NODE_AMOCRM_SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Please add a slack webhookUrl in var NODE_AMOCRM_SLACK_WEBHOOK_URL on your .env file');
  }
  const options = {
    uri: webhookUrl,
    method: 'POST',
    json: {
      text: message.text,
      attachments: message.attachments
    },
    mrkdwn: true
  };
  request(options);
};

sendMessageToSlack();
