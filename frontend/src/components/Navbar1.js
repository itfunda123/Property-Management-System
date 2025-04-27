// components/Navbar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Tenant Dashboard</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleNavbar} 
        aria-controls="navbarNav" 
        aria-expanded={isOpen ? "true" : "false"} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
