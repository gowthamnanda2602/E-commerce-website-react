import React from 'react';
import CartProductsList from './CartProductsList';
import './CartProducts.css';

const CartProducts = (props) => {

    const products = [
           {
            id: 1,

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

            },

            {

            id: 2,

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

            },

            {

            id: 3,

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

         }
    ];

    const onCloseButtonClick = () => {
        props.onCloseCart();
    }

    return (
        <React.Fragment>
        <ul className='products'>
            {products.map(product => (
                <CartProductsList key={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    imageUrl={product.imageUrl}
                   />
            ))}
        </ul>
        <div className='purchase-button-container'>
        <button className='purchase-button'>purchase</button>
        </div>
        </React.Fragment>
    )
};

export default CartProducts;