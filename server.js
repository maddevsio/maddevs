const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./server/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

const port = process.env.PORT || 5000;

app.enable('trust proxy');

app.use('/', routes);
app.use(function applyXFrame(req, res, next) {
  res.set('X-Frame-Options', 'DENY');
  next();
});

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/ru', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

app.get('/en', (req, res) => {
  res.redirect(301, 'https://maddevs.io/');
});

app.use(function(req, res) { // Handle 404
  res.sendFile(path.join(__dirname + '/dist/404.html'));
  res.status(404);
});

app.listen(port, () => {
  console.log('Server working on port: ' + port);
});
