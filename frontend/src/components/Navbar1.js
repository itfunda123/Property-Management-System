// components/Navbar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons'; // Bootstrap Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex flex-column">
      {/* Top Navbar */}
      <nav className="navbar navbar-light bg-light w-100">
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

      {/* Sidebar (opens from right) */}
      <div 
        className={`bg-light border-start position-fixed h-100 ${isOpen ? 'd-block' : 'd-none'}`} 
        style={{ width: '200px', top: '56px', right: 0, zIndex: 1000 }}
      >
        <ul className="nav flex-column mt-4">
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
    </div>
  );
};

export default Navbar;
