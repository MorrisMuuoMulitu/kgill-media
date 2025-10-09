import React from 'react';
import TrailerShowreel from '../components/TrailerShowreel';
import DualitySection from '../components/DualitySection';
import HiveSection from '../components/HiveSection';
import FoundationSection from '../components/FoundationSection';
import PremiumShowcase from '../components/PremiumShowcase';
import ComponentInView from '../components/ComponentInView';
import FeaturedReels from '../components/FeaturedReels';

const Home = () => {
  // YouTube video data for featured reels and trailer showreel
  const youtubeVideos = [
    {
      id: 1,
      title: "Kick Off S02 Ep 1 (We are back ~ the reunion)",
      description: "The game is back — and so is the drama. Papa, Candy, Kevo, and Coco return for a brand-new season filled with football fever, messy relationships, and ghetto hustle. Kenya's CHAN Tournament success sets the vibe.",
      thumbnail: "https://img.youtube.com/vi/Z6BPF8gbquY/maxresdefault.jpg",
      category: "Web Series",
      duration: "14:15",
      views: "1.2K",
      date: "Premiered 6 hours ago",
      videoId: "Z6BPF8gbquY",
      featured: true,
      year: "2025"
    },
    {
      id: 2,
      title: "Kick Off season 2 Trailer",
      description: "The game is back — and so is the drama. Childhood friends return with bigger secrets, louder arguments, and football fever. Arsenal is flying, Chelsea is on form, and Manchester United is still struggling.",
      thumbnail: "https://img.youtube.com/vi/UX8p6XwZxbA/maxresdefault.jpg",
      category: "Web Series",
      duration: "Short",
      views: "61",
      date: "Oct 3, 2025",
      videoId: "UX8p6XwZxbA",
      year: "2025"
    },
    {
      id: 3,
      title: "A Sinema Mtaani | AUMA Short film",
      description: "Story of a 12-year-old girl in Kibera experiencing her first period. Addresses menstrual health, dignity, and the 65% of Kenyan females who cannot afford sanitary pads.",
      thumbnail: "https://img.youtube.com/vi/bp_BnrK-hOo/maxresdefault.jpg",
      category: "Short Film",
      duration: "12:54",
      views: "2.7K",
      date: "Apr 13, 2025",
      videoId: "bp_BnrK-hOo",
      featured: true,
      year: "2025"
    },
    {
      id: 4,
      title: "A Sinema Mtaani | Wishes Short Film",
      description: "Short film addressing relationship dynamics and domestic violence themes.",
      thumbnail: "https://img.youtube.com/vi/MzMwB13sWWQ/maxresdefault.jpg",
      category: "Short Film",
      duration: "16:23",
      views: "15K",
      date: "May 11, 2025",
      videoId: "MzMwB13sWWQ",
      year: "2025"
    },
    {
      id: 5,
      title: "A Sinema Mtaani | Dark Valentine Short Film",
      description: "A haunting tale inspired by real femicide cases",
      thumbnail: "https://img.youtube.com/vi/NWPQemVFUXQ/maxresdefault.jpg",
      category: "Short Film",
      duration: "16:23",
      views: "Unknown",
      date: "8 months ago",
      videoId: "NWPQemVFUXQ",
      featured: true,
      year: "2025"
    },
    {
      id: 6,
      title: "A Sinema Mtaani Shortfilm| The Other End Trailer",
      description: "Trailer for 'The Other End' short film",
      thumbnail: "https://img.youtube.com/vi/6vTyk8g3DBc/maxresdefault.jpg",
      category: "Short Film",
      duration: "Short",
      views: "274",
      date: "3 weeks ago",
      videoId: "6vTyk8g3DBc",
      year: "2025"
    },
    {
      id: 7,
      title: "A Sinema Mtaani | Situations Short Film Trailer",
      description: "Trailer for 'Situations' short film",
      thumbnail: "https://img.youtube.com/vi/kkEgPEcen5Q/maxresdefault.jpg",
      category: "Short Film",
      duration: "Short",
      views: "Unknown",
      date: "Recent",
      videoId: "kkEgPEcen5Q",
      year: "2025"
    },
    {
      id: 8,
      title: "Making of Sinema Mtaani Short Films | Situations Short Film (BTS)",
      description: "Behind the scenes of Making of Situations short film",
      thumbnail: "https://img.youtube.com/vi/scdj1xKxDqs/maxresdefault.jpg",
      category: "Behind the Scenes",
      duration: "Unknown",
      views: "247",
      date: "2 months ago",
      videoId: "scdj1xKxDqs",
      featured: true,
      year: "2025"
    }
  ];

  // Select top 3 featured videos for the trailer showreel
  const showreelVideos = youtubeVideos.filter(v => v.featured).slice(0, 3);

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
          <TrailerShowreel videos={showreelVideos} />
        </div>
      </ComponentInView>
      
      {/* KGILL TV Featured Reels Section */}
      <ComponentInView 
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="featured-reels">
          <FeaturedReels reels={youtubeVideos} />
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