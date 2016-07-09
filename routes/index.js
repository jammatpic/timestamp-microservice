"use strict";
var moment = require("moment");

module.exports = function(app) {
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    app.route("/:date")
        .get(function (req, res) {
            var theDate = moment(req.params.date, ["X", "MMMM DD, YYYY"]);
            var dateJSON = {"unix": theDate.unix(), "natural": theDate.format("MMMM DD, YYYY")};
            res.end(JSON.stringify(dateJSON));
        });
};
