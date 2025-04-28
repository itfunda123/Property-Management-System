// admin/AdminLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check (for now)
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('adminAuth', true);
      navigate('/admin-dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <div className="mt-3">
        <p>
          Not yet a member? <a href="/admin-register">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
