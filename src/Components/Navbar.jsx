import React from 'react';
import './Navbar.css';


 const Navbar = (props) => {

  const onCartButtonClick = () => {
    console.log("cart button clicked");
    props.onShowCart();
  }

  return (
    <div className='navbar'>
      <div className='nav-links'>
        <h2>H0ME</h2>
        <h2>STORE</h2>
        <h2>ABOUT</h2>
      </div>
        <button className='cart-button' onClick={onCartButtonClick}>cart</button>
    </div>
  );
}

export default Navbar;