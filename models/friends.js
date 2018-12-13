module.exports = function (sequelize, DataTypes) {
  var friends = sequelize.define("friends", {
    friend1: DataTypes.STRING,
    friend2: DataTypes.STRING,
  });
  return friends;
};