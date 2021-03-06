import React from 'react';
import Image1 from '../assets/Testing1.jpeg';

/*
 7 June Elton - Need to do responsive edits especially for text overlay
*/

function HeroAuction() {
  var img = document.getElementById(Image1);

  return (
    <div>
      <div className="h-screen">
        <div className="flex relative justify-center h-4/5  mx-6 items-stretch items-center grid grid-rows-6 grid-cols-4 grid-flow-col gap-4 ">
          <div className="flex relative justify-self-center items-center h-full w-full p-4 px-4 row-span-full col-span-full lg:col-span-2">
            <img
              className="absolute inset-0 h-full object-contain"
              src={Image1}
            ></img>
            <div className="absolute inset-0 h-full opacity-0 transition-all duration-150 hover:opacity-100 backdrop-filter hover:backdrop-blur-md hover:backdrop-brightness-200 ">
              <p className="absolute inset-0 h-full font-medium text-lg break-words px-2 overflow-ellipsis overflow-hidden">
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing testing
                testing testing testing testing testing testing testing Testing
                testingareallylongwordtomakesurethatittruncatesorthatitdoesntextendallthewaytestingareallylongwordtomakesurethatittruncatesorthatitdoesntextendalltheway
              </p>
            </div>
          </div>
          <div className="hidden lg:block flex flex-wrap items-center h-full w-full p-4 mx-auto px-4 text-3xl font-bold capitalize lg:col-span-2 ">
            <p className="overflow-ellipsis overflow-hidden">
              A Super Cool Sword That Sean Created Sia
            </p>
          </div>
          <div className="hidden lg:block inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2 lg:col-span-2">
            <p className="w-1/4 inline-block ">Artist</p>
            <p className="w-3/4 inline-block ">: Sean Chua</p>
          </div>
          <div className="hidden lg:block inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2 lg:col-span-2">
            <p className="w-1/4 inline-block ">Time Left</p>
            <p className="w-3/4 inline-block ">: 1 day 1 min 1 second</p>
          </div>
          <div className="hidden lg:block inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2 lg:col-span-2">
            <p className="w-1/4 inline-block ">Current Hodler</p>
            <p className="w-3/4 inline-block ">: Aizhan</p>
          </div>
          <div className="hidden lg:block inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2 lg:col-span-2">
            <p className="w-1/4 inline-block ">Current Bid</p>
            <p className="w-3/4 inline-block ">: 10,000 ADA (~$18,000)</p>
          </div>
          <button className="hidden lg:block flex col-span-2 lg:col-span-1 flex rounded-md border border-black font-bold text-2xl capitalize hover:bg-black hover:text-white lg:col-span-1">
            <p>Bid</p>
          </button>
          <button className="hidden border border-black lg:block flex items-center w-full p-4 mx-auto px-4 rounded-md font-bold text-xl capitalize hover:bg-black hover:text-white lg:col-span-1">
            Read Story
          </button>
        </div>
        <div className="sm:pt-4 block md:hidden flex flex-col grid-rows-6 px-6 justify-center p-2 ">
          <p className="mb-4 px-4 text-center font-bold overflow-ellipsis overflow-hidden text-2xl">
            A Super Cool Sword That Sean Created Sia
          </p>
          <div className="flex-wrap grid grid-cols-2 inline-block p-2">
            <p className="inline-block mx-8 text-xl">Artist</p>
            <p className="inline-block mx-8 text-xl">: Sean Chua</p>
          </div>
          <div className=" flex-wrap grid grid-cols-2 inline-block p-2">
            <p className="inline-block mx-8 text-xl">Time Left</p>
            <p className="inline-block mx-8 text-xl">: 1 day 1 min 1 second</p>
          </div>
          <div className="flex-wrap grid grid-cols-2 inline-block p-2">
            <p className="inline-block mx-8 text-xl">Current Hodler</p>
            <p className="inline-block mx-8 text-xl">: Aizhan</p>
          </div>
          <div className="flex-wrap grid grid-cols-2 inline-block p-2">
            <p className="inline-block mx-8 text-xl">Current Bid</p>
            <p className="inline-block mx-8 text-xl">: 10,000 ADA (~$18,000)</p>
          </div>
          <div className="flex-wrap grid grid-cols-2 inline-block p-2">
            <button className="rounded-md border border-black text-xl font-bold capitalize hover:bg-black hover:text-white lg:col-span-1 mx-8">
              <p>Bid</p>
            </button>
            <button className="rounded-md border border-black text-xl font-bold capitalize hover:bg-black hover:text-white lg:col-span-1 mx-8">
              <p>Read Story</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAuction;
