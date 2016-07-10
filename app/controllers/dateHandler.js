"use strict";
var moment = require("moment");

function dateHandler() {
    this.getDates = function(req, res) {
        // making moment object that can be formatted easily
        var theDate = moment(req.params.date, ["X", "MMMM DD, YYYY"]);
        var dateJSON = {"unix": theDate.unix(), "natural": theDate.format("MMMM DD, YYYY")};
        res.end(JSON.stringify(dateJSON));
    };
};

module.exports = dateHandler;
