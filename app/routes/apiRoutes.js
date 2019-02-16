//links to retrieve information from other files
var friendsData = require("../data/friends");

//Routing
var express = require("express");
var app = express();

module.exports = function (app) {

  //Creation of a function to calculate the difference between 2 peoples answers to the questions
  //This function is being used in the app.post command 
  function diff(friends1, friends2) {

    var score = 0;
    for (var i = 0; i < 10; i++) {
      score += Math.abs(parseInt(friends1.scores[i]) - parseInt(friends2.scores[i]));

    }
    return score;
  }

  //2 app.get commands to listen to any activity on those particular routes with the res to get friends data
  app.get("/api/survey", function (req, res) {
    res.json(friendsData);
  });


  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


//Code that does all of the work.
//Pushes the data received from the survey into the information in the friends file
//It then takes that information and compared the responses to the questions with previously entered responses
//By calculating the absolute value of the differences it finds the person who answered the questions most like you
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var currentIndex = 0;
    var currentScore = 99;
    for (i = 0; i < friendsData.length; i++) {
      var match = diff(newFriend, friendsData[i]);
      //The loop checks to see which difference is the smallest and puts that into the current score
      //Current Index takes the information on the matches position in the array and saves it for later
      if (match < currentScore) {
        currentScore = match;
        currentIndex = i;
      }

    }
    //Pushes new information into the array in the friends file
    friendsData.push(newFriend);
    //result is shown as the friend with index that matches the best
    res.json(friendsData[currentIndex]);

  });

}
