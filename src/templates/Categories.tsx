import React from 'react';

function Categories() {
  return (
    <div>
      <div className="flex p-6 font-bold text-xl">
        Discover Stories by Categories
      </div>
      <div className="grid grid-cols-5 gap-4 px-6">
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black rounded-md">
          <div className="px-2 flex flex-wrap content-center ">
            <div className=" font-bold text-lg">Art</div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black rounded-md">
          <div className="px-2 flex flex-wrap content-center ">
            <div className=" font-bold text-lg">Trading Cards</div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black rounded-md">
          <div className="px-2 flex flex-wrap content-center ">
            <div className=" font-bold text-lg">Collectibles</div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black rounded-md">
          <div className="px-2 flex flex-wrap content-center ">
            <div className=" font-bold text-lg">Sports</div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black rounded-md">
          <div className="px-2 flex flex-wrap content-center ">
            <div className=" font-bold text-lg">Utility</div>
          </div>
          <div className=""></div>
        </div>
        <button className="my-6 col-start-3 border border-black w-full w-60 h-10 rounded-md font-bold font-lg">
          Explore Categories
        </button>
      </div>
    </div>
  );
}

export default Categories;
