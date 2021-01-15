const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redirectList = require('./server/routes/json/redirect');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

const port = process.env.PORT || 5000;

app.enable('trust proxy');

const routes = require('./server/routes');
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
app.use(express.static(__dirname + '/dist'));
app.use((req, res, next) => {
  if (['blog.maddevs.co', 'blog.maddevs.io'].includes(req.headers.host)) {
    const requestUrl = req.url.slice(-1) === '/' ? req.url.substr(0, req.url.length - 1) : req.url;
    const match = redirectList.find(url => url.from === requestUrl);
    if (match !== undefined && !!match.to) {
      res.redirect(match.to);
    } else {
      res.sendStatus(404);
    }
  } else {
    next();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
  console.log('Server working on port: ' + port);
});
