  ////////////////////////////////////////////////
 //CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

var Sequelize = require("sequelize");

//import the mysql connection from the connection.js file
var sequelize = require("../config/connection.js");

//create a general model for storing data
// var userInfo = "hi"

var userInfo = sequelize.define('info', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	class: {
		type: Sequelize.STRING
	},
	track: {
		type: Sequelize.STRING
	},
	exp: {
		type: Sequelize.INTEGER
	},
	level: {
		type: Sequelize.INTEGER
	},
	hp: {
		type: Sequelize.INTEGER
	},
	str: {
		type: Sequelize.INTEGER
	},
	speed: {
		type: Sequelize.INTEGER
	},
	stamina: {
		type: Sequelize.INTEGER
	}
}, {
		timestamps: false
	});


//sync this model with the database
// userInfo.sync();
console.log(userInfo);


module.exports = {userInfo: userInfo, sequelize: sequelize};
