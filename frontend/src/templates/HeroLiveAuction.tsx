import React from 'react';
import Image2 from '../assets/Testing2.jpeg';
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
      <div className="h-screen p-6 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-4 flex flex-col flex-wrap justify-center items-stretch ">
        <div className="relative h-full w-full border border-grey mx-auto px-4 lg:row-span-full grid grid-cols-1 place-items-center ">
          <img className="absolute h-full object-contain" src={Image2}></img>
          <div className="absolute h-full w-full flex justify-center place-items-center opacity-0 transition-all duration-150 hover:opacity-100 backdrop-filter hover:backdrop-blur-lg hover:backdrop-brightness-200">
            <p className="absolute h-full w-full font-medium text-center text-lg break-words px-2 overflow-ellipsis overflow-hidden">
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              {/* testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing */}
            </p>
          </div>
        </div>
        <div className="relative h-full w-full border border-grey mx-auto px-4 lg:row-span-full grid grid-cols-1 place-items-center ">
          <img className="absolute h-full object-contain" src={Image2}></img>
          <div className="absolute h-full w-full flex justify-center place-items-center opacity-0 transition-all duration-150 hover:opacity-100 backdrop-filter hover:backdrop-blur-lg hover:backdrop-brightness-200">
            <p className="absolute h-full w-full font-medium text-center text-lg break-words px-2 overflow-ellipsis overflow-hidden">
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              {/* testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing */}
            </p>
          </div>
        </div>
        <div className="relative h-full w-full border border-grey mx-auto px-4 lg:row-span-full grid grid-cols-1 place-items-center ">
          <img className="absolute h-full object-contain" src={Image2}></img>
          <div className="absolute h-full w-full flex justify-center place-items-center opacity-0 transition-all duration-150 hover:opacity-100 backdrop-filter hover:backdrop-blur-lg hover:backdrop-brightness-200">
            <p className="absolute h-full w-full font-medium text-center text-lg break-words px-2 overflow-ellipsis overflow-hidden">
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              {/* testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing */}
            </p>
          </div>
        </div>
        <div className="relative h-full w-full border border-grey mx-auto px-4 lg:row-span-full grid grid-cols-1 place-items-center ">
          <img className="absolute h-full object-contain" src={Image2}></img>
          <div className="absolute h-full w-full flex justify-center place-items-center opacity-0 transition-all duration-150 hover:opacity-100 backdrop-filter hover:backdrop-blur-lg hover:backdrop-brightness-200">
            <p className="absolute h-full w-full font-medium text-center text-lg break-words px-2 overflow-ellipsis overflow-hidden">
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              {/* testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing */}
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-5 col-span-full ">
          <button className="col-start-1 border border-black w-full h-full md:h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            <p className="text-center">Past Auctions</p>
          </button>
          <button className="col-start-3 border border-black w-full h-full md:h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            Live Auctions
          </button>
          <button className="col-start-5 border border-black w-full h-full md:h-10 rounded-md font-bold text-lg hover:bg-black hover:text-white">
            Future Auctions
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLiveAuction;
