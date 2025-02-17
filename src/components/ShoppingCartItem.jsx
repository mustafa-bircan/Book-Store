import React, { useContext } from 'react';
import { ScCartItem, ScCartItemDetails } from './scParts';
import { CartContext } from '../contexts/CartContext';

const Item = ({ id, image, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <ScCartItem>
      <img src={image} alt={`${title} book`} />

      <ScCartItemDetails>
        <h2>{title}</h2>
        <p>$ {price} x {quantity}</p>
        <button onClick={() => removeItem(id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
