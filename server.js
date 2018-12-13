const db = require("./models");
const express = require("express");
const session = require("express-session");

const PORT = process.env.PORT || 3000;
const passport = require("./config/passport");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "10000 hours", resave: true, saveUninitialize:true}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/landing.html")
})

app.get("/dashboard", function(req, res){
  // if(!req.user){
  //   return res.redirect("/")
  // }
  res.sendFile( __dirname + "/views/dashboard.handlebars")
  // res.send("YOU MADE IT, YOU'RE LOGGED IN! " + req.user.email);
})

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})

app.post("/api/login", passport.authenticate("local"), function(req, res){
  res.redirect(307, '/api/dashboard');
})

app.post("/api/signup", function(req, res){
  console.log(req.body);
  db.User.create(req.body).then(function(response){
    console.log(response);
    res.redirect(307, '/api/login')
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })

})

db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
  })
});
