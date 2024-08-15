import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Program from './components/Program';
import Pricing from './components/Pricing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-montserrat">
        {/* Navigation Bar */}
        <nav className="flex bg-brown p-4 text-white">
          <label className="logo text-2xl font-bold">Aria Harmony</label>
          <ul className="flex ml-10">
            <li className="mx-5">
              <Link to="/" className="text-lg font-semibold">Home</Link>
            </li>
            <li className="mx-5">
              <Link to="/about" className="text-lg font-semibold">About</Link>
            </li>
            <li className="mx-5">
              <Link to="/program" className="text-lg font-semibold">Program</Link>
            </li>
            <li className="mx-5">
              <Link to="/pricing" className="text-lg font-semibold">Pricing</Link>
            </li>
            
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/pricing" element={<Pricing />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
