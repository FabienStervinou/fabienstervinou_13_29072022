import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/index';
import { doChangeProfile } from '../../features/auth/auth.actions';
import './style.scss';

function User () {
  const dispatch = useDispatch();
  const state = store.getState();
  const token = state.auth.token;
  const user = state.auth.user;
  const [toggleEdit, setToggleEdit] = useState(false);

  const toggleEditForm = () => {
    setToggleEdit(!toggleEdit);
  }; 

  const submitNewProfil = async (e) => {
    e.preventDefault();
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;

    try {
      await dispatch(doChangeProfile(firstname, lastname, token));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {
          !toggleEdit 
            ? <>
              <h1>Welcome back<br />{user.firstName} {user.lastName} !</h1>
            </> 
            : <>
              <form onSubmit={submitNewProfil}>
                <h1>Welcome back</h1>
                <input name='firstName' type="text" placeholder={user.firstName}/>
                <input name='lastName' type="text" placeholder={user.lastName}/>
                <button className='edit-button'>Save</button>
              </form>
            </>
        }

        <button className="edit-button" onClick={() => toggleEditForm()}>
          {!toggleEdit ? 'Edit Name' : 'Cancel'}
        </button> 

      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;