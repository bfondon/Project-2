var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
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

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password,
      bcrypt.genSaltSync(10), null);
  });
  return User;
};

//elena password: 2222, id 1, email: fefe3@gmail.com
//alpha password: test123, id 2, email: alphabeta@chi.com
//beta password: 3333, id 3, email: betatest@chi.com