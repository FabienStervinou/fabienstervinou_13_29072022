import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/argentBankLogo.png';

function Header() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to="sign-in" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
          Sign In
      </NavLink>
    </nav>
  );
}

export default Header;