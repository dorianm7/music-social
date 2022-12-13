import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';

function PrivateRoute() {
  const user = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
