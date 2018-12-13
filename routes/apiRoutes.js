var db = require("../models");

module.exports = function(app) {
  // app.post("/",function(req,res){
  //   console.log(req.body);
  //   res.send(200);
  // })
  app.post("/api/signup", function(req, res){
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password:req.body.password
    }).then(function(response){
      console.log(response);
      // res.redirect(307, "/");
      res.send(response);
      res.status(200).end();
    });
  });
  
  
  
  app.get("/api/signup", function(req, res) {
    db.User.findAll({}).then(function(results){
      console.log(results)
      res.json(results);
    });
  }
)};





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
