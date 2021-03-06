//////////////////////////////////////////////////////
//THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var db = require("../models");


// Routes
// ==================================================

module.exports = function(app) {

console.log("***Tracks API***: ", db.Tracks);

// GET route for all tracks
app.get("/api/tracks", function(req, res) {
  db.Tracks.findAll({})
    .then(function(dbTracks) {
      res.json(dbTracks);
    });
  });
};
