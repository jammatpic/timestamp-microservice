"use strict";
var moment = require("moment"); // lib for parsing, manulating, & dislaying dates

function dateHandler() {
    // making moment object that can be formatted easily, then returning it in different formats
    this.getDates = function(req, res) {
        var theDate = moment(req.params.date, ["X", "MMMM DD, YYYY"]);
        var dateJSON = {"unix": theDate.unix(), "natural": theDate.format("MMMM DD, YYYY")};
        res.json(dateJSON);
    };
};

module.exports = dateHandler;
