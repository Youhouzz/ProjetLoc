import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user, fetchUserDetails } = useContext(AuthContext);

  useEffect(() => {
    fetchUserDetails(); // Appelle la fonction pour récupérer les détails de l'utilisateur
  }, []);

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Profil de l'utilisateur</h1>
      <p>Nom: {user.firstname} {user.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Adresse: {user.adress}</p>
      <p>Numéro: {user.number}</p>
    </div>
  );
};

export default Profile;
