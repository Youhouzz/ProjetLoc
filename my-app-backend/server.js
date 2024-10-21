const express = require('express');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(express.json()); // Pour traiter les requêtes JSON

// Configuration de la session
app.use(session({
  secret: 'votre_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Mettre à true si HTTPS est activé
    maxAge: 1000 * 60 * 60 * 24 // 24 heures
  }
}));

// Activer CORS pour toutes les routes
app.use(cors({
  origin: 'http://localhost:3001', // L'adresse de ton front-end
  credentials: true // Si tu utilises les sessions
}));

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
