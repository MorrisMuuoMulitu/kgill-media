import React from 'react';
import TrailerShowreel from '../components/TrailerShowreel';
import DualitySection from '../components/DualitySection';
import HiveSection from '../components/HiveSection';
import FoundationSection from '../components/FoundationSection';
import PremiumShowcase from '../components/PremiumShowcase';
import ComponentInView from '../components/ComponentInView';

const Home = () => {
  return (
    <>
      {/* Trailers/Showreels Section - The Marquee */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="trailers">
          <TrailerShowreel />
        </div>
      </ComponentInView>
      
      {/* KGILL TV & Photography/Videography Services - The Duality */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="duality">
          <DualitySection />
        </div>
      </ComponentInView>
      
      {/* Workshops/Projects/Events - The Hive */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="hive">
          <HiveSection />
        </div>
      </ComponentInView>
      
      {/* Premium Showcase Section */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="premium">
          <PremiumShowcase />
        </div>
      </ComponentInView>
      
      {/* Other Details - The Foundation */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="foundation">
          <FoundationSection />
        </div>
      </ComponentInView>
    </>
  );
};

export default Home;