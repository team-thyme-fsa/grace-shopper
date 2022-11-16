import React from 'react';
import { connect } from 'react-redux';
import { fetchProd } from '../store';
import { addToCart } from '../store/cart';

const SingleProduct = (props) => {
  const { product } = props.products;
  const { user } = props;
  const { addToOrder } = props;
  console.log(props)
  const { name, type, description, price, imageUrl } = product;
  const { id } = props.match.params;
  const { fetchProd } = props;

  const handleAddToCart = () => {
    addToOrder(user, { id: Number(id), name: name, quantity: 1, price: price, imageUrl: imageUrl });
  }

  React.useEffect(() => {
    fetchProd(id)
  }, []);

  return (
    <div className='single-product'>
      <img src={imageUrl} className='image' />
      <div className='product-info'>
        <h3>{name}</h3>
          <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
          <p className="price">{price}</p>
          <div>
            <p>{description}</p>
          </div>
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
              <button
                type="button"
                name="details"
                className="details-button outl"
              >
                DETAILS
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProd: (id) => dispatch(fetchProd(id)),
    addToOrder: (user, product) => dispatch(addToCart(user, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
