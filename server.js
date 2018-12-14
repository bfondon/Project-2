const db = require("./models");
const express = require("express");
const session = require("express-session");

require("dotenv").config();


var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const passport = require("./config/passport");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

//use sessions to keep track of login
app.use(session({ secret: "10000 hours", resave: true, saveUninitialize:true}))
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "handlebars");

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/landing.html")
})

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})

// app.post("/api/login", passport.authenticate("local"), function(req, res){
//   res.redirect(307, '/api/dashboard');
// })

app.post("/api/signup", function(req, res){
  console.log(req.body);
  db.User.create(req.body).then(function(response){
    console.log(response);
    res.redirect(307, '/api/login')
  }).catch(function(err){
    console.log(err);
    res.status(500).json(err);
  })
});



// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  console.log(Object.keys(db));
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
