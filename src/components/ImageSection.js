import React from 'react';

const ImageSection = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} width="200" />
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
