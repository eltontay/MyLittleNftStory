import React from 'react';

function LiveAuction() {
  return (
    <div>
      <div className="h-screen p-6 grid grid-cols-4 gap-4 flex flex-col justify-center -mt-14">
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 place-self-center">
          Auction 1
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 place-self-center">
          Auction 2
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 place-self-center">
          Auction 3
        </div>
        <div className="justify-center h-5/6 w-full p-4 border border-black mx-auto px-4 row-span-4 place-self-center">
          Auction 4
        </div>
      </div>
    </div>
  );
}

export default LiveAuction;
