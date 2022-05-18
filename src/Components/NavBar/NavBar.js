import React from 'react';
import './NavBar.scss';

import logo from "../../img/logo192.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-Container">
        <div className="NavBar-Content">
          <div className="NavLeft">
          <img width="40px" height="40px"  src={logo} alt={"logo"}></img>
          <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <span className="input-group-text" id="basic-addon2">o-</span>
</div>
          </div>
          <div className='NavBut'>
          <button type="button" className="btn btn-light">Login</button>
          <button type="button" className="btn btn-outline-primary">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;