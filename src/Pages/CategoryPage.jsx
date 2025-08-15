import React from 'react';
import { all_products } from '../components/Assets/allproducts';

const CategoryPage = ({ category }) => {

  const filteredProducts = all_products.filter(
    (product) => product.category === category
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textTransform: 'capitalize' }}>{category}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {filteredProducts.map((product, index) => (
          <div key={index} style={{ textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;