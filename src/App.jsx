import React from 'react';
import './App.css';
import './App.styles.scss';



import { Routes, Route } from 'react-router-dom';




import Main from './Components/Main';
import Login  from './Components/Login';
import SignUp  from './Components/SignUp';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

