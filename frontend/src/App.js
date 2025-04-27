// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';
import Navbar1 from './components/Navbar1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* This will make the body take full height */}
        {/* For Login and Register pages, use Navbar1 */}
        <Routes>
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
          
          {/* For the Dashboard and other private routes, use the main Navbar */}
          <Route path="/tenant-dashboard" element={
            <PrivateRoute>
              <Navbar />
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        
        {/* Footer is always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
