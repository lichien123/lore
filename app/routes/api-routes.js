  //////////////////////////////////////////////////////
 //THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var userInfo = require("../models/loreModel.js");





//here come the routes
//export all routes
module.exports = function(app) {

	//route that displays all userInfo
	app.get("/api/all", function(req, res){
		console.log('hi');
		// userInfo.findAll({}).then(function(results){
			console.log(res.json());

		// });
	});

	//more routes here

};