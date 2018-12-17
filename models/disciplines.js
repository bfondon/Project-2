module.exports = function(sequelize, DataTypes) {
    var Discipline = sequelize.define("Discipline", {
      hours: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    });
    Discipline.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Discipline.belongsTo(models.Habits, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Discipline;
  };