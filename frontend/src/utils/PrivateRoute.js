import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const tenant = JSON.parse(localStorage.getItem('tenant'));

  return tenant ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
