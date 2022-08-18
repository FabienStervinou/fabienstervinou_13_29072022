import './App.scss';
import React from 'react';
import Header from './layout/Header/index';
import Footer from './layout/Footer/index';
import Home from './views/Home/index';
import SignIn from './views/SignIn/index';
import User from './views/User/index';
import Error from './views/Error/index';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/sign-in" element={<SignIn/>} />
          <Route exact path="/user" element={<User/>} /> 
          <Route exact path="/404" element={<Error/>} /> 
          <Route exact path="*" element={<Navigate to="/404" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
