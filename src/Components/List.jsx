import React from "react";
import './List.css';

const List = (props) => {
    return (
        <li>
            <div className="product-title">
            <h3>{props.title}</h3>
            </div>
            <img src={props.imageUrl} alt={props.title} />
            <div className="price-button">
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
            </div>
        </li>
    );
};

export default List;