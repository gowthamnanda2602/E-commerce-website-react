import React,{useContext} from 'react';
import CartProductsList from './CartProductsList';
import './CartProducts.css';
import CartContext from "../Context/CartContext";

const CartProducts = (props) => {

    const cartCtx = useContext(CartContext);
    const products = cartCtx.items;
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice = totalPrice + (product.price * product.quantity);
    });

    const onCloseButtonClick = () => {
        props.onCloseCart();
    }

    return (
        <React.Fragment>
        <ul className='products'>
            {products.map(product => (
                <CartProductsList key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    imageUrl={product.imageUrl}
                   />
            ))}
        </ul>
        <div className='purchase-button-container'>
        <p>Total price = ${totalPrice}</p>
        <button className='purchase-button'>purchase</button>
        </div>
        </React.Fragment>
    )
};

export default CartProducts;