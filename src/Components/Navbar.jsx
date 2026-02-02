import React,{useContext} from 'react';
import './Navbar.css';
import CartContext from './Context/CartContext';


 const Navbar = (props) => {

  const cartCtx = useContext(CartContext);
  const itemsInCart = cartCtx.items.length;

  const onCartButtonClick = () => {
    props.onShowCart();
  }

  return (
    <div className='navbar'>
        <button className='cart-button' onClick={onCartButtonClick}>
          <span>Cart Items</span>
          <span className='cart-count'>{itemsInCart}</span>
        </button>
    </div>
  );
}

export default Navbar;