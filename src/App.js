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
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {

  const [homeCards] = useState([
    { title: "London", image: "https://images.unsplash.com/photo-1592345279419-959d784e8aad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "London Bridge" },
    { title: "Norway", image: "https://images.unsplash.com/photo-1593291619462-e4240344ea21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Norway Auroras" },
    { title: "Berlin", image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Berlin" },
  ]);

  const [destinationCards] = useState([
    { text: "Rest on the beautiful beaches of Bali.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop", alt: "Bali" },
    { text: "Explore the romantic streets of Paris.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop", alt: "Paris" },
    { text: "Experience the vibrant life of Tokyo.", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop", alt: "Tokyo" },
  ]);

  const [tourCards] = useState([
    { title: "Adventure Tours", image: "https://images.unsplash.com/photo-1585919269458-6259dfe9f21a?q=80&w=1932&auto=format&fit=crop", alt: "Adventure" },
    { title: "Luxurious Tours", image: "https://images.unsplash.com/photo-1730190201006-355592e26833?q=80&w=2070&auto=format&fit=crop", alt: "Luxury" },
    { title: "City Tours", image: "https://images.unsplash.com/photo-1724919093219-42cede15832e?q=80&w=1932&auto=format&fit=crop", alt: "City" },
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
             <Route 
          path="/" 
          element={<Home homeCards={homeCards} destinationCards={destinationCards} tourCards={tourCards} />} 
        />
        <Route 
          path="/home" 
          element={<Home homeCards={homeCards} destinationCards={destinationCards} tourCards={tourCards} />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer links={socialLinks} year={currentYear} />
    </Router>
  );
}

export default App;
