import React from 'react';

const Product = (props) => {
  const { name, price, imageUrl } = props.product;

  return (
    <div>
      <img src={imageUrl} className="image" />
      <h3>{name}</h3>
      <p>{price}</p>
      {/* TODO(Carina): check button type="button" OR "submit" */}
      <button type="button">ADD TO CART</button>
      {/* TODO(Carina): add onClick */}
      <button type="button" name="details">
        DETAILS
      </button>
    </div>
  );
};

export default Product;
