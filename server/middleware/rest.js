const sendpulse = require('sendpulse-api');
const bodyParser = require('body-parser');
const cors = require('cors');
const redirectList = require('../json/redirect');
const blogRedirectList = require('../json/blog');
const customerRedirectList = require('../json/customer-university');
const app = require('express')();

const _config_ = require('../config');

const getRequestUrl = request => request.url.slice(-1) === '/' && request.url.length > 1 ? request.url.substr(0, request.url.length - 1) : request.url;

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.enable('trust proxy');

app.use(function applyXFrame(req, res, next) {
  res.set('X-Frame-Options', 'DENY');
  next();
});

app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'development') {
    if (req.secure) {
      next();
    } else {
      res.redirect('https://' + req.headers.host + req.url);
    }
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.url[req.url.length - 1] !== '/' && req.method === 'GET') {
    res.redirect(`https://${req.headers.host}${req.url}/`);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (['blog.maddevs.co', 'blog.maddevs.io'].includes(req.headers.host)) {
    const match = redirectList.find(url => url.from === getRequestUrl(req));
    if (match !== undefined && !!match.to) {
      res.redirect(301, match.to);
    } else {
      res.redirect(301, 'https://maddevs.io/blog');
    }
  } else {
    next();
  }
});

app.use((req, res, next) => {
  const postsRedirectList = [...blogRedirectList, ...customerRedirectList];
  const match = postsRedirectList.find(url => url.from === getRequestUrl(req));
  if (match) {
    res.redirect(301, match.to);
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

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(process.cwd() + '/sitemap.xml');
});

app.post('/api/send-email', (req, res) => {
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
