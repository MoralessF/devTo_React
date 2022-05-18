import React from 'react';
import './SignUp.styles.scss';

const SignUp = () => {
  return (
    <div className="body">
      <main className="container">
        <div className="containerRegister container bg-white mt-2 m-md-4 p-md-4">
          <div className="d-flex flex-column">
            <h1 className="text-center">Welcome to DEV Community</h1>
            <p className="text-center">
              <a href="">DEV Community</a> is a community of 851,532 amazing
              developers
            </p>
          </div>
          <div>
            <div>
              <h2>User</h2>
              <form onSubmit="signUp(event)">
                <div className="mb-3">
                  <label className="form-label mt-3 mb-0">First name</label>
                  <input
                    required
                    name="firstname"
                    type="text"
                    className="form-control"
                  />

                  <label className="form-label mt-3 mb-0">Last name</label>
                  <input
                    required
                    name="lastname"
                    type="text"
                    className="form-control"
                  />

                  <label className="form-label mt-3 mb-0">Email</label>
                  <input
                    required
                    name="email"
                    type="text"
                    className="form-control"
                  />

                  <label className="form-label mt-3 mb-0">Password</label>
                  <input
                    required
                    name="password"
                    type="password"
                    className="form-control"
                  />

                  <label className="form-label mt-3 mb-0">
                    Profile Picture
                  </label>
                  <input name="image" type="url" className="form-control" />

                  <label className="form-label mt-3 mb-0">Country</label>
                  <input name="country" type="text" className="form-control" />

                  <label className="form-label mt-3 mb-0">Birthday</label>
                  <div className="d-flex justify-content-start">
                    <input
                      name="birthday-day"
                      type="number"
                      className="form-control me-3 inputDate"
                      placeholder="dd"
                    />
                    <input
                      name="birthday-month"
                      type="number"
                      className="form-control me-3 inputDate"
                      placeholder="mm"
                    />
                    <input
                      name="birthday-year"
                      type="number"
                      className="form-control inputDate"
                      placeholder="yyyy"
                    />
                  </div>

                  <label className="form-label mt-3 mb-0">Description</label>
                  <input
                    name="description"
                    type="texts"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
