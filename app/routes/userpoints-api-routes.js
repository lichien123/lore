//////////////////////////////////////////////////////
//THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var db = require("../models");


// Routes
// ==================================================

module.exports = function(app) {

console.log("***UserPoints***: ", db.Points);

// GET route for all userPoints
app.get("/api/userPoints", function(req, res) {
  db.Points.findAll({})
    .then(function(dbPoints) {
      res.json(dbPoints);
    });
});

// POST route for userPoints
app.post("/api/userPoints", function(req, res) {
  db.Points.create(req.body)
    .then(function(dbPoints) {
      res.json(dbPoints);
});
});


};
