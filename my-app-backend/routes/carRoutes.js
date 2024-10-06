// routes/carRoutes.js
const express = require('express');
const { getCars, createCar, updateCar, deleteCar } = require('../controllers/carController');
const router = express.Router();

router.get('/cars', getCars);        // Récupérer toutes les voitures
router.post('/cars', createCar);     // Créer une nouvelle voiture
router.put('/cars/:id', updateCar);  // Mettre à jour une voiture
router.delete('/cars/:id', deleteCar); // Supprimer une voiture

module.exports = router;
