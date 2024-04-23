var express = require('express');
var app = express();

app.get('/', function (_, res) {
    res.send('Welcome');
});

app.get('/crash', function (_,_) {
    process.exit(1);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
