// admin/AdminDashboard.js
import AdminNavbar from './AdminNavbar'; // Import Admin Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
  return (
    <div>
      <AdminNavbar /> {/* Admin navbar at top */}

      <div className="container mt-5">
        <h2>Welcome, Admin!</h2>
        <p>Manage tenants, payments, complaints, and more.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
