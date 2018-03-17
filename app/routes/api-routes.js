  //////////////////////////////////////////////////////
 //THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var model = require("../models/loreModel.js");

var express = require("express");
var app = express();



// Routes
// =============================================================

console.log(model.userInfo);

module.exports = function(app) {

 // GET route for getting all of the posts
 app.get("/api", function(req, res) {
   // model.userInfo.findAll({})
   //   .then(function(dbPost) {
   //     res.json(dbPost);

   //   });
     res.json("this displays on the page");
 });
 };
