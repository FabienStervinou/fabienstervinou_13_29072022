import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store/index';
import Operation from '../../layout/Operation';
import mockedData from '../../services/mockedData.js';
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

    if (firstname.length <= 2 || lastname.length <= 2 ) { return; }

    try {
      await dispatch(doChangeProfile(firstname, lastname, token));
      toggleEditForm();
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
              <button className="edit-button" onClick={() => toggleEditForm()}>Edit name</button> 
            </> 
            : <>
              <form className='edit' onSubmit={submitNewProfil}>
                <h1>Welcome back</h1>
                <input className='edit-input' name='firstName' type="text" placeholder={user.firstName}/>
                <input className='edit-input' name='lastName' type="text" placeholder={user.lastName}/><br />
                <button className='edit-button'>Save</button>
                <button className="edit-button" onClick={() => toggleEditForm()}>Cancel</button> 
              </form>
            </>
        }
      </div>
      <h2 className="sr-only">Accounts</h2>
      {
        mockedData.map((data) => {
          return <Operation data={data} key={data.title}/>;
        })
      }
    </main>
  );
}

export default User;