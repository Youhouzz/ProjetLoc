import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');
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
    <div>
      <h2>Inscription</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Prénom"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Adresse"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Numéro de téléphone"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
    </div>
  );
};

export default Signup;
