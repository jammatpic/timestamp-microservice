var express = require("express");
var moment = require("moment");
var app = express();


app.get('/:dateTime', function (req, res) {
    var theDate = moment(req.params.dateTime, ["X", "MMMM DD, YYYY"]);
    var dateJSON = {"unix": theDate.unix(), "natural": theDate.format("MMMM DD, YYYY")};
    res.end(JSON.stringify(dateJSON));
});

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening!');
});
