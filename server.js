const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redirectList = require('./server/json/redirect');
const routes = require('./server/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

const port = process.env.PORT || 5000;

app.enable('trust proxy');
app.enable('strict routing');

app.use('/', routes);
app.use(function applyXFrame(req, res, next) {
  res.set('X-Frame-Options', 'DENY');
  next();
});
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});
app.use((req, res, next) => {
  if (['blog.maddevs.co', 'blog.maddevs.io'].includes(req.headers.host)) {
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
app.use(express.static(__dirname + '/dist'));
app.use(function (req, res, next) {
  if (req.path.substr(-1) == '/' && req.path.length > 1) {
    let query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/ru', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

app.get('/en', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

app.use(function(req, res, next) { // Handle 404
  res.sendFile(path.join(__dirname + '/dist/404.html'));
  res.status(404);
});

app.listen(port, () => {
  console.log('Server working on port: ' + port);
});
