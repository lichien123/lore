  //////////////////////////////////////////////////////
 //THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var userInfo = require("../models/loreModel.js");




// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api", function(req, res) {
    console.log("*********")
    console.log(userInfo)
    console.log(userInfo.findAll())
    console.log("*********")
    // findAll returns all entries for a table when used with no options
    userInfo.findAll({}).then(function(userInfoObjectModel) {
      // We have access to the todos as an argument inside of the callback function
      res.json(userInfoObjectModel);

    });
  });
	 };