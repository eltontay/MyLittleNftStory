import React from 'react';
import NavBar from '../../components/Navbar';
import HeroAuction from '../../templates/HeroAuction';
import LiveAuction from '../../templates/LiveAuction';
import BouncingArrow from '../../templates/BouncingArrow';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroAuction />
      <BouncingArrow />

      <div className="grid grid-cols-1 divide-y divide-black px-6">
        <div>
          <div className="animate-pulse ">
            <div className="rounded-full bg-blue-700 h-2 w-2"></div>
          </div>
          <div className="flex pl-2">Live Auction</div>
        </div>
        <div />
      </div>
      <LiveAuction />
    </div>
  );
}
