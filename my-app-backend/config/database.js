// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_development', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
