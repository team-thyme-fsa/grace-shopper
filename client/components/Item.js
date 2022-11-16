import React from 'react';

const Item = (props) => {
  const { id, name, price, quantity} = props.product;

  return (
    <div>
      <div className="product-info">
        <h3>{name}</h3>
        <img src="Pokémon Dollar.png" alt="Pokémon dollar sign" width="12px" />
        <p className="price">{price}</p>
      </div>
      <div>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  )
}

export default Item
