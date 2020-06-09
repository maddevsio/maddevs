const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
  console.log('Server working on port: ' + port);
});
