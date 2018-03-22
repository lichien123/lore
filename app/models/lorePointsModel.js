////////////////////////////////////////////////
//CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

module.exports = function(sequelize, DataTypes) {
  var Points = sequelize.define("Points", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
			primaryKey: true
		},
    totalPoints: {
      type: DataTypes.INTEGER
    }}, {
			timestamps: false
		});

	console.log("***Points Table***: ", Points);
  return Points;

};
