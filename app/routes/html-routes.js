var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {


 // index route loads main.html
 app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
 });

 // index route loads main.html
 app.get("/login.html", function(req, res) {
   res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
 });

 app.get("/signup.html", function(req, res) {
   res.sendFile(path.join(__dirname, "../views/layouts/signup.html"));
 });

   // index route loads view.html
 app.get("/profile.html", function(req, res) {
   res.sendFile(path.join(__dirname, "../views/layouts/profile.html"));
 });

};
