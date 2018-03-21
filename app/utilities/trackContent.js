

// Constructor function for creating TrackVids objects
var TrackVids = function(stretchVid, cardioVid, workoutVid, nutritionVid) {
  this.stretchVid = stretchVid;
  this.cardioVid = cardioVid;
  this.workoutVid = workoutVid;
  this.nutritionVid = nutritionVid;
};

// Exporting the TrackVids constructor which we will use in track.js
module.exports = TrackVids;
