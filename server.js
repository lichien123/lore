  //////////////////////////////////////////
 //YALL ALREADY KNOW WHAT THE SERVER DOES//
//////////////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");


//sets up express app
var app = express();
var PORT = process.env.PORT || 8080;


//sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static directory
app.use(express.static("app/public"));

//connects routes to the server
require("./app/routes/api-routes.js");
require("./app/routes/html-routes.js");


//makes the server listen to me
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});