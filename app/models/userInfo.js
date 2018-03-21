
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var userInfo = sequelize.define('users', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: Sequelize.STRING
    },
    userPassword: {
      type: Sequelize.STRING
    }
  });

trackInfo.sync();
console.log(userInfo);
