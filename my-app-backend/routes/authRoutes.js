// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Assurez-vous que le chemin est correct
const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log('Données reçues:', req.body);

  const { firstname, lastname, email, password, adress, number } = req.body;

  if (!firstname || !lastname || !email || !password || !adress || !number) {
    console.log('Champs manquants');
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log('Utilisateur existant');
      return res.status(400).json({ error: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      adress,
      number
    });

    console.log('Utilisateur créé:', newUser);
    return res.status(201).json({ message: 'Utilisateur inscrit avec succès', user: {
      id: newUser.id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
    }, });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});



module.exports = router;
