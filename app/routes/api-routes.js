//////////////////////////////////////////////////////
//THESE ROUTES ALLOW US TO CRUD(aka manipulate) DATA//
//////////////////////////////////////////////////////

//require the model for storing data
var model = require("../models/loreModel.js");

var express = require("express");
var app = express();



// Routes
// =============================================================

console.log(model.userInfo);

module.exports = function(app, passport) {



app.get('/login', function(req, res) {

// render the page and pass in any flash data if it exists
res.render('login.html', { message: req.flash('loginMessage') });
});

// process the login form
app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile.html', // redirect to the secure profile section
        failureRedirect : '/login.html', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}),
    function(req, res) {
        console.log("hello");

        if (req.body.remember) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
        }
    res.redirect('/');
});



// SIGNUP ==============================
// show the signup form
app.get('/signup', function(req, res) {
  // render the page and pass in any flash data if it exists
  res.render('/signup', { message: req.flash('signupMessage') });
});

// process the signup form
app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages

}));


// PROFILE SECTION =========================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/profile', isLoggedIn, function(req, res) {
res.render('profile.html', {
  user : req.user // get the user out of session and pass to template
});
});

// =====================================
// LOGOUT ==============================
// =====================================
app.get('/logout', function(req, res) {
req.logout();
res.redirect('/');
});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

// if user is authenticated in the session, carry on
if (req.isAuthenticated())
return next();

// if they aren't redirect them to the home page
res.redirect('/');
}

  // GET route for getting all of the posts
  app.get("/api", function(req, res) {
    model.userInfo.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);

      });
  });
