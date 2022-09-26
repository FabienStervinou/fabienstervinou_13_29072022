import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../features/auth/auth.actions';
import {SVGUser} from '../../assets/img/svgs/user.js';
import {SVGSignout} from '../../assets/img/svgs/signout.js';

function Header () {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleClick = () => {
    dispatch(doLogout());
  };

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
      <div className="separator"></div>
      {
        isAuthenticated 
          ? 
          <>
            <div className="main-nav-item">
              <span className="avatar"><SVGUser /></span>
              <span className="name">{ user.firstName }</span>
            </div>
            <button className="main-nav-item" onClick={handleClick}>
              <span className='signout'><SVGSignout /></span>
              Sign Out
            </button>
          </>
          : <NavLink to="sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
      }
    </nav>
  );
}

export default Header;