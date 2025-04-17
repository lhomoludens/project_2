import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HeroHeader from './components/HeroHeader';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  const [homeCards] = useState([
    { title: "London", image: "https://images.unsplash.com/photo-1592345279419-959d784e8aad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "London Bridge" },
    { title: "Norway", image: "https://images.unsplash.com/photo-1593291619462-e4240344ea21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Norway Auroras" },
    { title: "Berlin", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Berlin" },
  ]);

  const [socialLinks] = useState([
    { icon: "fab fa-twitter", href: "https://twitter.com" },
    { icon: "fab fa-facebook", href: "https://facebook.com" },
    { icon: "fab fa-instagram", href: "https://instagram.com" },
  ]);

  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <HeroHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer links={socialLinks} year={currentYear} />
    </Router>
  );
}

export default App;
