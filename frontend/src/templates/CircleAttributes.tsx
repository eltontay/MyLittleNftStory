import React from 'react';

function CircleAttributes() {
  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-black px-6 space-y-20">
        <div>
          <div className=" grid grid-cols-5 gap-4 p-6 flex flex-col justify-center items-stretch flex items-center">
            <div className="relative rounded-full w-56 h-56 border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center">
              <div className="grid grid-rows-3 gap-2 grid-flow-col text-center flex flex-wrap">
                <div />
                <div className="text-5xl font-bold">12</div>
                <div className="text-xl font-medium">Live Auctions</div>
              </div>
            </div>
            <div className="relative rounded-full w-56 h-56 border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center">
              <div className="grid grid-rows-3 gap-2 grid-flow-col text-center flex flex-wrap">
                <div />
                <div className="text-5xl font-bold">24</div>
                <div className="text-xl font-medium">Future Auctions</div>
              </div>
            </div>
            <div className="relative rounded-full w-56 h-56 border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center">
              <div className="grid grid-rows-3 gap-2 grid-flow-col text-center flex flex-wrap">
                <div />
                <div className="text-5xl font-bold">360</div>
                <div className="text-xl font-medium">Bids placed in 24Hr</div>
              </div>
            </div>
            <div className="relative rounded-full w-56 h-56 border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center">
              <div className="grid grid-rows-3 gap-2 grid-flow-col text-center flex flex-wrap">
                <div />
                <div className="text-5xl font-bold">48</div>
                <div className="text-xl font-medium">Cardano Artists</div>
              </div>
            </div>
            <div className="relative rounded-full w-56 h-56 border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center">
              <div className="grid grid-rows-3 gap-2 grid-flow-col text-center flex flex-wrap">
                <div />
                <div className="text-5xl font-bold">1,260</div>
                <div className="text-xl font-medium">Stories Heard</div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default CircleAttributes;
