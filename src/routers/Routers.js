import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import Profile from "../pages/Profile"; // Page pour le profil utilisateur (exemple)

// Fonction pour vérifier l'authentification (simulée avec localStorage)
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Route protégée, redirige vers /login si non authentifié
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      
      {/* Route protégée pour le profil */}
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      
      {/* Route pour gérer les 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
