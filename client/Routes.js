import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/Login';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import AllMedicine from './components/AllMedicine';
import AllPokeballs from './components/AllPokeballs';
import CheckoutPage from './components/CheckoutPage';
import AdminPanel from './components/AdminPanel';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, admin } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
            {admin ? <Route path="/admin" component={AdminPanel} /> : ''}
            <Route path="/cart" component={Cart} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/signup" component={Signup} /> */}
            <Route exact path="/" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route exact path="/medicine" component={AllMedicine} />
            <Route exact path="/pokeballs" component={AllPokeballs} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    admin: state.auth.admin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
