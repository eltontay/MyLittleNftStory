import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function ShortIntro() {
  return (
    <div>
      <div className="divide-y divide-black md:divide-transparent px-6 pt-6">
        <div />
        <div />
      </div>
      <div className="md:h-screen flex p-6 grid grid-cols-1 divide-y divide-black ">
        <div className="h-screen md:h-full grid grid-rows-5 md:grid-rows-1 grid-cols-1 md:grid-cols-4 gap-x-8 flex flex-col pt-6">
          <div className="">
            <div className="text-3xl font-bold">For Artists</div>
          </div>
          <div className="-mt-16 md:m-0">
            <div className="text-lg font-bold">We want to hear your story</div>
            <div className="text-lg font-medium">
              Every Artist has a story and if your Cardano NFT has a story, we
              want to hear it. Fill up the form and we will get in touch with
              you within 3 business days!
            </div>
          </div>
          <div className="-mt-16 md:m-0">
            <div className="text-lg font-bold">We value your artwork</div>
            <div className="text-lg font-medium">
              We recognise the effort each artist has put into their Cardano
              NFT. That is why, listing is free! Except for the gas fees
              required to mint your transaction onto Cardano Blockchain.
            </div>
          </div>
          <div className="-mt-8 md:m-0">
            <div className="text-lg font-bold">
              We want to provide you this space
            </div>
            <div className="text-lg font-medium">
              MyLittleNftStory recognises the difficulties faced by Cardano
              Artists in getting their NFT out in the market. That is why, our
              vision is to provide a little space for Cardano Artists to share
              their stories with the world.
            </div>
          </div>
          <div className="h-1/6 grid grid-cols-3 md:grid-cols-5 col-span-full ">
            <div className="flex flex-col justify-center col-start-2 md:col-start-3 space-y-2">
              <button className="border border-black w-full h-10 rounded-md text-lg font-bold hover:bg-black hover:text-white">
                <p>Share Story!</p>
              </button>
              <div className="text-center">
                Drop us an &nbsp;
                <RouterLink
                  to="/Register"
                  className="font-bold underline hover:text-gray-700 -ml-1"
                >
                  email
                </RouterLink>
                !
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen md:h-full grid grid-rows-5 md:grid-rows-1 grid-cols-1 md:grid-cols-4 gap-x-8 flex flex-col pt-6">
          <div className="-mt-12 md:m-0">
            <div className="text-lg font-bold">
              Collectors and Artists make NFT go round!
            </div>
            <div className="text-lg font-medium">
              Every Artist appreciates every Collector. Similarly, every
              Collector appreciates every Artist. Let’s support one another and
              make each story count!
            </div>
          </div>
          <div className="-mt-12 md:m-0">
            <div className="text-lg font-bold">Looking to resell an NFT?</div>
            <div className="text-lg font-medium">
              Even a collector has a story. If you have a story for an NFT,
              share it with the world! Note that listing is not free for
              collectors.
            </div>
          </div>
          <div className="-mt-12 md:m-0">
            <div className="text-lg font-bold">Bid for the story</div>
            <div className="text-lg font-medium">
              Create an account and start bidding! Escrow fee will be fixed at
              2.5% of total sale cost, subjected to future changes.
            </div>
          </div>
          <div className="order-first md:order-none pt-4 md:p-0">
            <div className="text-3xl font-bold">For Collectors</div>
          </div>
          <div className="h-1/6 grid grid-cols-3 md:grid-cols-5 col-span-full ">
            <div className="flex flex-col justify-center col-start-2 md:col-start-3 space-y-2">
              <button className="border border-black w-full h-10 rounded-md text-lg font-bold hover:bg-black hover:text-white">
                Start Bidding!
              </button>
              <div className="text-center ">
                Go to my &nbsp;
                <RouterLink
                  to="/Register"
                  className="font-bold underline hover:text-gray-700 -ml-1"
                >
                  account.
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortIntro;
