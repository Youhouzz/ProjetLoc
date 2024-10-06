import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la connexion');
      }

      const data = await response.json();
      alert('Connexion réussie !');
      navigate('/home');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      alert('Erreur lors de la connexion');
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
          Connexion
        </Typography>
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
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" 
          sx={{ mt: 2, backgroundColor: '#007BFF' }}
        >
          Se connecter
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
