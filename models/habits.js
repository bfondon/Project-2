module.exports = function(sequelize, DataTypes) {
  var habit = sequelize.define("habit", {
    habitname: DataTypes.STRING,
    goal: DataTypes.STRING,
    achieved: DataTypes.STRING
  });
  return habit;
};