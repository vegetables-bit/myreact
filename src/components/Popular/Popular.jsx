import React from 'react';
import './Popular.css';
import cup1 from '../Assets/cup/beer.jpg';
import cup2 from '../Assets/cup/coffe.jpg';
import cup3 from '../Assets/cup/gls.jpg';
import cup4 from '../Assets/cup/mug.jpg';
import cup5 from '../Assets/cup/tum.jpg';
import cup6 from '../Assets/cup/disp.jpg';
import cup7 from '../Assets/cup/tea.jpg';
import cup8 from '../Assets/cup/travel.webp';
import cup9 from '../Assets/cup/mason.jpg';

const cupsData = [
  { id: 1, image: cup1, name: "Beer Mug Cup", price: "$5" },
  { id: 2, image: cup2, name: "Coffee Cup", price: "$8" },
  { id: 3, image: cup3, name: "Glass Wine Cup", price: "$7" },
  { id: 4, image: cup4, name: "Wood Handle Mug", price: "$10" },
  { id: 5, image: cup5, name: "Tumbler Cup", price: "$12" },
  { id: 6, image: cup6, name: "Disposable Cup", price: "$6" },
  { id: 7, image: cup7, name: "Tea Cup", price: "$9" },
  { id: 8, image: cup8, name: "Travel Cup", price: "$6" },
  { id: 9, image: cup9, name: "Mason Jar Cup", price: "$8" }
];

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR CUPS</h1>
      <hr />
      <div className="popular-grid">
        {cupsData.map(cup => (
          <div className="cup-card" key={cup.id}>
            <img src={cup.image} alt={cup.name} />
            <h3>{cup.name}</h3>
            <p>{cup.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
