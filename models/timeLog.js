module.exports = function (sequelize, DataTypes) {
  var timeLog = sequelize.define("timeLog", {
    habitID: DataTypes.INTEGER,
    seconds: DataTypes.DECIMAL,
    // comment: DataTypes.TEXT
  });
  return timeLog;
};

