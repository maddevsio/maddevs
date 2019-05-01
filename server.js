const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();

const port = process.env.PORT || 5000;

app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(serveStatic(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log('server started ' + port);