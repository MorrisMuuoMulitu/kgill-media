import React, { useState, useEffect, useRef } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, ChevronLeft, Camera, TrendingUp, Users, Award, Search, Filter, Video, Sparkles, Youtube, ExternalLink, ThumbsUp, Calendar, Tv, X, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import OptimizedImage from '../components/OptimizedImage';
import YouTubeThumbnail from '../components/YouTubeThumbnail';

import YouTubePlayerModal from '../components/YouTubePlayerModal';
import { supabase } from '../lib/supabase';

const KGTVPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [shows, setShows] = useState<any[]>([]);
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('youtube_videos')
        .select('*')
        .order('id', { ascending: false });

      if (data) setShows(data);
      setLoading(false);
    };

    fetchVideos();
  }, []);

  const categories = [
    { key: 'all', label: 'All Shows' },
    { key: 'Web Series', label: 'Web Series' },
    { key: 'Short Film', label: 'Short Films' },
    { key: 'Podcast', label: 'Podcasts' },
    { key: 'Behind the Scenes', label: 'Behind the Scenes' },
    { key: 'Introduction', label: 'Introduction' }
  ];

  const sortOptions = [
    { key: 'popular', label: 'Most Popular' },
    { key: 'recent', label: 'Recently Added' },
    { key: 'views', label: 'Most Viewed' }
  ];

  // Behind the Scenes Video
  const behindTheScenesVideo = shows.find(video => video.category === 'Behind the Scenes');

  const scrollTrending = (direction: 'left' | 'right') => {
    if (trendingScrollRef.current) {
      const scrollAmount = 400;
      const newPosition = direction === 'left'
        ? trendingScrollRef.current.scrollLeft - scrollAmount
        : trendingScrollRef.current.scrollLeft + scrollAmount;

      trendingScrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredShows = shows.filter(show => {
    const matchesCategory = activeCategory === 'all' || show.category === activeCategory;
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      show.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredShows = shows.filter(show => show.featured);
  const trendingShows = shows.slice(0, 6);

  if (loading) return <LoadingState />;

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-24 pb-20">
      {/* Dynamic Header / Hero */}
      <section className="relative px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          {featuredShows.length > 0 ? (
            <div className="relative h-[65vh] rounded-[40px] overflow-hidden group">
              <YouTubeThumbnail
                videoId={featuredShows[0].video_id}
                alt={featuredShows[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent"></div>

              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gold-gradient text-charcoal text-[10px] font-black uppercase rounded-full shadow-lg">Featured</span>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{featuredShows[0].category}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white italic mb-6 leading-none uppercase tracking-tighter">
                  {featuredShows[0].title.split(' ').slice(0, 3).join(' ')} <br />
                  <span className="text-gold-gradient-start">{featuredShows[0].title.split(' ').slice(3).join(' ')}</span>
                </h1>
                <p className="max-w-xl text-gray-300 font-inter text-lg mb-8 line-clamp-2">
                  {featuredShows[0].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => { setSelectedVideo(featuredShows[0]); setIsModalOpen(true); }}
                    className="flex items-center gap-3 bg-gold-gradient text-charcoal font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all text-sm tracking-widest"
                  >
                    <Play className="fill-current w-5 h-5" /> WATCH NOW
                  </button>
                  <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-black px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-sm tracking-widest">
                    <Heart className="w-5 h-5" /> ADD TO LIST
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[40vh] flex flex-col items-center justify-center bg-slate-900 rounded-[40px] border border-white/5">
              <Tv className="w-20 h-20 text-gray-700 mb-6" />
              <h2 className="text-3xl font-montserrat font-black text-white italic uppercase tracking-widest">Tune in to <span className="text-gold-gradient-start">KG TV</span></h2>
            </div>
          )}
        </div>
      </section>

      {/* Trending Horizontal Scroll */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-montserrat font-black text-white italic flex items-center gap-3">
            <TrendingUp className="text-gold-gradient-start w-6 h-6" />
            TRENDING <span className="text-gold-gradient-start">NOW</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollTrending('left')}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTrending('right')}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={trendingScrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-[calc((100vw-1280px)/2+24px)] md:px-[calc((100vw-1280px)/2+48px)] xl:px-[calc((100vw-1280px)/2+24px)]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingShows.map((show, idx) => (
            <div
              key={show.id}
              className="min-w-[300px] md:min-w-[400px] aspect-video relative rounded-3xl overflow-hidden group cursor-pointer scroll-snap-align-start"
              onClick={() => { setSelectedVideo(show); setIsModalOpen(true); }}
            >
              <YouTubeThumbnail
                videoId={show.video_id}
                alt={show.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center font-montserrat font-black text-white italic text-xl">
                {idx + 1}
              </div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[10px] font-black text-gold-gradient-start uppercase tracking-widest mb-1">{show.category}</p>
                <h4 className="text-lg font-bold text-white leading-tight">{show.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid & Filters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat.key ? 'bg-gold-gradient text-charcoal' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-gold-gradient-start transition-colors" />
            <input
              type="text"
              placeholder="Surch for episodes, films..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0c] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-gold-gradient-start/50 transition-all font-inter"
            />
          </div>
        </div>

        {filteredShows.length === 0 ? (
          <div className="text-center py-32 bg-white/5 rounded-[40px] border border-dashed border-white/10">
            <Video className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h3 className="text-2xl font-montserrat font-black text-white italic uppercase mb-2">No transmissions found</h3>
            <p className="text-gray-500 font-inter">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShows.map(show => (
              <div
                key={show.id}
                className="group relative"
                onMouseEnter={() => setHoveredShow(show.id)}
                onMouseLeave={() => setHoveredShow(null)}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/5">
                  <YouTubeThumbnail
                    videoId={show.video_id}
                    alt={show.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => { setSelectedVideo(show); setIsModalOpen(true); }}
                      className="w-16 h-16 bg-gold-gradient text-charcoal rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300"
                    >
                      <Play className="fill-current w-6 h-6 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white">
                    {show.duration}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-gold-gradient-start uppercase tracking-widest">{show.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{show.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-gradient-start transition-colors line-clamp-1">{show.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-tighter">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {show.views} Views</span>
                    <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> 84%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Special Feature Section - BTS */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-gradient-to-br from-charcoal to-slate-900 rounded-[60px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-gradient-start/10 rounded-full blur-[120px] -z-0"></div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-gold-gradient-start w-5 h-5" />
                <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Exclusives</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white italic mb-8 leading-tight uppercase tracking-tighter">
                BEHIND THE <span className="text-gold-gradient-start">SCENES</span>
              </h2>
              <p className="text-gray-400 font-inter text-lg mb-10 leading-relaxed max-w-lg">
                Get an exclusive look at how we bring Sinema Mtaani to life. From script-writing in the heart of the community to high-end post-production.
              </p>
              <button
                onClick={() => { if (behindTheScenesVideo) { setSelectedVideo(behindTheScenesVideo); setIsModalOpen(true); } }}
                className="group flex items-center gap-4 text-white font-black text-sm tracking-[0.2em]"
              >
                SEE THE PROCESS
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            <div className="mt-12 lg:mt-0 relative">
              <div className="absolute -top-6 -left-6 bg-gold-gradient w-24 h-24 rounded-3xl -z-10 animate-pulse"></div>
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
                <YouTubeThumbnail
                  videoId={behindTheScenesVideo?.video_id || ""}
                  alt="BTS Content"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <YouTubePlayerModal
          videoId={selectedVideo.video_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default KGTVPg;