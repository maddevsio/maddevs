const request = require('request');
const { readFile } = require('fs');
require('dotenv').config();

module.exports = testResults => {
  const webhookUrl = process.env.NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Please add a slack webhookUrl in var NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL on your .env file');
  }

  const errText = `<!here> Just a quick heads up, *${testResults.numFailedTests}* tests have failed :(
  Please take a look.`;
  const passingText = 'All tests have passed';

  const findArgument = (argName, defaultOutput) => {
    if (!argName) {
      return defaultOutput;
    }

    const index = process.argv.findIndex(a => a.match(argName));
    if (index < 0) {
      return defaultOutput;
    }

    try {
      return process.argv[index + 1];
    } catch (e) {
      return defaultOutput;
    }
  };

  const inputPath = findArgument('input', './coverage/coverage-summary.json');
  const reportKeys = ['lines', 'statements', 'functions', 'branches'];

  const getColor = coverage => {
    if (coverage < 80) {
      return '#FF0000';
    }

    if (coverage < 90) {
      return '#FFFF00';
    }

    return '#00FF00';
  };

  const createMessage = vars => {
    const message = {
      text: testResults.numFailedTests > 0 ? errText : passingText,
      attachments: [
        {
          text: `Statements: ${vars.statements.coverage}%`,
          color: vars.statements.color
        },
        {
          text: `Branches: ${vars.branches.coverage}%`,
          color: vars.branches.color
        },
        {
          text: `Lines: ${vars.lines.coverage}%`,
          color: vars.lines.color
        },
        {
          text: `Functions: ${vars.functions.coverage}%`,
          color: vars.functions.color
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

  readFile(`${inputPath}`, 'utf8', (err, res) => {
    if (err) {
      throw err;
    }
    const report = JSON.parse(res);
    const reportResult = {};
    reportKeys.forEach(key => {
      if (!(report && report.total && report.total[key])) {
        throw new Error('malformed coverage report');
      }
      const coverage = report.total[key].pct;
      const color = getColor(coverage);
      reportResult[key] = {
        coverage,
        color
      };
    });
    sendMessageToSlack(reportResult);
  });

  return testResults;
};
