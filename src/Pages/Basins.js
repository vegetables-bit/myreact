import React from 'react';
import HeroSection from '../components/HeroSection';
import ImageSection from '../components/ImageSection';

const Basins = () => {
  const basinItems = [
    { name: "Bidet Basin", price: "MWK 80,000", image: 'images/basin/bidet.jpg' },
    { name: "Decorative Basin", price: "MWK 130,000", image: 'images/basin/deco.jpg' },
    { name: "Farmhouse Basin", price: "MWK 10,900", image: 'images/basin/farm.jpg' },
    { name: "Laboratory Basin", price: "MWK 10,000", image: 'images/basin/labo.jpg' },
    { name: "Kitchen Basin", price: "MWK 55,000", image: 'images/basin/kitch.jpg' },
    { name: "Pedestal Basin", price: "MWK 78,000", image: 'images/basin/pedes.jpg' },
    { name: "Wash Basin", price: "MWK 90,000", image: 'images/basin/wash.jpg' },
  ];

  return (
    <div>
      <HeroSection />
      <ImageSection title="Featured Products" items={basinItems} />
    </div>
  );
};

export default Basins;
