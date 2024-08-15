import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/program', label: 'Program' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between bg-[#d2c3c399] p-[1.37rem] text-yellow-950 text-xl fixed top-0 left-0 right-0 z-10 w-full">
      <label className="logo text-3xl font-bold pl-[10rem]">Aria Harmony</label>
      <ul className="flex pr-[19rem] text-red-950 font-bold text-2xl hover:text-stone-950">
        {navItems.map((item) => (
          <li key={item.path} className="mx-5 pr-[1] ">
            <Link
              to={item.path}
              className={`text-lg font-semibold ${
                location.pathname === item.path ? 'text-red-950' : 'text-pink-800'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="font-montserrat bg-[#d2c3c399] w-full h-[900px]">
        <Navigation />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
