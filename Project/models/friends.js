module.exports = function (sequelize, DataTypes) {
  var timeLog = sequelize.define("timeLog", {
    friend1: DataTypes.STRING,
    friend2: DataTypes.STRING,
  });
  return timeLog;
};