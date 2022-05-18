import React from 'react';
import NavBar from '../NavBar';
import './SignUp.styles.scss';

const SignUp = () => {
  const [newUser, setNewUser] = React.useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    avatar: null,
    country: null,
    day: null,
    month: null,
    year: null,
    description: null,
  });

  const handleSignup = (e) => {
    try {
      e.preventDefault();
      const firstName = e.target[0].value.toString();
      const lastName = e.target[1].value.toString();
      const email = e.target[2].value.toString();
      const password = e.target[3].value.toString();
      let avatar = '';
      e.target[4].value.toString() !== ''
        ? (avatar = e.target[4].value.toString())
        : (avatar = 'https://cdn-icons-png.flaticon.com/512/147/147142.png');
      const country = e.target[5].value.toString();
      const day = e.target[6].value.toString();
      const month = e.target[7].value.toString();
      const year = e.target[8].value.toString();
      const description = e.target[9].value.toString();

      setNewUser({
        firstName,
        lastName,
        email,
        password,
        avatar,
        country,
        day,
        month,
        year,
        description,
      });

      createUser(newUser, (body) => {
        console.log(body);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = (user, funcion) => {
    const url = `http://localhost:8080/api/v1/users`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respuesta) => respuesta.json())
      .then((body) => funcion(body))
      .catch((error) => console.log(error));
  };

  return (
    <div className="body d-flex flex-column">
      <NavBar />
      <div className="signupContainer d-flex align-items-center justify-content-center">
        <main className="d-flex align-items-center justify-content-center">
          <div className="containerRegister container bg-white mt-2 m-md-4 p-md-4">
            <div className="d-flex flex-column">
              <h2 className="text-center loginTitle">
                Welcome to DEV Community
              </h2>
              <p className="text-center">
                <a className="loginAnchors" href="">
                  DEV Community
                </a>{' '}
                is a community of 851,532 amazing developers
              </p>
            </div>
            <div>
              <div>
                <h3>User</h3>
                <form onSubmit={handleSignup}>
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
                    <input
                      name="country"
                      type="text"
                      className="form-control"
                    />

                    <label className="form-label mt-3 mb-0">Birthday</label>
                    <div className="d-flex justify-content-start">
                      <input
                        name="birthday-day"
                        type="number"
                        className="form-control me-3 inputDate"
                        placeholder="dd"
                        required
                      />
                      <input
                        name="birthday-month"
                        type="number"
                        className="form-control me-3 inputDate"
                        placeholder="mm"
                        required
                      />
                      <input
                        name="birthday-year"
                        type="number"
                        className="form-control inputDate"
                        placeholder="yyyy"
                        required
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
    </div>
  );
};

export default SignUp;
