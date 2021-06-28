import React from 'react';

/*
  need help with the middle part of the navbar, look at figma for details
  test commit
*/

function ArtistSearchBar() {
  return (
    <div
    className="bg-white flex items-center p-3 shadow-sm border border-black-200 w-1/3 mx-auto mt-8 rounded"
>
    <button className="outline-none focus:outline-none">
        <svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
    </button>
    <input 
    placeholder="Search For Artist"
    className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
    />
</div>
   
  );
}

export default ArtistSearchBar;
