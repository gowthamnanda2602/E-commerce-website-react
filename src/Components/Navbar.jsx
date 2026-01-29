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
      <div className='nav-links'>
        <h2>H0ME</h2>
        <h2>STORE</h2>
        <h2>ABOUT</h2>
      </div>
        <button className='cart-button' onClick={onCartButtonClick}>
          <span>Cart Items</span>
          <span className='cart-count'>{itemsInCart}</span>
        </button>
    </div>
  );
}

export default Navbar;