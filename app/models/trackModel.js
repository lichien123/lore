var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var trackInfo = sequelize.define('tracks', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    trackName: {
      type: Sequelize.STRING
    },
    stretchVid: {
      type: Sequelize.TEXT
    },
    cardioVid: {
      type: Sequelize.TEXT
    },
    workoutVid: {
      type: Sequelize.TEXT
    },
    nutritionVid: {
      type: Sequelize.TEXT
    }

});

trackInfo.sync();
console.log(trackInfo);
