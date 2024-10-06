// sync.js
const sequelize = require('./config/database');
const User = require('./models/user');

sequelize.sync({ alter: true })
  .then(() => console.log('Base de données synchronisée'))
  .catch(err => console.error('Erreur de synchronisation:', err));
