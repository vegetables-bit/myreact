import React from 'react';
import HeroSection from '../components/HeroSection';
import ImageSection from '../components/ImageSection';

const Cups = () => {
  const cupItems = [
    { name: "Wine Cup", price: "MWK 500", image: 'images/cup/beer.jpg' },
    { name: "Coffee Mug", price: "MWK 700", image: 'images/cup/coffe.jpg' },
    { name: "Disposable Cup", price: "MWK 600", image: 'images/cup/disp.jpg' },
    { name: "Glass Cup", price: "MWK 600", image: 'images/cup/gls.jpg' },
    { name: "Mason Cup", price: "MWK 600", image: 'images/cup/mason.jpg' },
    { name: "Beer Mug Cup", price: "MWK 600", image: 'images/cup/mug.jpg' },
    { name: "Short Glass Cup", price: "MWK 600", image: 'images/cup/sht.jpg' },
    { name: "Travel Mug Cup", price: "MWK 600", image: 'images/cup/travel.webp' },
  ];

  return (
    <div>
      <HeroSection />
      <ImageSection title="Featured Products" items={cupItems} />
    </div>
  );
};

export default Cups;
