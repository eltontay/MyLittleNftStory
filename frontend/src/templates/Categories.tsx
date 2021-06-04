import React from 'react';

function Categories() {
  return (
    <div>
      <div className="flex p-6">Discover Stories by Categories</div>
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
      </div>
    </div>
  );
}

export default Categories;
