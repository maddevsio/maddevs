const request = require('request');
const psi = require('psi');
require('dotenv').config();

(async () => {
  // Get the PageSpeed Insights report
  const webhookUrl = process.env.NODE_PAGESPEED_SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Please add a slack webhookUrl in var NODE_PAGESPEED_SLACK_WEBHOOK_URL on your .env file');
  }
  const getColorLargestContentfulPaint = ms => {
    // 0 - 2 seconds, green, fast;
    // 2 - 4 seconds orange, okay;
    // over 4 seconds, red, slow.
    if (ms > 4000) {
      return '#FF0000';
    }
    if (ms > 2000) {
      return '#FFFF00';
    }
    return '#00FF00';
  };
  const getColorTotalBlockingTime = ms => {
    // 0 - 300 ms - green, quick;
    // 300 - 600 ms - orange, okay;
    // over 600 ms - red, slow.
    if (ms > 600) {
      return '#FF0000';
    }
    if (ms > 300) {
      return '#FFFF00';
    }
    return '#00FF00';
  };
  const getColorCumulativeLayoutShift = point => {
    // 0 - 0.5 - green, good;
    // 0.6 - 1 red, bad.
    if (point > 0.5) {
      return '#FF0000';
    }
    return '#00FF00';
  };
  const createMessage = data => {
    const message = {
      text: 'Simulate page load: https://maddevs.co',
      attachments: [
        {
          text: `${data['first-contentful-paint'].title}: ${data['first-contentful-paint'].sec}`,
          color: data['first-contentful-paint'].color
        },
        {
          text: `${data.interactive.title}: ${data.interactive.sec}`,
          color: data.interactive.color
        },
        {
          text: `${data['total-blocking-time'].title}: ${data['total-blocking-time'].sec}`,
          color: data['total-blocking-time'].color
        },
        {
          text: `${data['cumulative-layout-shift'].title}: ${data['cumulative-layout-shift'].sec}`,
          color: data['cumulative-layout-shift'].color
        }
      ]
    };
    return message;
  };
  const sendMessageToSlack = data => {
    const resultMessage = createMessage(data);
    const options = {
      uri: webhookUrl,
      method: 'POST',
      json: {
        text: resultMessage.text,
        attachments: resultMessage.attachments
      },
      mrkdwn: true
    };
    request(options);
  };
  const {
    data
  } = await psi('https://maddevs.co');
  const reportResult = {
    'first-contentful-paint': {
      sec: data.lighthouseResult.audits['first-contentful-paint'].displayValue,
      title: data.lighthouseResult.audits['first-contentful-paint'].title,
      color: getColorLargestContentfulPaint(data.lighthouseResult.audits['first-contentful-paint'].numericValue)
    },
    interactive: {
      sec: data.lighthouseResult.audits.interactive.displayValue,
      title: data.lighthouseResult.audits.interactive.title,
      color: getColorLargestContentfulPaint(data.lighthouseResult.audits.interactive.numericValue)
    },
    'total-blocking-time': {
      sec: data.lighthouseResult.audits['total-blocking-time'].displayValue,
      title: data.lighthouseResult.audits['total-blocking-time'].title,
      color: getColorTotalBlockingTime(data.lighthouseResult.audits['total-blocking-time'].numericValue)
    },
    'cumulative-layout-shift': {
      sec: data.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
      title: data.lighthouseResult.audits['cumulative-layout-shift'].title,
      color: getColorCumulativeLayoutShift(data.lighthouseResult.audits['cumulative-layout-shift'].numericValue)
    }
  };
  sendMessageToSlack(reportResult);
})();
