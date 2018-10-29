var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

var port = process.env.PORT || 5000;

app.enable('trust proxy');

app.use (function (req, res, next) {
        if (req.secure) {
                next();
        } else {
                res.redirect('https://' + req.headers.host + req.url);
        }
});

app.use(serveStatic(__dirname + "/dist"));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log('server started '+ port);
