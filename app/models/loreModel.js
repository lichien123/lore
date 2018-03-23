  ////////////////////////////////////////////////
 //CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

var DataTypes = require("sequelize");

//import the mysql connection from the connection.js file
var sequelize = require("../config/connection.js");

//create a general model for storing data

module.exports = function(sequelize, DataTypes) {
	var UserInfo = sequelize.define("UserInfo", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	userName: {
		type: DataTypes.STRING
	},
	userPassword: {
		type: DataTypes.STRING
	},
	class: {
		type: DataTypes.STRING
	},
	track: {
		type: DataTypes.STRING
	},
	exp: {
		type: DataTypes.INTEGER
	},
	level: {
		type: DataTypes.INTEGER
	},
	hp: {
		type: DataTypes.INTEGER
	},
	str: {
		type: DataTypes.INTEGER
	},
	speed: {
		type: DataTypes.INTEGER
	},
	stamina: {
		type: DataTypes.INTEGER
	}
}, {
		timestamps: false
	});

	return UserInfo;
	console.log(UserInfo);
}
