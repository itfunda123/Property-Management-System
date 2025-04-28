// admin/AdminNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons'; // Hamburger icon
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear admin authentication on logout (simple example with localStorage)
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin-login';  // Redirect to login
  };

  return (
    <div className="d-flex flex-column">
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <span className="navbar-brand">Admin Dashboard</span>

          <button 
            className="btn btn-outline-light ms-auto"
            onClick={toggleSidebar}
          >
            <List size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar (opens from right) */}
      <div 
        className={`bg-dark text-white border-start position-fixed h-100 ${isOpen ? 'd-block' : 'd-none'}`} 
        style={{ width: '220px', top: '56px', right: 0, zIndex: 1000 }}
      >
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin-dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin-manage-tenants">Manage Tenants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin-payments">Payments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin-complaints">Complaints</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/send-message">Send Message to Tenants</Link>
          </li>
        </ul>
        
        {/* Logout Button */}
        <button 
          className="btn btn-danger mt-3 w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
