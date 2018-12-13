module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.PASSWORD,
    hobby: DataTypes.STRING
  });
  return User;
};

