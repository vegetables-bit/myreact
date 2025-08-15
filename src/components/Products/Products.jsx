import React from 'react';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.new_price}</p>
          </div>
        ))
      ) : (
        <p className="no-products">No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;
