import React from 'react';
import HeroSection from '../components/HeroSection';
import ImageSection from '../components/ImageSection';

const plates = () => {
  const plateItems = [
    { name: "Charger plate", price: "MWK 1200", image: 'images/plate/chag.jpg'},
    { name: "Dinner Plate", price: "MWK 1500", image: 'images/plate/din.jpg' },
    { name: "Dessert Plate", price: "MWK 2000", image: 'images/plate/pl.jpeg' },
    { name: "Bread Plate", price: "MWK 2000", image: 'images/plate/bre.jpg' },
    { name: "Paper Plate", price: "MWK 2000", image: 'images/plate/pap.jpg' },
    { name: "Salad Plates", price: "MWK 2000", image: 'images/plate/sal.png' },
    { name: "Soup Plate", price: "MWK 2000", image: 'images/plate/sm.jpg' },
  ];

  return (
    <div>
      <HeroSection />
      <ImageSection title="Featured Products" items={plateItems} />
    </div>
  );
};

export default plates;
