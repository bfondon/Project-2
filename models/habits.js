module.exports = function(sequelize, DataTypes) {
  var Habits = sequelize.define("Habits", {
    habitname: DataTypes.STRING,
    goal: DataTypes.INTEGER,
    achieved: DataTypes.INTEGER
  });
  return Habits;
};