import React, { useEffect, useState } from 'react';
import TrailerShowreel from '../components/TrailerShowreel';
import DualitySection from '../components/DualitySection';
import HiveSection from '../components/HiveSection';
import FoundationSection from '../components/FoundationSection';
import PremiumShowcase from '../components/PremiumShowcase';
import ComponentInView from '../components/ComponentInView';
import FeaturedReels from '../components/FeaturedReels';
import FeaturedMovies from '../components/FeaturedMovies';
import { supabase } from '../lib/supabase';
import LoadingState from '../components/LoadingState';

const Home = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: videos } = await supabase
        .from('youtube_videos')
        .select('*')
        .order('id', { ascending: false });

      const { data: moviesData } = await supabase
        .from('movies')
        .select('*')
        .order('created_at', { ascending: false });

      if (videos) setYoutubeVideos(videos);
      if (moviesData) setMovies(moviesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Select top 3 featured videos for the trailer showreel
  const showreelVideos = youtubeVideos.filter(v => v.featured).slice(0, 3);

  if (loading) return <LoadingState />;

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

      {/* Featured Movies Section - Cinematic Experience */}
      <ComponentInView
        className="opacity-100"
        animation={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div id="movies">
          <FeaturedMovies movies={movies} />
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
        transition={{ duration: 1.0 }}
      >
        <div id="foundation">
          <FoundationSection />
        </div>
      </ComponentInView>
    </>
  );
};

export default Home;