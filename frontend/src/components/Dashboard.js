// components/Dashboard.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const tenant = JSON.parse(localStorage.getItem('tenant'));

  return (
    <div className="container mt-5">
      <h2>Welcome, {tenant?.fullName || 'Tenant'}!</h2>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4 rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Tenant Portal</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#tenantNavbar" 
            aria-controls="tenantNavbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="tenantNavbar">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="#">Home</Link>
              <Link className="nav-link" to="/pay-rent">Pay Rent</Link>
              <Link className="nav-link" to="/send-message">Send Message</Link>
              <Link className="nav-link" to="notification">Notifications</Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Dashboard;
