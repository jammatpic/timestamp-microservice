var express = require("express");
var app = express();

app.get('/:dateTime', function (req, res) {
    res.end(req.params.dateTime);
});

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening!');
});
