import React from 'react';

function ShortIntro() {
  return (
    <div className="h-screen flex p-6 grid grid-cols-1 ">
      <div className="h-3/4 grid grid-cols-4 gap-4 flex flex-col">
        <div className="border border-black">For Artist</div>
        <div className="border border-black">For Artist</div>
        <div className="border border-black">For Artist</div>
        <div className="border border-black">For Artist</div>
      </div>
      <div className="h-3/4 grid grid-cols-4 gap-4 flex flex-col">
        <div className="border border-black">For Creator</div>
        <div className="border border-black">For Creator</div>
        <div className="border border-black">For Creator</div>
        <div className="border border-black">For Creator</div>
      </div>
    </div>
  );
}

export default ShortIntro;
