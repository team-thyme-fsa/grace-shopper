import React from 'react';
import { useState, useEffect } from 'react';
import { updateQty } from '../store/cart';
import { connect } from 'react-redux';
import { removeItem } from '../store/cart';

const Item = (props) => {
  const { name, price, quantity, imageUrl} = props.product;
  const { user } = props
  const { updateQty, removeItem } = props
  const [qty, setQty] = useState(quantity);
  const increaseQuantity = () => {
    setQty(qty + 1)
  }

  useEffect(() => {
    updateQty(user, { ...props.product, quantity: qty})
  }, [qty]);

  const decreaseQuantity = () => {
    if(qty > 1)
    setQty(qty - 1)
  }

  const remove_item = () => {
    removeItem(user, { ...props.product })
  }

  return (
    <div className='single-product'>
      <img src={imageUrl} className='image' />
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>
      <div>
        <span>
          <p>Qty: {qty}</p>
          <span>
            <div id= "decrease-button">
              <button
                type="button"
                name="decrease"
                className="decrease-button outl"
                onClick={decreaseQuantity}
              >
                -
              </button>
            </div>
            <div id= "increase-button">
              <button
                type="button"
                name="increase"
                className="increase-button outl"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <div id= "delete-button">
              <button
                type="button"
                name="delete"
                className="delete-button outl"
                onClick={remove_item}
              >
                Remove
              </button>
            </div>
          </span>
        </span>
      </div>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    products: state.products,
    user: state.auth
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateQty: (user, product) => dispatch(updateQty(user, product)),
    removeItem: (user, product) => dispatch(removeItem(user, product)),
  }
}

export default connect(mapState, mapDispatch)(Item)
