import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="navigation-bar">
    <nav id="navbar">
      <div>
        <Link to="/">
          <button
            type="button"
            name="home"
            className="button yellow-orange-color-wheel"
          >
            HOME
          </button>
        </Link>

        <Link to="/pokéballs">
          <button type="button" name="pokéballs" className="btn pokéballs">
            POKÉBALLS
          </button>
        </Link>

        <Link to="/medicine">
          <button
            type="button"
            name="medicine"
            className="button yellow-orange-color-wheel"
          >
            MEDICINE
          </button>
        </Link>
      </div>

      <div className="logo">
        {/*<h1>PokéMart</h1>*/}
        <img src="Logo.png" alt="PokéMart logo" width="90px" height="90px" />
      </div>

      <div>
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
              <button type="button" name="login" className="btn login">
                LOGIN
              </button>
            </Link>
          </div>
        )}
        <Link to="/cart">
          <button type="button" name="cart" className="button inchworm">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: '#061623' }}
            />
          </button>
        </Link>
      </div>
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
