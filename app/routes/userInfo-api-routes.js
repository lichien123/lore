//////////////////////////////////////////////////////
//THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var db = require("../models");


// Routes
// ==================================================

module.exports = function(app) {

console.log("***UserInfo***: ", db.UserInfo);

// GET route for all userInfo
app.get("/api/userInfo", function(req, res) {
  db.UserInfo.findAll({})
    .then(function(dbUserInfo) {
      res.json(dbUserInfo);
    });
});

// POST route for userPoints
app.post("/api/userPoints", function(req, res) {
  db.UserInfo.create(req.body)
    .then(function(dbUserInfo) {
      res.json(dbUserInfo);
});
});


};
