import React from 'react';
import './App.css';
import './App.styles.scss';

import { Routes, Route } from 'react-router-dom';

import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NewPost from './Components/NewPost';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/NewPost" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
