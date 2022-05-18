import React from 'react';
import './Login.styles.scss';

const Login = () => {
  return (
    <main>
      <div>
        <div>
          <h1>Welcome to DEV Community</h1>
          <p>
            <a>DEV Community</a> is a community of 851,532 amazing developers
          </p>
        </div>
        <div>
          <div classNameName="d-flex flex-column">
            <button type="button" className="mb-2 p-2">
              <i className="me-1 bi bi-apple" />
              Continue with Apple
            </button>
            <button type="button" className="mb-2 p-2">
              <i className="me-1 bi bi-github" />
              Continue with Forem
            </button>
            <button type="button" className="mb-2 p-2">
              <i className="me-1 bi bi-emoji-laughing" />
              Continue with GitHub
            </button>
            <button type="button" className="mb-2 p-2">
              <i className="me-1 bi bi-twitter" />
              Continue with Twitter
            </button>
          </div>
          <div>
            <div className="text-center mt-2 mb-1">
              <span className="">
                Have a password? Continue with your email address
              </span>
            </div>
            <form onSubmit="logIn(event)">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                  <input
                    id="emailInput"
                    type="text"
                    name="email"
                    className="form-control"
                  />
                </label>

                <label htmlFor="password" className="form-label">
                  Password
                  <input
                    id="passwordInput"
                    type="password"
                    name="password"
                    className="form-control"
                  />
                </label>
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <p className="form-check-label">Remember me</p>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Continue
              </button>

              <p className="text-center m-4">
                <p>I forgot my password</p>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
