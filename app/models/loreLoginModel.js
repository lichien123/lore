////////////////////////////////////////////////
//CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define("Info", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
			primaryKey: true
		},
    userName: {
      type: DataTypes.INTEGER
    },
    userPassword: {
      type: DataTypes.STRING
    },
    track: {
      type: DataTypes.STRING
    }}, {
			timestamps: false
		});

  return userInfo;
  console.log(userInfo);
};
