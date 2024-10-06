import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [adress, setAdress] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          adress,
          number,
        }),
      });

     
    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription');
    }

    const data = await response.json(); // Conserver la variable data
    alert(`Inscription réussie : Bienvenue`);
    navigate('/login');
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    alert('Erreur lors de l\'inscription');
  }
};

  return (
    <Container maxWidth="xs">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Inscription
        </Typography>
        <TextField
          label="Prénom"
          fullWidth
          required
          margin="normal"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          label="Nom"
          fullWidth
          required
          margin="normal"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Adresse"
          type="text"
          fullWidth
          required
          margin="normal"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <TextField
          label="Numero de telephone"
          type="number"
          fullWidth
          required
          margin="normal"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" 
          sx={{ mt: 2, backgroundColor: '#007BFF' }}
        >
          S'inscrire
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
