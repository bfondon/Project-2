var db = require("../models");
var path = require("path");

var isAuthenticated = require("../config/Authentication_Middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user){
      res.redirect("/dashboard");
    }
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });


  app.get("/signup", function(req, res){
    res.redirect("/")
  });

  app.get("/login", function(req, res){
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  })

  app.get("/members", isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/members.html"));
  })

  app.get("/dashboard", function(req, res){
    if(!req.user){
      return res.redirect("/")
    }
    console.log("current user: " + req.user.name);
    res.sendFile(path.join(__dirname, "../public/dashboard.html"))
  })
  
  // app.get("/hobbies", function(req, res){
  //   if(!req.user){
  //     return res.redirect("/")
  //   }

  //   db.Habits.findAll({
  //     where: {
  //      UserId: req.user.id
  //    }
  //  })
  //    .then(function(data) {
  //      var hbsObject = {
  //        userFullName: req.user.name,
  //        allDisciplines: data
  //      };
  //      console.log(hbsObject);
  //      res.render("hobbies", hbsObject);
  //    });
  // });
  
  app.get("/friends", function(req, res){
    if(!req.user){
      return res.redirect("/")
    }
    res.sendFile(path.join(__dirname, "../public/friends.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};