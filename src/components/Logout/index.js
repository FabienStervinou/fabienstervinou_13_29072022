import React from 'react';
import { Navigate } from 'react-router-dom';

function Logout () {
  window.localStorage.setItem('authenticated', false);

  return (
    <Navigate to="/sign-in"/>
  );
}

export default Logout;