// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); 
const { login, register } = require('../controllers/authController');
const router = express.Router();


router.post('/signup', register);
 


router.post('/login', (req, res, next) => {
  console.log('Requête reçue pour /login:', req.body); // Ajoute ce log
  next(); // Passe la requête au middleware suivant
}, login);


module.exports = router;
