import React from 'react';

const Product = (props) => {
  const { name, price, imageUrl } = props.product;

  return (
    <div className="product">
      <img src={imageUrl} className="image" />
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>

        <div className="buttons">
          {/* TODO(Carina): check button type="button" OR "submit" */}
          <button type="button">ADD TO CART</button>

          <div id="details-button">
            {/* TODO(Carina): add onClick */}
            <button type="button" name="details">
              DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
