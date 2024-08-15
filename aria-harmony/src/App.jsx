import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Program from './components/Program';
import Pricing from './components/Pricing';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      
      <NavBar />  
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/pricing" element={<Pricing />} />
          
        </Routes>
    
    </Router>
  );
}

export default App;
