
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('tododb', 'PrinceGarg', 'Pri8442@#', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = User;
