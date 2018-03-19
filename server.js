var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8080

//create application/json parser
var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false})

//parse various different custom JSON types as JSON
app.use(bodyParser.json({type: 'application/**json'}))

//parse some custom thing into a Buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

//parse an HTML body into a starting
app.use(bodyParser.text({type: 'text/html'}))

// // Import routes and give the server access to them.
// var routes = require("./app/controllers/controller.js");

// app.use(routes);

//REQUIRE ROUTES
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);


})
