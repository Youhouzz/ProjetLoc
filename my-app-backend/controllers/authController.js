// controllers/authController.js
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Inscription d'un utilisateur
const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstname, lastname, email, password: hashedPassword });
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

// Connexion d'un utilisateur
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret_key');
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};

module.exports = { register, login };
