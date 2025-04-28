// admin/AdminRegister.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation (password match check)
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Dummy registration logic (you can replace with real backend API)
    if (email && password) {
      alert('Admin registration successful');
      navigate('/admin-login'); // Redirect to login page after successful registration
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <input 
          type="email" 
          placeholder="Admin Email" 
          className="form-control mb-3" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="form-control mb-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <div className="mt-3">
        <p>
          Already a member? <a href="/admin-login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default AdminRegister;
