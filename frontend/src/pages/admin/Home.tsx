import React from 'react';
import NavBar from '../../components/Navbar';
import HeroAuction from '../../templates/HeroAuction';
import HeroLiveAuction from '../../templates/HeroLiveAuction';
import BouncingArrow from '../../templates/BouncingArrow';
import CircleAttributes from '../../templates/CircleAttributes';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroAuction />
      <BouncingArrow />
      <HeroLiveAuction />
      <CircleAttributes />
    </div>
  );
}
