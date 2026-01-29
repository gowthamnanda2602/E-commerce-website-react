import React from "react";
import List from "./List";
import './ProductsArray.css';

const ProductsArray = () => {
  const products = [
     {
        id: 'p1',

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {
          id: 'p2',

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
          id: 'p3',

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
          id: 'p4',

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

        ];

        const productsList = ( <div className="productslist-container">
          <ul className="products-list">{products.map((product) => (
          <List key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          />
        ))}</ul>
        </div> );


    return productsList;


}

export default ProductsArray;