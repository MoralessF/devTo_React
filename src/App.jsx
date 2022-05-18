import React from 'react';
import './App.css';
import './App.styles.scss';

import { Routes, Route } from 'react-router-dom';

import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NewPost from './Components/NewPost';
import NavBar from './Components/NavBar';
import BigPosts from './Components/BigPosts';

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
<<<<<<< HEAD
        <Route path="/BigPosts/:id" element={<BigPosts />} />
=======
        <Route path="/NewPost" element={<NewPost />} />
>>>>>>> 3ab7fc02ca2503d9686fc105aa282e3eb858e9cb
      </Routes>
    </>
  );
}

export default App;
