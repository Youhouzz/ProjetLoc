// controllers/authController.js
const User  = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Inscription d'un utilisateur
const register = async (req, res) => {
  const { firstname, lastname, email, password, adress, number } = req.body;
  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstname, lastname, email, password: hashedPassword, adress, number });
    const token = jwt.sign({ id: newUser.id }, 'your_jwt_secret_key');
    res.json({
      token,
      user: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Requête de connexion reçue:', req.body); // Log des données reçues

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('Utilisateur non trouvé'); // Log si l'utilisateur n'existe pas
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Mot de passe invalide'); // Log si le mot de passe est incorrect
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret_key');
    console.log('Connexion réussie, token généré:', token); // Log si tout va bien
    res.json({
      token,
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Erreur lors de la connexion:', err); // Log des erreurs générales
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};



module.exports = { register, login };
