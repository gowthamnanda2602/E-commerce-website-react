import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import ProductsArray from '../Components/ProductsList/ProductsArray'
import Modal from '../Components/Modal'
import CartProducts from '../Components/Cart/CartProducts'
import CartContextProvider from '../Components/Context/CartContextProvider'
import "./ProductsPage.css"


function ProductsPage() {
  
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <React.Fragment>
      <CartContextProvider>
      {showCart && <Modal onCloseCart={hideCartHandler}> <CartProducts onCloseCart={hideCartHandler}/> </Modal>}         
      <Navbar onShowCart={showCartHandler} />
      <div className='products-container'> 
      <Title />
      <ProductsArray />
      </div>
      </CartContextProvider>
    </React.Fragment>
  )
}

export default ProductsPage;