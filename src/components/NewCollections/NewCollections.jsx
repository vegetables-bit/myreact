import React from 'react';
import './NewCollections.css';
import { useCart } from '../../Context/CartContext';

import all1 from '../Assets/basin/bidet.jpg';
import all2 from '../Assets/plate/din.jpg';
import all3 from '../Assets/basin/farm.jpg';
import all4 from '../Assets/plate/bre.jpg';
import all5 from '../Assets/cup/tum.jpg';

const products = [
  { id: 1, image: all1, name: "Bidet Basin", price: 5500 },
  { id: 2, image: all2, name: "Dinner Plate", price: 8000 },
  { id: 3, image: all3, name: "Farm Basin", price: 7000 },
  { id: 4, image: all4, name: "Bread Plate", price: 10000 },
  { id: 5, image: all5, name: "Tumbler Cup", price: 12000 },
];

const NewCollections = () => {
  const { addToCart } = useCart();

  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="newcollections-grid">
        {products.map((item) => (
          <div className="all-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>MK{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
