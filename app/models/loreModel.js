  ////////////////////////////////////////////////
 //CREATES USERINFO MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

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
	track_name: {
		type: DataTypes.TEXT
	},
	track_description: {
		type: DataTypes.TEXT
	},
	stretch_vid: {
		type: DataTypes.TEXT
	},
	cardio_vid: {
		type: DataTypes.TEXT
	},
	workout_vid: {
		type: DataTypes.TEXT
	},
	nutrition_vid: {
		type: DataTypes.TEXT
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
