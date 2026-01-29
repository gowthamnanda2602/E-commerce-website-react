import React,{useContext} from "react";
import './CartProductsList.css';
import CartContext from "../Context/CartContext";

const CartProductsList = (props) => {

  const cartCtx = useContext(CartContext);

  const editQuantityHandler = (e) => {
    e.preventDefault();
    const newQuantity = e.target[0].value;
    cartCtx.editItem({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: +newQuantity
    });
  }

  const deleteItemHandler = () => {
    cartCtx.removeItem(props);
  };

  return (
    <li className="product-details">
      <div className="product-image">
      <img src={props.imageUrl} alt={props.title} width="70" />
      </div>
      <div className="product-info">
      <h1>{props.title}</h1>
      <p>Price: ${props.price}</p>
      <p>Quantity: {props.quantity} x {props.price} = ${props.quantity * props.price}</p>
      </div>
      <div className="product-actions">
      <form onSubmit={editQuantityHandler} className="edit-quantity-form">
        <div className="edit-quantity-input">
        <label htmlFor="edit-quantity">Change Qty: </label>
        <input id="edit-quantity" type="number" step="1" min="1" max="5" defaultValue={props.quantity} />
        </div>
        <div className="edit-quantity-button">
      <button type="submit" className="submit-button">submit</button>
      </div>
      </form>
      <div className="delete-button-container">
      <button onClick={deleteItemHandler} className="delete-button">delete</button>
      </div>
      </div>
    </li>
    );
};

export default CartProductsList;