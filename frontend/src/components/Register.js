// components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const { fullName, email, phone, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/tenants/register', formData);
      localStorage.setItem('tenant', JSON.stringify(res.data));
      navigate('/tenant-dashboard');
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Tenant Registration</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="fullName" 
          className="form-control mb-2" 
          value={fullName} 
          onChange={onChange} 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          className="form-control mb-2" 
          value={email} 
          onChange={onChange} 
          placeholder="Email" 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          className="form-control mb-2" 
          value={phone} 
          onChange={onChange} 
          placeholder="Phone" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          className="form-control mb-2" 
          value={password} 
          onChange={onChange} 
          placeholder="Password" 
          required 
        />
        <button type="submit" className="btn btn-primary mb-2">Register</button>
      </form>

      <div className="text-center mt-2">
        <p>Already a member? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Register;
