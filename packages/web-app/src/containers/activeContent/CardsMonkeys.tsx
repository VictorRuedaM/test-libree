import React from 'react';

interface ImageProps {
  image: string;
}
// Component that creates the cards with the images
function CardsMonkeys({image}: ImageProps) {
  return (
    <div>
      <img
        src={image}
        alt="nft image"
        className="h-16 max-w-full rounded-xl shadow transform  transition duration-300 hover:scale-125"
      />
    </div>
  );
}

export default CardsMonkeys;
