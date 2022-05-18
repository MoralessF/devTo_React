import React from 'react';
import './App.css';
import './App.styles.scss';



import { Routes, Route } from 'react-router-dom';




import Main from './Components/Main';
import Login  from './Components/Login';
import SignUp  from './Components/SignUp';
import NavBar from './Components/NavBar';
import BigPosts from './Components/BigPosts';


function App() {
  return (
    <>
      <div><NavBar/></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/BigPosts/:id" element={<BigPosts />} />
      </Routes>
    </>
  );
}

export default App;

