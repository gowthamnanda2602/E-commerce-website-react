import React from "react";
import './CartProductsList.css';

const CartProductsList = (props) => {
  return (
    <li className="product-details">
      <div className="product-image">
      <img src={props.imageUrl} alt={props.title} width="70" />
      </div>
      <div className="product-info">
      <h1>{props.title}</h1>
      <p>Price: ${props.price}</p>
      <p>Quantity: {props.quantity}</p>
      </div>
    </li>
    );
};

export default CartProductsList;