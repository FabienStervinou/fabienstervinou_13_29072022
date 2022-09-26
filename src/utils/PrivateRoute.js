import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    isAuthenticated
      ? <Outlet/> 
      : <Navigate to="/sign-in"/>
  );
};

export default PrivateRoutes;