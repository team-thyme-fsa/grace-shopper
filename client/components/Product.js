import React from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../store/order';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { name, price, imageUrl, id } = props.product;
  const { addToOrder } = props;
  const { user } = props;

  const handleAddToCart = () => {
    addToOrder(user, { name: name, quantity: 1 });
  };

  return (
    <div className="product">
      <img src={imageUrl} className="image" />
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>

        <div className="buttons">
          {/* TODO(Carina): check button type="button" OR "submit" */}
          <button
            type="button"
            className="add-to-cart-button otl"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <div id="details-button">
            {/* TODO(Carina): add onClick */}
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
    addToOrder: (user, product) => dispatch(fetchOrder(user, product)),
  };
};

export default connect(mapState, mapDispatch)(Product);
