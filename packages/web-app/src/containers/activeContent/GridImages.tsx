import React from 'react';
import CardsMonkeys from './CardsMonkeys';
import monkey1 from '../../public/nfts-image/image1.jpeg';
import monkey2 from '../../public/nfts-image/image2.jpeg';
import monkey3 from '../../public/nfts-image/image3.jpeg';
import monkey4 from '../../public/nfts-image/image4.jpeg';

// Grid of the new session with the images of the NFTs
function GridImages() {
  return (
    <div>
      <h1>Your NFTs</h1>

      <div className="grid grid-cols-2 p-2 w-3/6">
        <div className="grid grid-cols-2">
          <div className="grid gap-1 px-1">
            <CardsMonkeys image={monkey1} />
            <CardsMonkeys image={monkey1} />
          </div>
          <div className="grid gap-1 px-1">
            <CardsMonkeys image={monkey2} />
            <CardsMonkeys image={monkey2} />
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div className="grid gap-1 px-1">
            <CardsMonkeys image={monkey3} />
            <CardsMonkeys image={monkey3} />
          </div>
          <div className="grid gap-1 px-1">
            <CardsMonkeys image={monkey4} />
            <CardsMonkeys image={monkey4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridImages;
