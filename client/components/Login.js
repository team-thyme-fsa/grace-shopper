import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom';
const Auth = (props) => {
  const { name, handleSubmit, error, loginAuth, signupAuth } = props;

  const handleLogin = (event) => {
    event.preventDefault();
    // const formName = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginAuth(email, password, 'login');
  };

  const handleSignUp = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const address = event.target.address.value;
    signupAuth(email, password, firstName, lastName, address, 'signup');
  };

  let [authMode, setAuthMode] = useState('login');

  const changeAuthMode = (evt) => {
    // evt.preventDefault();
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };
  if (authMode === 'login') {
    return (
      <div className="login-form-container">
        <form className="Auth-form" onSubmit={handleLogin} name="login">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?
              <span className="switch" to="/signup" onClick={changeAuthMode}>
                Become a Trainer
              </span>
            </div>
            <div className="user-box">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="user-box"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="user-box">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="user-box"
                placeholder="Enter password"
                required
              />
            </div>
            {error && error.response && <div> {error.response.data} </div>}
            <div className="user-box">
              <button type="submit" className="loginbtn">
                Login
              </button>
            </div>
            <br></br>
            <br></br>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="signup-form-container">
      <form className="Auth-form" onSubmit={handleSignUp} name={name}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?
            <span className="switch" to="/login" onClick={changeAuthMode}>
              Log In
            </span>
          </div>
          <div className="user-box">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="user-box"
              placeholder="Email"
              required
            />
          </div>
          <div className="user-box">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="user-box"
              placeholder="Password"
              required
            />
          </div>
          <div className="user-box">
            <label>First Name</label>
            <input
              name="firstName"
              className="user-box"
              placeholder="e.g Jane"
              required
            />
          </div>
          <div className="user-box">
            <label>Last Name</label>
            <input
              name="lastName"
              className="user-box"
              placeholder="e.g Doe"
              required
            />
          </div>
          <div className="user-box">
            <label>Address</label>
            <input name="address" className="user-box" placeholder="Address" />
          </div>

          {error && error.response && <div> {error.response.data} </div>}

          <div>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
            <input type="reset" className="resetbtn" value="reset"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    error: state.auth.error,
  };
};
const mapSignup = (state) => {
  return {
    name: 'signup',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loginAuth: (email, password, formName) =>
      dispatch(authenticate(email, password, null, null, null, formName)),
    signupAuth: (email, password, firstName, lastName, address, formName) =>
      dispatch(
        authenticate(email, password, firstName, lastName, address, formName),
      ),
  };
};

// const mapDispatch = (dispatch) => {
//   return {
//     handleSubmit(evt) {
//       console.log('handlesubmit');
//       evt.preventDefault();
//       const formName = evt.target.name;
//       const email = evt.target.email.value;
//       const password = evt.target.password.value;
//       if (formName === 'login') {
//         dispatch(authenticate(email, password, formName));
//       } else {
//         const firstName = evt.target.firstName.value;
//         const lastName = evt.target.lastName.value;
//         const address = evt.target.address.value;
//         dispatch(
//           authenticate(email, password, formName, firstName, lastName, address),
//         );
//       }
//     },
//   };
// };

export const Login = connect(mapLogin, mapDispatch)(Auth);
export const Signup = connect(mapSignup, mapDispatch)(Auth);
