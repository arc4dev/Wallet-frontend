import { useAuth } from 'hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
