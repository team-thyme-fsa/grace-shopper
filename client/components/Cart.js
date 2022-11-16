import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const Cart = (props) => {
  const { cart } = props
  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cart.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapState)(Cart)
