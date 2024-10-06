// server.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(express.json()); // Pour traiter les requêtes JSON
const cors = require('cors');

// Activer CORS pour toutes les routes
app.use(cors());

// Utilisation des routes d'authentification
app.use('/', authRoutes);

// Synchronisation avec la base de données et démarrage du serveur
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(3000, () => {
      console.log('Serveur démarré sur le port 3000');
    });
  })
  .catch(err => console.error('Erreur de synchronisation avec la base de données:', err));
