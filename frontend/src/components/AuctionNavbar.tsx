import React from 'react';

function AuctionNavbar() {
  return (
    <div className="divide-y divide-black">
      <div className="flex flex-wrap content-between items-center justify-between gap-4 grid grid-cols-1 px-6 pb-2">
        <div className="grid grid-cols-3 border border-black">
          <div className="w-1/4 grid grid-cols-3 border border-black">
            <div className="border border-black">Live</div>
            <div className="border border-black">Upcoming</div>
            <div className="border border-black"> Past</div>
          </div>
          <div className="w-1/2 flex flex-grow grid grid-cols-6 border border-black">
            <div className="border border-black">All</div>
            <div className="border border-black">Art</div>
            <div className="border border-black">Trading Cards</div>
            <div className="border border-black">Collectibles</div>
            <div className="border border-black">Sports</div>
            <div className="border border-black">Games</div>
          </div>
          <div className="w-1/4 grid grid-cols-3 border border-black">
            <div className="border border-black">Hot</div>
            <div className="border border-black">New</div>
            <div className="border border-black">Ending</div>
          </div>
        </div>
      </div>
      <div className="" />
    </div>
  );
}

export default AuctionNavbar;
