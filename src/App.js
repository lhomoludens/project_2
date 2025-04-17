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
