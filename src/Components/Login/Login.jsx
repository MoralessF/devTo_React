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
    <div className="body d-flex alig-items-center justify-content-center">
      <main className="d-flex alig-items-center justify-content-center">
        <div className="whiteContainer container bg-white mt-2 m-md-4 p-3 p-md-4 d-flex flex-column justify-content-center">
          <div className="d-flex flex-column">
            <h2 className="text-center loginTitle">Welcome to DEV Community</h2>
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
                <span className="infoText">
                  Have a password? Continue with your email address
                </span>
              </div>
              <form>
                <div className="mb-3">
                  {loginInput.map((group) => {
                    return (
                      <div key={`div_${group.textLabel}`}>
                        <label
                          key={`label_${group.textLabel}`}
                          className="form-label mt-2 labelInput"
                        >
                          {group.textLabel}
                        </label>
                        <input
                          key={`input_${group.nameInput}`}
                          className="form-control mb-3"
                          id={group.idInput}
                          type={group.typeInput}
                          name={group.nameInput}
                        ></input>
                      </div>
                    );
                  })}
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

                <p className="text-center mb-0 p-0 mt-3">
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
