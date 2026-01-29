import React,{useContext} from "react";
import './List.css';
import CartContext from "../Context/CartContext";

const List = (props) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (e) => {
        e.preventDefault();
        const quantity = e.target[0].value;
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl,
            quantity: +quantity
        });
    };

    return (
        <li>
            <div className="product-title">
            <h3>{props.title}</h3>
            </div>
            <img src={props.imageUrl} alt={props.title} />
            <div className="price-button">
            <p>Price: ${props.price}</p>
            <form onSubmit={addToCartHandler}>
                <label htmlFor="quantity-input">Qty: </label>
            <input id="quantity-input" type="number" step="1" min="1" max="5" defaultValue="1" />
            <button type="submit" className="add-to-cart">Add to Cart</button>
            </form>
            </div>
        </li>
    );
};

export default List;