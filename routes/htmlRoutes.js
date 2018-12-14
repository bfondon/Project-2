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

  app.get("/dashboard", function(req, res){
    // if(!req.user){
    //   return res.redirect("/")
    // }
    db.Habits.findAll(/*{
       where: {
        userId: req.user.id
      }
    }*/)
      .then(function(data) {
        var hbsObject = {
          // userFullName: req.user.fullName,
          userFullName: "John Doe",
          allHabits: data
        };
        console.log(hbsObject);
        res.render("dashboard", hbsObject);
      });
    // res.send("YOU MADE IT, YOU'RE LOGGED IN! " + req.user.email);
  })
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};