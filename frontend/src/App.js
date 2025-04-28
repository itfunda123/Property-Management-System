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
import AboutUs from './pages/AboutUs';   // <-- newly imported
import ContactUs from './pages/ContactUs'; // <-- newly imported

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

          {/* Private Routes with Navbar */}
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
          <Route path="/" element={<Register />} />  {/* Default Route to Register */} 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
