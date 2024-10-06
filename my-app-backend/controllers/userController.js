const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = 'your_jwt_secret_key';

// Inscription d'un utilisateur
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
    
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription' });
  }
};
