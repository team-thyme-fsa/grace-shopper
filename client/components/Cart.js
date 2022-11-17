import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { useEffect } from 'react';
import { fetchCart } from '../store/cart';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { cart, user, fetchCart } = props;

  useEffect(() => {
    console.log('TEST');
    fetchCart(user);
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cart.map((product) => (
          <Item
            product={product}
            key={product.id ? product.id : product.productId}
          />
        ))}
      </div>
      <div className="address-form-container">
        <form>
          <label>Shipping Address</label>
          <input
            name="shipping-address"
            type="text"
            defaultValue={user.address}
          />
          <label>Billing Address</label>
          <input
            name="billing-address"
            type="text"
            defaultValue={user.address}
          />
          <Link to="/checkout">
            <button type="order">Checkout</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    cart: state.cart,
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCart: (user) => dispatch(fetchCart(user)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
