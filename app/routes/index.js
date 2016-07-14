"use strict";
var DateHandler = require(process.cwd() + "/app/controllers/dateHandler.js");

module.exports = function(app) {
    var dateHandler = new DateHandler;

    // serves index page
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });

    // parses date and returns in unix and natural language
    app.route("/:date")
        .get(dateHandler.getDates);
};
