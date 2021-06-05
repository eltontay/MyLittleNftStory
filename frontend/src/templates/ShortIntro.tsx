import React from 'react';

function ShortIntro() {
  return (
    <div className="h-screen flex p-6 grid grid-cols-1 divide-y divide-black">
      <div className="grid grid-cols-4 gap-x-8 flex flex-col">
        <div className="">
          <div className="text-3xl font-bold">For Artists</div>
        </div>
        <div className="">
          <div className="text-lg font-bold">We want to hear your story</div>
          <div className="text-lg font-medium">
            Every Artist has a story and if your Cardano NFT has a story, we
            want to hear it. Fill up the form and we will get in touch with you
            within 3 business days!
          </div>
        </div>
        <div className="">
          <div className="text-lg font-bold">We value your artwork</div>
          <div className="text-lg font-medium">
            We recognise the effort each artist has put into their Cardano NFT.
            That is why, listing is free! Except for the gas fees required to
            mint your transaction onto Cardano Blockchain.
          </div>
        </div>
        <div className="">
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
        <div className="h-1/6 grid grid-cols-5 col-span-4 flex flex-col content-center justify-center ">
          <div className="col-start-3 space-y-2">
            <button className="border border-black w-full h-10 rounded-md text-lg font-bold">
              Share Story!
            </button>
            <div className="text-center">Drop us an email!</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-8 flex flex-col pt-6">
        <div className="">
          <div className="text-lg font-bold">
            Collectors and Artists make NFT go round!
          </div>
          <div className="text-lg font-medium">
            Every Artist appreciates every Collector. Similarly, every Collector
            appreciates every Artist. Let’s support one another and make each
            story count!
          </div>
        </div>
        <div className="">
          <div className="text-lg font-bold">Looking to resell an NFT?</div>
          <div className="text-lg font-medium">
            Even a collector has a story. If you have a story for an NFT, share
            it with the world! Note that listing is not free for collectors.
          </div>
        </div>
        <div className="">
          <div className="text-lg font-bold">Bid for the story</div>
          <div className="text-lg font-medium">
            Create an account and start bidding! Escrow fee will be fixed at
            2.5% of total sale cost, subjected to future changes.
          </div>
        </div>
        <div className="">
          <div className="text-3xl font-bold">For Collectors</div>
        </div>
        <div className="h-1/6 grid grid-cols-5 col-span-4 ">
          <div className="col-start-3 space-y-2">
            <button className="border border-black w-full h-10 rounded-md text-lg font-bold">
              Start Bidding!
            </button>
            <div className="text-center ">Go to my account.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortIntro;
