import './style.scss';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../store/authActions';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doLogin(email, password));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} autoComplete="on" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */}
          {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
          {/* SHOULD BE THE BUTTON BELOW */}
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;