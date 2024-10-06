// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assurez-vous d'avoir installé axios avec npm ou yarn

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remplacez l'URL par celle de votre serveur backend
    axios.get('http://localhost:3306/api/user/profile')
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;
  if (!user) return <p>Aucun utilisateur trouvé.</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Profil de {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Biographie:</strong> {user.bio}</p>
    </div>
  );
};

export default Profile;
