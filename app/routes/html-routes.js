
var path = require("path");
var $ = require("jquery");

module.exports = function(app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/assasin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assasin.html"))
  });

  app.get("/hunter", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/hunter.html"))
  });

  app.get("/titan", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/titan.html"))
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"))
  });

};
