import React from 'react';
import './NewCollections.css';
import all1 from '../Assets/basin/bidet.jpg';
import all2 from '../Assets/plate/din.jpg';
import all3 from '../Assets/basin/farm.jpg';
import all4 from '../Assets/plate/bre.jpg';
import all5 from '../Assets/cup/tum.jpg';


const cupsData = [
  { id: 1, image: all1, name: "Bidet Basin", price: "$5" },
  { id: 2, image: all2, name: "Dinner plate", price: "$8" },
  { id: 3, image: all3, name: "farm Basin", price: "$7" },
  { id: 4, image: all4, name: "Bread Plate", price: "$10" },
  { id: 5, image: all5, name: "Tumbler Cup", price: "$12" },
];

const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="newcollections-grid">
        {cupsData.map(all => (
          <div className="all-card" key={all.id}>
            <img src={all.image} alt={all.name} />
            <h3>{all.name}</h3>
            <p>{all.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
