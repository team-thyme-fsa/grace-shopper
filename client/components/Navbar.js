import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav id="navbar">
      <Link to="/">HOME</Link>
      <Link to="/pokéballs">POKÉBALLS</Link>
      <Link to="/medicine">MEDICINE</Link>
      <h1>PokéMart</h1>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show this link after you log in */}
          <a href="#" onClick={handleClick}>
            LOGOUT
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show this link before you log in */}
          <Link to="/login">LOGIN</Link>
        </div>
      )}

      <Link to="/cart">🛒</Link>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
