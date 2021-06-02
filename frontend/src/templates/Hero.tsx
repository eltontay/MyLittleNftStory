import React from 'react';

function Hero() {
  return (
    <div>
      <div className="justify-center p-4 mx-4 border border-black flex items-stretch flex-col items-center grid lg:grid-rows-6 lg:grid-cols-4  grid-flow-col gap-4">
        <div className="justify-center h-screen w-full p-4 border border-black mx-auto px-4 row-span-full col-span-2 place-self-center">
          image
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 row-start-1 col-span-2 place-self-center ">
          title
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 col-span-2 place-self-center">
          Artist
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          Time Left
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          Current Bid
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          10,000 ADA
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          $18,000
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          Current Hodler
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          LittleHodler97
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          Bid
        </div>
        <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 place-self-center">
          Read Story
        </div>
      </div>
    </div>
  );
}

export default Hero;
