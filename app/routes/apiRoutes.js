//links to retrieve information from other files
var path = require("path");
var friendsData = require("../data/friends");

//Routing
var express = require("express");
var app = express();

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(friendsData);
  });
}


  app.post("/api/survey", function(req, res) {
    
    friendsData.push(req.body);
  });