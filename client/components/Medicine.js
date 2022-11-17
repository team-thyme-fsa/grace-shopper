import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart';
import { Link } from 'react-router-dom';

const Medicine = (props) => {
  const { name, price, imageUrl, id } = props.product;
  const { addToOrder } = props;
  const { user } = props;

  const handleAddToCart = () => {
    addToOrder(user, {
      id: Number(id),
      name: name,
      quantity: 1,
      price: price,
      imageUrl: imageUrl,
    });
  };

  return (
    <div className="product">
      <img src={imageUrl} className="image" />
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>

        <div className="buttons">
          <button
            type="button"
            className="add-to-cart-button otl"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <div id="details-button">
            <Link to={`/products/${id}`}>
              <button
                type="button"
                name="details"
                className="details-button outl"
              >
                DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addToOrder: (user, product) => dispatch(addToCart(user, product)),
  };
};

export default connect(mapState, mapDispatch)(Medicine);
