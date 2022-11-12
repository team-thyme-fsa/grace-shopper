import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom';

const Auth = (props) => {
  const { name, handleSubmit, error } = props;

  let [authMode, setAuthMode] = useState('login');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };
  if (authMode === 'login') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit} name={name}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className=""
                placeholder="Enter email"
                required
              />
            </div>
            <div className="">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className=""
                placeholder="Enter password"
                required
              />
            </div>
            <div className="">
              <button type="submit" className="loginbtn">
                Submit
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
  //
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{' '}
            <span className="link-primary" onClick={changeAuthMode}>
              Log In
            </span>
          </div>
          <div className="">
            <label>First Name</label>
            <input
              name="lastName"
              type="firstName"
              className=""
              placeholder="e.g Jane"
              required
            />
          </div>
          <div className="">
            <label>Last Name</label>
            <input
              name="lastName"
              type="lastName"
              className=""
              placeholder="e.g Doe"
              required
            />
          </div>
          <div className="">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className=""
              placeholder="Email Address"
              required
            />
          </div>
          <div className="">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className=""
              placeholder="Password"
              required
            />
          </div>
          {/* <div className="">
            <label>Password</label>
            <input
              name="address"
              type="address"
              className=""
              placeholder="Password"
            />
          </div> */}
          <div className="">
            <button type="submit" className="loginbtn">
              Submit
            </button>
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
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      if (formName === 'login') {
        dispatch(authenticate(email, password, formName));
      } else {
        const firstName = evt.target.firstName.value;
        const lastName = evt.target.lastName.value;
        dispatch(authenticate(email, password, formName, firstName, lastName));
      }
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(Auth);
export const Signup = connect(mapSignup, mapDispatch)(Auth);
