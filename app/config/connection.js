var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  //local host
    connection = mysql.createConnection({
        root: root,
        host: "ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "qmkrpgw1hwefdh50",
        password: "pwrzexrcwoa2kmz4",
        database: "lore_db",
    });
};

connection.connect();
module.exports = connection;
