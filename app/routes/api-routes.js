  //////////////////////////////////////////////////////
 //THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var model = require("../models/loreModel.js");

var express = require("express");
var app = express();



// Routes
// =============================================================
// module.exports = function(app) {
//   // GET route for getting all of the todos
//   app.get("/api", function(req, res) {
//     // findAll returns all entries for a table when used with no options
//     model.userInfo.findAll({}).then(function(userInfoObjectModel) {
//       // We have access to the todos as an argument inside of the callback function
//       res.json(userInfoObjectModel);
//       console.log(userInfoObjectModel);
//     });
//   });
// 	 };

console.log(model.userInfo);

// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/api", function(req, res) {
//     model.userInfo.findAll({})
//       .then(function(dbPost) {
//         res.json(dbPost);

//       });
//       res.json("dbPost");
//   });
//   };

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api", function(req, res) {
    model.userInfo.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);

      });
      // res.json("hi");
  });
  };
