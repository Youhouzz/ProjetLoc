const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Assure-toi que ce chemin est correct

const app = express();

app.use(express.json()); // Pour que Express puisse comprendre le JSON envoyé par React

app.use('/', userRoutes); // Utilise les routes d'inscription
const port = process.env.PORT || 3000; // Utilise le port 3000 ou celui défini dans les variables d'environnement
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
