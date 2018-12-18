module.exports = function (sequelize, DataTypes) {
  var timeLog = sequelize.define("timeLog", {
    // habitID: DataTypes.INTEGER,
    seconds: DataTypes.INTEGER,
    // comment: DataTypes.TEXT
  });
  timeLog.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    timeLog.belongsTo(models.Habits, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return timeLog;
};

