// admin/PrivateAdminRoute.js
import { Navigate } from 'react-router-dom';

function PrivateAdminRoute({ children }) {
  const isAdminAuth = localStorage.getItem('adminAuth');

  return isAdminAuth ? children : <Navigate to="/admin-login" />;
}

export default PrivateAdminRoute;
