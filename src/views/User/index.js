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
      {
        mockedData.map((data) => {
          return <Operation data={data} key={data.title}/>;
        })
      }
    </main>
  );
}

export default User;