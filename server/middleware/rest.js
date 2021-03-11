const sendpulse = require('sendpulse-api');
const bodyParser = require('body-parser');
const cors = require('cors');
const redirectList = require('../json/redirect');
const app = require('express')();

const _config_ = require('../config');

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.enable('trust proxy');

app.use(function applyXFrame(req, res, next) {
  console.log('111111111', req.headers.host);
  res.set('X-Frame-Options', 'DENY');
  next();
});
app.use((req, res, next) => {
  console.log('2222222222', req.headers.host);
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});
app.use((req, res, next) => {
  console.log('hello', req.headers.host);

  if (['eb1762d3c34f.ngrok.io', 'localhost:3000', 'blog.maddevs.co', 'blog.maddevs.io'].includes(req.headers.host)) {
    const requestUrl = req.url.slice(-1) === '/' && req.url.length > 1 ? req.url.substr(0, req.url.length - 1) : req.url;
    const match = redirectList.find(url => url.from === requestUrl);
    if (match !== undefined && !!match.to) {
      res.redirect(301, match.to);
    } else {
      res.redirect(301, 'https://maddevs.io/blog');
    }
  } else {
    next();
  }
});

app.get('/ru', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

app.get('/en', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

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
