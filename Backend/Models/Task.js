const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tododb', 'PrinceGarg', 'Pri8442@#', {
  host: 'localhost',
  dialect: 'mysql'
});


const Task = sequelize.define('tasks', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
});

module.exports = Task;
