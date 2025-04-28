// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';
import PayRent from './components/PayRent';
import SendMessage from './components/SendMessage';
import Notifications from './components/Notifications';
import Navbar1 from './components/Navbar1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

// Admin Imports
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './admin/AdminRegister';
import AdminDashboard from './admin/AdminDashboard';
import PrivateAdminRoute from './admin/PrivateAdminRoute';
import ManageTenants from './admin/ManageTenants'; // <-- Added ManageTenants Import

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Routes>

          {/* Public Routes with Navbar1 */}
          <Route path="/login" element={
            <>
              <Navbar1 />
              <Login />
            </>
          } />
          <Route path="/register" element={
            <>
              <Navbar1 />
              <Register />
            </>
          } />

          {/* Tenant Routes */}
          <Route path="/tenant-dashboard" element={
            <PrivateRoute>
              <Navbar />
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/pay-rent" element={
            <PrivateRoute>
              <Navbar />
              <PayRent />
            </PrivateRoute>
          } />
          <Route path="/send-message" element={
            <PrivateRoute>
              <Navbar />
              <SendMessage />
            </PrivateRoute>
          } />
          <Route path="/notification" element={
            <PrivateRoute>
              <Navbar />
              <Notifications />
            </PrivateRoute>
          } />

          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin-dashboard" element={
            <PrivateAdminRoute>
              <AdminDashboard />
            </PrivateAdminRoute>
          } />
          <Route path="/admin-manage-tenants" element={
            <PrivateAdminRoute>
              <ManageTenants />
            </PrivateAdminRoute>
          } /> {/* Added Manage Tenants Route */}

        </Routes>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
