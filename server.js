var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080

var db = require("./app/models");

// Static directory
app.use(express.static("app/public"));

//create application/json parser
var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false});

//parse various different custom JSON types as JSON
app.use(bodyParser.json({type: 'application/**json'}));

//parse some custom thing into a Buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

//parse an HTML body into a starting
app.use(bodyParser.text({type: 'text/html'}));

//REQUIRE ROUTES
require("./app/routes/userpoints-api-routes.js")(app);
// require("USER INFO ROUTE") (app);
require("./app/routes/html-routes.js")(app);

// app.listen(PORT, function(){
//     console.log("App listening on PORT:" + PORT);
// })

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
