////////////////////////////////////////////////
//CREATES MODEL DATA SO WE CAN PUT IT IN MYSQL//
////////////////////////////////////////////////

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

    // Tracks.sync().then(() => {
    //   Tracks.create({
    //     track_name:"Assasin",
    //     track_description: "You're versatile, cunning, and willing to take calculated risks. This track is perfect for the casual character who understands the link between mind and body.",
    //     stretch_vid: "https://www.youtube.com/watch?v=VxBAlya7npk",
    //     cardio_vid: "https://www.youtube.com/watch?v=86QRDjbrbdk",
    //     workout_vid: "https://www.youtube.com/watch?v=J4LJxvjq3BY",
    //     nutrition_vid: "https://www.youtube.com/watch?v=rO0Q9f4aYms"
    //   });
    //   Tracks.create({
    //     track_name: "Hunter",
    //     track_description: "Nimbleness, with a lean physique. You love the rush of the chase, and you understand the importance of instinct and calcution.",
    //     stretch_vid: "https://www.youtube.com/watch?v=kKeBjBBUQyY",
    //     cardio_vid: "https://www.youtube.com/watch?v=6wTylMnX7_k",
    //     workout_vid: "https://www.youtube.com/watch?v=YJ3QuchrUNA",
    //     nutrition_vid: "https://www.youtube.com/watch?v=frEU93hI6co"
    //   });
    //   Tracks.create({
    //     track_name: "Titan",
    //     track_description: "Much like a giant in appearance. You are powerful and sturdy, and your physical achievemnts cannot be ignored.",
    //     stretch_vid: "https://www.youtube.com/watch?v=RVq0X3XnKmE",
    //     cardio_vid: "https://www.youtube.com/watch?v=qzymPet0Fl4",
    //     workout_vid: "https://www.youtube.com/watch?v=H_gU_cgyWt8",
    //     nutrition_vid: "https://www.youtube.com/watch?v=xxP5qb89prg"
    //   });
    // })

  return Tracks;
  console.log(Tracks);
};
