import React from 'react';
import './Login.styles.scss';
import { BsApple, BsGithub, BsTwitter, BsEmojiWink } from 'react-icons/bs';

const loginMethods = [
  { name: 'Apple', icon: <BsApple className="buttonIcon" /> },
  { name: 'Forem', icon: <BsEmojiWink className="buttonIcon" /> },
  { name: 'GitHub', icon: <BsGithub className="buttonIcon" /> },
  { name: 'Twitter', icon: <BsTwitter className="buttonIcon" /> },
];

const loginInput = [
  {
    textLabel: 'Email',
    idInput: 'emailInput',
    typeInput: 'email',
    nameInput: 'email',
  },
  {
    textLabel: 'Password',
    idInput: 'passwordInput',
    typeInput: 'password',
    nameInput: 'password',
  },
];

const Login = () => {
  return (
    <div className="body">
      <main className="container">
        <div className="container bg-white mt-2 m-md-4 p-md-4">
          <div className="d-flex flex-column">
            <h1 className="text-center loginTitle">Welcome to DEV Community</h1>
            <p className="text-center">
              <a className="loginAnchors" href="">
                DEV Community
              </a>{' '}
              is a community of 851,532 amazing developers
            </p>
          </div>
          <div className="p-3">
            <div className="d-flex flex-column">
              {loginMethods.map((button) => {
                return (
                  <button
                    className={`${button.name} loginButton p-2 mb-2 d-flex align-items-center justify-content-center`}
                    key={button.name}
                  >
                    {button.icon}
                    Continue with {button.name}
                  </button>
                );
              })}
            </div>
            <div>
              <div className="text-center mt-2 mb-1">
                <span className="">
                  Have a password? Continue with your email address
                </span>
              </div>
              <form>
                <div className="mb-3">
                  {loginInput.map((group) => {
                    return (
                      <>
                        <label className="form-label mt-2">
                          {group.textLabel}
                        </label>
                        <input
                          className="form-control mb-3"
                          id={group.idInput}
                          type={group.typeInput}
                          name={group.nameInput}
                        ></input>
                      </>
                    );
                  })}
                  {/* <label className="form-label">Email</label>
                <input
                  id="emailInput"
                  type="email"
                  name="email"
                  className="form-control"
                />

                <label className="form-label">Password</label>
                <input
                  id="passwordInput"
                  type="password"
                  name="password"
                  className="form-control"
                /> */}
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Remember me</label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Continue
                </button>

                <p className="text-center m-4">
                  <a className="loginAnchors supportAnchor" href="">
                    I forgot my password
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
