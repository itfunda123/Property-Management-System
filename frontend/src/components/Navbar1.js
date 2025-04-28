// components/Navbar1.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons'; // Bootstrap Icons

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="d-flex flex-column">
      {/* Top Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-light shadow-sm' : 'bg-transparent'}`}>
        <div className="container-fluid">
          <span className="navbar-brand">Tenant Dashboard</span>

          <button 
            className="btn btn-outline-primary ms-auto"
            onClick={toggleSidebar}
          >
            <House size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`bg-light border-start position-fixed h-100 ${isOpen ? 'd-block' : 'd-none'}`} 
        style={{ width: '200px', top: '56px', right: 0, zIndex: 1000 }}
      >
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register" onClick={() => setIsOpen(false)}>Tenant Register</Link> {/* Added here */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
