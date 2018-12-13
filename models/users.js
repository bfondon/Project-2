module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    discipline1: DataTypes.STRING,
    subdiscipline1: DataTypes.STRING,
    subD1Hours: DataTypes.INTEGER,
    subdiscipline2: DataTypes.STRING,
    subD2Hours: DataTypes.INTEGER,
    subdiscipline3: DataTypes.STRING,
    subD3Hours: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER,
    longestSession: DataTypes.INTEGER,
    longestStreak: DataTypes.INTEGER,
    currentStreak: DataTypes.INTEGER
  });
  return User;
};

