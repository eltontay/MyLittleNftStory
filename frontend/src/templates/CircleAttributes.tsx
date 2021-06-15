import React from 'react';

function CircleAttributes() {
  return (
    <div>
      <div className="hidden md:block grid grid-cols-1 divide-y divide-black px-6 pt-16">
        <div />
        <div className=" flex relative grid grid-cols-5 py-16 justify-center items-stretch items-center ">
          <div className="mx-4 h-36 lg:h-48 w-36 lg:w-48 relative rounded-full border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center ">
            <div className="grid grid-rows-3 grid-flow-col text-center flex flex-wrap">
              <div />
              <div className="text-4xl lg:text-5xl font-bold">12</div>
              <div className="text-base lg:text-lg font-medium">
                Live Auctions
              </div>
            </div>
          </div>
          <div className="mx-4 h-36 lg:h-48 w-36 lg:w-48 relative rounded-full border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center ">
            <div className="grid grid-rows-3 grid-flow-col text-center flex flex-wrap">
              <div />
              <div className="text-4xl lg:text-5xl font-bold">24</div>
              <div className="text-base lg:text-lg font-medium">
                Future Auctions
              </div>
            </div>
          </div>
          <div className="mx-4 h-36 lg:h-48 w-36 lg:w-48 relative rounded-full border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center ">
            <div className="grid grid-rows-3 grid-flow-col text-center flex flex-wrap">
              <div />
              <div className="text-4xl lg:text-5xl font-bold">360</div>
              <div className="text-base lg:text-lg font-medium ">
                Bids placed
              </div>
            </div>
          </div>
          <div className="mx-4 h-36 lg:h-48 w-36 lg:w-48 relative rounded-full border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center ">
            <div className="grid grid-rows-3 grid-flow-col text-center flex flex-wrap">
              <div />
              <div className="text-4xl lg:text-5xl font-bold">48</div>
              <div className="text-base lg:text-lg font-medium">
                Cardano Artists
              </div>
            </div>
          </div>
          <div className="mx-4 h-36 lg:h-48 w-36 lg:w-48 relative rounded-full border border-black grid grid-cols-1 justify-center items-stretch flex items-center content-center ">
            <div className="grid grid-rows-3 grid-flow-col text-center flex flex-wrap">
              <div />
              <div className="text-4xl lg:text-5xl font-bold">1,260</div>
              <div className="text-base lg:text-lg font-medium">
                Stories Heard
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
