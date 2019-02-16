//Setting up dependencies

var path = require("path");

var express = require("express");
var app = express();

// Making this function accessible to other files
module.exports = function(app) {

//Setting routes for the other files to use.
//There are only 2 routes as there are only 2 pages, intro and survey
//Routes need to be coded inside of the module.exports function in order to be accessible to other files
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};

