module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      hours: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    });
    return User;
  };