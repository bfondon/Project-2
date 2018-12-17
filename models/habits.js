module.exports = function(sequelize, DataTypes) {
  var Habits = sequelize.define("Habits", {
    habitname: DataTypes.STRING,
    goal: DataTypes.INTEGER,
    achieved: DataTypes.INTEGER,
    achievedPercentage: DataTypes.INTEGER
  });

  Habits.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Habits.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Habits;
};