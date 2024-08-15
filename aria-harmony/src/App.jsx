import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Pricing from "./pages/Pricing";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="font-montserrat bg-[rgba(210,195,195,0.6)] w-full h-[900px]">
        <nav
          className="flex items-center justify-between bg-brown p-4 text-white fixed top-0 left-0 right-0 z-10"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "1rem",
            position: "fixed",
            width: "100%",
            top: "0",
          }}
        >
          <label className="logo text-2xl font-bold">Aria Harmony</label>
          <ul className="flex ml-10">
            <li className="mx-5">
              <Link to="/" className="text-lg font-semibold">
                Home
              </Link>
            </li>
            <li className="mx-5">
              <Link to="/about" className="text-lg font-semibold">
                About
              </Link>
            </li>
            <li className="mx-5">
              <Link to="/program" className="text-lg font-semibold">
                Program
              </Link>
            </li>
            <li className="mx-5">
              <Link to="/pricing" className="text-lg font-semibold">
                Pricing
              </Link>
            </li>
            <li className="mx-5">
              <Link to="/contact" className="text-lg font-semibold">
                Contact
              </Link>
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
