import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroHeader from './components/HeroHeader';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <Router>
      <HeroHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
