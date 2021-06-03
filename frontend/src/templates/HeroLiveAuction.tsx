import React from 'react';

function HeroLiveAuction() {
  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-black px-6">
        <div>
          <div className="animate-pulse ">
            <div className="rounded-full bg-blue-700 h-2 w-2"></div>
          </div>
          <div className="flex pl-2">Live Auction</div>
        </div>
        <div />
      </div>
      <div className="h-screen p-6 grid grid-cols-4 gap-4 flex flex-col justify-center ">
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 grid grid-cols-1 items-stretch place-items-center ">
          Auction 1
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 grid grid-cols-1 items-stretch place-items-center ">
          Auction 2
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 grid grid-cols-1 items-stretch place-items-center ">
          Auction 3
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 grid grid-cols-1 items-stretch place-items-center ">
          Auction 4
        </div>
      </div>
    </div>
  );
}

export default HeroLiveAuction;
