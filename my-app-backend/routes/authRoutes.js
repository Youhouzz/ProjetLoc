const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); 
const { login, register } = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Récupère l'en-tête 'Authorization'
  if (!authHeader) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const token = authHeader.split(' ')[1]; // Le token est la deuxième partie après 'Bearer'

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret_key'); // Remplace 'your_jwt_secret_key' par ta clé JWT
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};

router.post('/signup', register);
router.post('/login', login);

router.get('/profile', verifyToken, async (req, res) => {
  const userId = req.userId; // Récupérer l'ID utilisateur à partir du token
  
  try {
    const user = await User.findByPk(userId, {
      attributes: ['id', 'email', 'firstname', 'lastname', 'adress', 'number'],
    });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération du profil:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
