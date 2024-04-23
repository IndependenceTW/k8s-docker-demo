var express = require('express');
var app = express();

app.get('/', function (_, res) {
    res.send('Welcome');
});

app.get('/hello/:name', function (req, res) {
    res.send('Hello ' + req.params.name);
});

app.get('/version', function (_, res) {
    res.send('Version 1.0');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});