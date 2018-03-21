//var TrackVids = require("./trackContent");

// Constructor function for creating CastMember objects
var Track = function(trackName, trackDescription, trackContent) {
  this.trackName = trackName;
  this.trackDescription = trackDescription;
  // this.trackContent will hold all of our Track videos
  this.trackContent = [];

  this.addTrackContent = function(stretchVid, cardioVid, workoutVid, nutritionVid){
    this.trackContent.push(new TrackVids(stretchVid, cardioVid, workoutVid, nutritionVid));
  };
};


// Exporting our Track constructor. We will require it in allTrackInfo.js
module.exports = Track;
