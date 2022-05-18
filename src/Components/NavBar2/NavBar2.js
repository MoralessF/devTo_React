import React from 'react';
import './NavBar2.scss';



const NavBar2 = () => {
  return (
    <div className="NavBar2">
      <div className="NavBar2-Container">
        <div className="NavBar2-Content container-fluid size">
       
        <div className="navbar-nav d-flex flex-row gap-3">
          <a onClick={()=>{}} className="nav-link text-dark fw-bold active" aria-current="page" href="#">All</a>
          <a onClick={()=>{}} className="nav-link text-secondary" href="#">Week</a>
          <a onClick={()=>{}}  className="nav-link text-secondary" href="#">Month</a>
          <a onClick={()=>{}} className="nav-link text-secondary" href="#">Year</a>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default NavBar2;