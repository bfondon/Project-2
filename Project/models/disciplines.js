module.exports = function(sequelize, DataTypes) {
    var Discipline = sequelize.define("Discipline", {
      hours: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    });
    return Discipline;
  };