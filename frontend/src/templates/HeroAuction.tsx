import React from 'react';

function HeroAuction() {
  return (
    <div>
      <div className="h-screen">
        <div className="justify-center h-4/5 p-4 mx-4 border border-black flex items-stretch flex-col items-center grid lg:grid-rows-6 lg:grid-cols-4  grid-flow-col gap-4">
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 row-span-full col-span-2 grid grid-cols-1 items-stretch place-items-center">
            image
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 row-start-1 col-span-2 grid grid-cols-1 items-stretch place-items-center ">
            title
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 col-span-2 grid grid-cols-1 items-stretch place-items-center">
            Artist
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            Time Left
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            Current Bid
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            10,000 ADA
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            $18,000
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            Current Hodler
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            LittleHodler97
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            Bid
          </div>
          <div className="justify-center h-full w-full p-4 border border-black mx-auto px-4 grid grid-cols-1 items-stretch place-items-center">
            Read Story
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAuction;
