

module.exports = function(sequelize, DataTypes) {
  var Tracks = sequelize.define("Tracks", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
			primaryKey: true
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
    }}, {
			timestamps: false
		});

  return Tracks;
  console.log(Tracks);
};
