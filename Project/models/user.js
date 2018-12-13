module.exports = function(sequelize, DataTypes) {
  var habits = sequelize.define("habits", {
    username: DataTypes.STRING,
    habit1: DataTypes.STRING,
    goal1: DataTypes.STRING,
    achieved1: DataTypes.STRING,
    habit2: DataTypes.STRING,
    goal2: DataTypes.STRING,
    achieved2: DataTypes.STRING,
    habit3: DataTypes.STRING,
    goal3: DataTypes.STRING,
    achieved3: DataTypes.STRING,
  });
  return habits;
};