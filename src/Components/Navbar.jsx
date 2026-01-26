import React from 'react';
import './Navbar.css';


 const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <h2>H0ME</h2>
        <h2>STORE</h2>
        <h2>ABOUT</h2>
      </div>
      <div className='nav-cart'>
        <button>cart</button>
    </div>
    </div>
  );
}

export default Navbar;