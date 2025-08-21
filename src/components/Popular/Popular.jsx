import React from 'react';
import './Popular.css';
import { useCart } from '../../Context/CartContext';

import cup1 from '../Assets/cup/beer.jpg';
import cup2 from '../Assets/cup/coffe.jpg';
import cup3 from '../Assets/cup/gls.jpg';
import cup4 from '../Assets/cup/mug.jpg';
import cup5 from '../Assets/cup/tum.jpg';
import cup6 from '../Assets/cup/disp.jpg';
import cup7 from '../Assets/cup/tea.jpg';
import cup8 from '../Assets/cup/travel.webp';
import cup9 from '../Assets/cup/mason.jpg';

const products = [
  { id: 1, image: cup1, name: "Beer Mug Cup", price: "MK5,000" },
  { id: 2, image: cup2, name: "Coffee Cup", price: "MK8,000" },
  { id: 3, image: cup3, name: "Glass Wine Cup", price: "MK7,000" },
  { id: 4, image: cup4, name: "Wood Handle Mug", price: "MK1,000" },
  { id: 5, image: cup5, name: "Tumbler Cup", price: "MK12,000" },
  { id: 6, image: cup6, name: "Disposable Cup", price: "MK6,000" },
  { id: 7, image: cup7, name: "Tea Cup", price: "MK9,000" },
  { id: 8, image: cup8, name: "Travel Cup", price: "MK6,000" },
  { id: 9, image: cup9, name: "Mason Jar Cup", price: "MK8,000" }
];

const Popular = () => {
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

export default Popular;
