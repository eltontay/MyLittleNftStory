import React from 'react';
import NavBar from '../../components/Navbar';
import FilterBar from '../../components/FilterBar';
import ArtistSearchBar from '../../components/ArtistSearchBar';
import ArtistCard from '../../components/ArtistCard';

export default function ArtistsPage() {
  return (
    <div>
      <NavBar />
      <FilterBar />
      <ArtistSearchBar />
      <ArtistCard />
     
    </div>
  );
}
