const sendpulse = require('sendpulse-api');
const bodyParser = require('body-parser');
const app = require('express')();

const _config_ = require('../config');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.post('/send-email', (req, res) => {
  if (req.body.templateId === null || req.body.templateId === undefined) {
    res.status(500).json({
      status: 500,
      message: 'templateId key not found'
    });
  } else if (typeof req.body.templateId !== 'number') {
    res.status(500).json({
      status: 500,
      message: 'templateId key must be a type number'
    });
  } else if (req.body.variables === null || req.body.variables === undefined) {
    res.status(500).json({
      status: 500,
      message: 'variables key not found'
    });
  } else {
    sendpulse.init(_config_.API_USER_ID, _config_.API_KEY, _config_.TOKEN_STORAGE, () => {
      const answerGetter = data => {
        res.json(data);
      };
      let email = {
        'subject': req.body.variables.subject,
        'template': {
          'id': req.body.templateId, // Required
          'variables': req.body.variables
        },
        'from': {
          'name': req.body.variables.modalTitle,
          'email': 'marketing@maddevs.io'
        },
        'to': [{
          'name': 'Mad Devs team',
          'email': req.body.variables.emailTo
        }]
      };
      if (req.body && req.body.attachment) {
        email = {
          ...email,
          'attachments_binary': { [req.body.attachment.name]: req.body.attachment.base64 }
        };
      }
      sendpulse.smtpSendMail(answerGetter, email);
    });
  }
});

module.exports = app;
