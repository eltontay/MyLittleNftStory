import React from 'react';

function Categories() {
  return (
    <div>
      <div className="flex p-6 font-bold text-xl">
        Discover Stories by Categories
      </div>
      <div className="grid grid-cols-5 gap-4 px-6">
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black">
          <div className="h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black">
          <div className="h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black">
          <div className="h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black">
          <div className="h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <div className="h-60 w-60 grid grid-rows-3 divide-y divide-black border border-black">
          <div className="h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <button className="my-6 col-start-3 border border-black w-full w-60 h-10 rounded-md font-bold font-lg">
          Explore Categories
        </button>
      </div>
    </div>
  );
}

export default Categories;
