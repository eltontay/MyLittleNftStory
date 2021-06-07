import React from 'react';
import Image1 from '../assets/Testing1.jpeg';

function HeroAuction() {
  return (
    <div>
      <div className="h-screen">
        <div className="justify-center h-4/5 p-4 mx-4 flex items-stretch items-center grid lg:grid-rows-6 lg:grid-cols-4  grid-flow-col gap-4">
          <div className="justify-center relative flex items-center h-full w-full p-4 mx-auto px-4 row-span-full col-span-2 filter hover:blur-lg ">
            <img
              className="absolute h-full object-contain z-0 filter"
              src={Image1}
            ></img>
            {/*             
            <p className="absolute inset-0 flex justify-center items-center text-lg break-all  z-10">
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
              testing testing testing testing testing testing testing
              testingtestingtestingtestingtestingtestgintesaddwadawdawdawdasdasdfaefafdawdawfdawfawdsadasasdsas
            </p> */}
          </div>
          <div className="justify-center flex flex-wrap items-center h-full w-full p-4 mx-auto px-4 row-start-1 col-span-2 text-3xl font-bold capitalize">
            A Super Cool Sword That Can Wield As a Dildo Pew pew pew
          </div>
          <div className="justify-center flex flex-wrap items-center h-full w-full p-4 mx-auto px-4 col-span-2 text-2xl font-medium capitalize">
            Sean Chua
          </div>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2">
            <p>Time Left</p>
            <p>:</p>
          </div>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2">
            <p>Current Hodler</p>
            <p>:</p>
          </div>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize grid grid-cols-2">
            <p>Current Bid</p>
            <p>:</p>
          </div>
          <button className="justify-center border border-black flex items-center h-10 w-full p-4 mx-auto px-4 rounded-md font-bold text-xl capitalize hover:bg-black hover:text-white">
            Bid
          </button>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize">
            1 day 10 mins 20 seconds
          </div>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize">
            LittleHodler97
          </div>
          <div className="inline-block flex flex-wrap h-full w-full p-4 mx-auto px-4 text-xl font-medium capitalize">
            10,000 ADA (~$18,000)
          </div>
          <button className="justify-center border border-black flex items-center h-10 w-full p-4 mx-auto px-4 rounded-md font-bold text-xl capitalize hover:bg-black hover:text-white">
            Read Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroAuction;
