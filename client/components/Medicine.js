import React from 'react';

const Medicine = (props) => {
  const { name, price, imageUrl } = props.product;

  return (
    <div className="product">
      <img src={imageUrl} className="image" />
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>

        <div className="buttons">
          <button type="button" className="add-to-cart-button otl">
            ADD TO CART
          </button>

          <div id="details-button">
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

export default Medicine;
