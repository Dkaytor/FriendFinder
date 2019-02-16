//links to retrieve information from other files
var friendsData = require("../data/friends");

//Routing
var express = require("express");
var app = express();

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(friendsData);
  });


app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});
}


  app.post("/api/survey", function(req, res) {
    
    friendsData.push(req.body);
  });

  
  app.post("/api/friends", function(req, res) {
    friendsData.push(newFriend);
    console.log(req.body);
  });