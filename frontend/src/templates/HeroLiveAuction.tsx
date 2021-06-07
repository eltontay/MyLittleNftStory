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
      <div className="h-screen p-6 grid grid-cols-4 gap-4 flex flex-col justify-center items-stretch ">
        <div className="justify-center w-full border border-grey mx-auto px-4 row-span-4 grid grid-cols-1 place-items-center filter hover:blur-lg">
          Auction 1
        </div>
        <div className="justify-center w-full border border-grey mx-auto px-4 row-span-4 grid grid-cols-1 place-items-center filter hover:blur-lg">
          Auction 2
        </div>
        <div className="justify-center w-full border border-grey mx-auto px-4 row-span-4 grid grid-cols-1 place-items-center filter hover:blur-lg">
          Auction 3
        </div>
        <div className="justify-center w-full border border-grey mx-auto px-4 row-span-4 grid grid-cols-1 place-items-center filter hover:blur-lg">
          Auction 4
        </div>
        <div className=" grid grid-cols-5 col-span-4 ">
          <button className="col-start-1 border border-black w-full h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            Past Auctions
          </button>
          <button className="col-start-3 border border-black w-full h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            Live Auctions
          </button>
          <button className="col-start-5 border border-black w-full h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            Future Auctions
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLiveAuction;
