module.exports = function (sequelize, DataTypes) {
  var timeLog = sequelize.define("timeLog", {
    userID: DataTypes.STRING,
    hours: DataTypes.DECIMAL,
    subdiscipline: DataTypes.STRING,
    comment: DataTypes.TEXT
  });
  return timeLog;
};