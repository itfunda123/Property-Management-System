// admin/ManageTenants.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManageTenants() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all tenants from the backend
    const fetchTenants = async () => {
      try {
        const response = await axios.get('/api/tenants');
        setTenants(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tenants:', error);
      }
    };

    fetchTenants();
  }, []);

  const handleDelete = async (tenantId) => {
    if (window.confirm('Are you sure you want to delete this tenant?')) {
      try {
        await axios.delete(`/api/tenants/${tenantId}`);
        setTenants(tenants.filter(tenant => tenant._id !== tenantId)); // Remove tenant from the state
      } catch (error) {
        console.error('Error deleting tenant:', error);
      }
    }
  };

  const handleEdit = (tenantId) => {
    // Navigate to the edit page or open an edit form (you can create a separate component for editing tenants)
    // For now, just logging the tenantId
    console.log('Edit tenant with ID:', tenantId);
  };

  if (loading) {
    return <div>Loading tenants...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Manage Tenants</h2>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map(tenant => (
            <tr key={tenant._id}>
              <td>{tenant.fullName}</td>
              <td>{tenant.email}</td>
              <td>{tenant.phone}</td>
              <td>
                <button 
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(tenant._id)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleDelete(tenant._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageTenants;
