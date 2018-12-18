var db = require("../models");
var passport = require("../config/passport")


module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log("in login")
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    //can't even get here if you're not authorized
    res.json("/members");
  });

  app.post("/api/habits", function(req, res){
    if(!req.user){
      return res.redirect("/logout")
    }
    db.Habits.create({
      habitname: req.body.habitname,
      goal: req.body.goal,
      achieved: req.body.achieved,
      achievedPercentage: req.body.achievedPercentage,
      UserId: req.user.id
    }).then(function(){
      console.log("added one more habit.")
      res.status(201).send('New habit created');
    })
  });

  app.post("/api/signup", function(req, res){
    console.log("before user")
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password:req.body.password
    }).then(function() {
      console.log("after user");
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });


  app.get("/api/user_data", function(req, res) {
    if (!req.user){
      res.json({});
      console.log(res.json({}));
    }
    else {
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/user_habits", function(req, res) {
    if (!req.user){
      res.json({});
      console.log(res.json({}));
    }
    else {
      db.Habits.findAll({
        include: [db.User]
      }).then(function(data){
        res.json(data)
      })
    }
  });

  app.post("/api/timeLog", function(req, res) {
    db.timeLog.create({
      habitID: req.body.habitID,
      seconds: req.body.seconds,
    }).then(function() {
      console.log("timeLog successful");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/allUsers", function(req, res) {
    console.log(req.user);

    var userInfo
    if(req.user) {
      var { subdiscipline1, subD1Hours, subdiscipline2 } = req.user;

      userInfo = {
        subdiscipline1,
        subD1Hours,
        subdiscipline2
      };
    }
    else {
      userInfo = {
        message: "You are not logged in"
      };
    }

    return res.json(userInfo);

    // db.User.findOne({
    //   where: { id: req.params.id }
    // }).then(function(response) {
    //   res.json(response);
    // })
  });
};


// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new User
//   app.post("/api/login", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     }).then(function() {
//       res.redirect(307, "/api/login");
//     }).catch(function(err){
//       console.log(err);
//       res.json(err);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
