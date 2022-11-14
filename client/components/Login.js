import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';

const Auth = (props) => {
  const { name, handleSubmit, error } = props;

  let [authMode, setAuthMode] = useState('login');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };
  if (authMode === 'login') {
    return (
      <div className="login-form-container">
        <form className="Auth-form" onSubmit={handleSubmit} name={name}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?
              <span className="switch" onClick={changeAuthMode}>
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
            <div className="user-box">
              <button type="submit" className="loginbtn">
                Login
              </button>
            </div>
            <br></br>
            <br></br>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <img
          src="https://wallpaper.dog/large/10810019.jpg"
          className="login-img"
        ></img>
      </div>
    );
  }

  return (
    <div className="signup-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?
            <span className="switch" onClick={changeAuthMode}>
              Log In
            </span>
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
            <label>Address</label>
            <input name="address" className="user-box" placeholder="Address" />
          </div>
          <div>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <img
        className="signup-img"
        src="https://www.itl.cat/pngfile/big/130-1302719_wallpaper-pokemon.jpg"
      ></img>
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
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      if (formName === 'login') {
        dispatch(authenticate(email, password, formName));
      } else {
        let firstName = evt.target.firstName.value;
        let lastName = evt.target.lastName.value;
        let address = evt.target.address.value;
        dispatch(
          authenticate(email, password, formName, firstName, lastName, address),
          (firstName = ''),
        );
      }
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(Auth);
export const Signup = connect(mapSignup, mapDispatch)(Auth);
