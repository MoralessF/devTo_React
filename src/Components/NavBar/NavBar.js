import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import logo from '../../img/logo192.png';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-Container">
        <div className="NavBar-Content">
          <div className="NavLeft">
            <Link className="test" to={`/`}>
              <img width="40px" height="40px" src={logo} alt={'logo'}></img>
            </Link>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              ></input>
              <span className="input-group-text" id="basic-addon2">
                <BsSearch />
              </span>
            </div>
          </div>
          <div className="NavBut">
            <Link className="test" to={`/NewPost`}>
              <button type="button" className="btn btn-light">
                New Post
              </button>
            </Link>
            <Link className="test" to={`/Login`}>
              <button type="button" className="btn btn-light">
                Login
              </button>
            </Link>
            <Link className="test" to={`/SignUp`}>
              <button type="button" className="btn btn-outline-primary">
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
