import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="navigation-bar">
    <nav id="navbar">
      <Link to="/">
        <button type="button" name="home">
          HOME
        </button>
      </Link>

      <Link to="/pokéballs">
        <button type="button" name="pokéballs">
          POKÉBALLS
        </button>
      </Link>

      <Link to="/medicine">
        <button type="button" name="medicine">
          MEDICINE
        </button>
      </Link>

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
          <Link to="/login">
            <button type="button" name="login">
              LOGIN
            </button>
          </Link>
        </div>
      )}
      <Link to="/cart">
        <button type="button" name="cart">
          🛒
        </button>
      </Link>
    </nav>
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
