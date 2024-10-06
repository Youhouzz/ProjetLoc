// models/user.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous que le chemin est correct

class User extends Model {
  static associate(models) {
    User.hasMany(models.Ad, { foreignKey: 'id_user' });
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users', 
});

module.exports = User;
