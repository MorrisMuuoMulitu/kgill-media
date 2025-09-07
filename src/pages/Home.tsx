import React from 'react';
import TrailerShowreel from '../components/TrailerShowreel';
import DualitySection from '../components/DualitySection';
import HiveSection from '../components/HiveSection';
import FoundationSection from '../components/FoundationSection';

const Home = () => {
  return (
    <>
      {/* Trailers/Showreels Section - The Marquee */}
      <div id="trailers">
        <TrailerShowreel />
      </div>
      
      {/* KGILL TV & Photography/Videography Services - The Duality */}
      <div id="duality">
        <DualitySection />
      </div>
      
      {/* Workshops/Projects/Events - The Hive */}
      <div id="hive">
        <HiveSection />
      </div>
      
      {/* Other Details - The Foundation */}
      <div id="foundation">
        <FoundationSection />
      </div>
    </>
  );
};

export default Home;