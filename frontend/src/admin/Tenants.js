// admin/Tenants.js
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar'; // Admin navbar at top
import 'bootstrap/dist/css/bootstrap.min.css';

function Tenants() {
  // Sample tenant data
  const [tenants, setTenants] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", phone: "5551234567" }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this tenant?')) {
      setTenants(tenants.filter(tenant => tenant.id !== id));
    }
  };

  return (
    <div>
      <AdminNavbar /> {/* Admin Navbar at the top */}

      <div className="container mt-5">
        <h2>Manage Tenants</h2>

        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.id}</td>
                <td>{tenant.name}</td>
                <td>{tenant.email}</td>
                <td>{tenant.phone}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(tenant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {tenants.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">No tenants found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tenants;
