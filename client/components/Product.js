import React from 'react';

const Product = (props) => {
  const { product } = props;

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <img src={product.imageUrl} />
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
