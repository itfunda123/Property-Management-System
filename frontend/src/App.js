// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';
import PayRent from './components/PayRent';           // <-- newly imported
import SendMessage from './components/SendMessage';   // <-- newly imported
import Notifications from './components/Notifications'; // <-- newly imported
import Navbar1 from './components/Navbar1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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


        </Routes>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
