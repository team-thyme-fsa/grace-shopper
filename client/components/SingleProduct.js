import React from 'react';

const SingleProduct = (props) => {
  const { name, type, description, price, imageUrl } = props.product;
  return (
    <div className='product'>
      <img src={imageUrl} />
      <p>{name}</p>
      <small>{type}</small>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}
