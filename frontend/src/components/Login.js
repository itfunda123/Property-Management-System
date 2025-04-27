// components/Login.js
import { useState } from 'react';
import authService from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(formData);
      navigate('/tenant-dashboard');
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Tenant Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="email" 
          type="email" 
          className="form-control mb-2" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        <input 
          name="password" 
          type="password" 
          className="form-control mb-2" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="btn btn-success mb-2">Login</button>
      </form>

      <div className="text-center mt-2">
        <p>Not a member? <Link to="/register">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
