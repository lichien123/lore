  ////////////////////////////////////////////////
 //CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

var Sequelize = require("sequelize");

//import the mysql connection from the connection.js file
var sequelize = require("../config/connection.js");

//create a general model for storing data
module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define('userInfo', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING
	},
	class: {
		type: Sequelize.STRING
	},
	exp: {
		type: Sequelize.INTEGER
	},
	level: {
		type: Sequelize.INTEGER
	}
}, {
		timestamps: false
	});
  return userInfo;
};


