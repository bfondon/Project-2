var db = require("../models");
var path = require("path");

var isAuthenticated = require("../config/Authentication_Middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user){
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });


  app.get("/signup", function(req, res){
    res.redirect("/")
  });

  app.get("/login", function(req, res){
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/members.html"));
  })


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};