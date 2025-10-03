import React, { useState, useEffect, useRef } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, ChevronLeft, Camera, TrendingUp, Users, Award, Search, Filter, Video, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import OptimizedImage from '../components/OptimizedImage';
import ImmersiveGallery from '../components/ImmersiveGallery';

const KGTVPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  // Sample show data
  const shows = [
    {
      id: 1,
      title: "Voices of the Youth",
      description: "Documentary series featuring young African changemakers who are reshaping their communities through innovation and activism",
      thumbnail: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Documentary",
      duration: "45 min",
      views: "125K",
      rating: 4.8,
      date: "2023-05-15",
      featured: true,
      episodes: 8,
      year: "2023"
    },
    {
      id: 2,
      title: "Sinema Mtaani",
      description: "Community filmmaking projects from Nairobi's streets, showcasing authentic stories told by local residents",
      thumbnail: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Community",
      duration: "30 min",
      views: "89K",
      rating: 4.6,
      date: "2023-04-22",
      episodes: 12,
      year: "2023"
    },
    {
      id: 3,
      title: "Digital Griot",
      description: "Exploring African storytelling in the digital age, bridging traditional oral narratives with modern technology",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      duration: "52 min",
      views: "156K",
      rating: 4.9,
      date: "2023-03-10",
      episodes: 6,
      year: "2023"
    },
    {
      id: 4,
      title: "Innovation Hub",
      description: "Tech entrepreneurs reshaping Africa's future through groundbreaking startups and disruptive technologies",
      thumbnail: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      duration: "38 min",
      views: "92K",
      rating: 4.5,
      date: "2023-02-18",
      episodes: 10,
      year: "2023"
    },
    {
      id: 5,
      title: "Climate Warriors",
      description: "Young activists fighting for environmental justice and sustainable solutions across the continent",
      thumbnail: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Environment",
      duration: "41 min",
      views: "78K",
      rating: 4.7,
      date: "2023-01-30",
      episodes: 7,
      year: "2023"
    },
    {
      id: 6,
      title: "Artisan Stories",
      description: "Traditional crafts in the modern world, celebrating the artisans keeping cultural heritage alive",
      thumbnail: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      duration: "35 min",
      views: "65K",
      rating: 4.4,
      date: "2022-12-15",
      episodes: 9,
      year: "2022"
    },
    {
      id: 7,
      title: "Urban Legends",
      description: "Mythical tales and folklore from city streets, reimagined for contemporary audiences",
      thumbnail: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entertainment",
      duration: "28 min",
      views: "112K",
      rating: 4.3,
      date: "2022-11-20",
      episodes: 15,
      year: "2022"
    },
    {
      id: 8,
      title: "Health Matters",
      description: "Medical innovations and healthcare heroes transforming lives in underserved communities",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Health",
      duration: "33 min",
      views: "98K",
      rating: 4.6,
      date: "2022-10-12",
      episodes: 11,
      year: "2022"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Shows' },
    { key: 'Documentary', label: 'Documentaries' },
    { key: 'Community', label: 'Community' },
    { key: 'Culture', label: 'Culture' },
    { key: 'Technology', label: 'Technology' },
    { key: 'Environment', label: 'Environment' },
    { key: 'Health', label: 'Health' },
    { key: 'Entertainment', label: 'Entertainment' }
  ];

  const sortOptions = [
    { key: 'popular', label: 'Most Popular' },
    { key: 'recent', label: 'Recently Added' },
    { key: 'rating', label: 'Highest Rated' }
  ];

  // Behind the Scenes Gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "On Set Magic",
      category: "production",
      description: "Capturing authentic moments during our documentary shoots"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/7991721/pexels-photo-7991721.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Interview Setup",
      category: "production",
      description: "Setting up for an intimate conversation with changemakers"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/8111881/pexels-photo-8111881.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Community Engagement",
      category: "events",
      description: "Connecting with local communities across Africa"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Creative Direction",
      category: "production",
      description: "Our team bringing stories to life"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8111262/pexels-photo-8111262.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Awards Night",
      category: "events",
      description: "Celebrating excellence in African storytelling"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Studio Sessions",
      category: "production",
      description: "Behind the scenes of our latest series"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/8112090/pexels-photo-8112090.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Team Collaboration",
      category: "team",
      description: "Creative minds working together"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/7991665/pexels-photo-7991665.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Field Production",
      category: "production",
      description: "Documenting stories in remote locations"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/8111315/pexels-photo-8111315.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Premiere Night",
      category: "events",
      description: "Unveiling our latest documentary series"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/7991680/pexels-photo-7991680.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Camera Ready",
      category: "production",
      description: "Perfecting every shot for our viewers"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/5699477/pexels-photo-5699477.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Post-Production",
      category: "team",
      description: "Editing magic in our creative suite"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/8111927/pexels-photo-8111927.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Festival Spotlight",
      category: "events",
      description: "Showcasing African stories on the world stage"
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return <LoadingState type="page" />;
  }

  const featuredShow = shows.find(show => show.featured) || shows[0];
  const featuredShows = shows.filter(show => show.featured || show.rating >= 4.7);
  const trendingShows = [...shows].sort((a, b) => parseInt(b.views) - parseInt(a.views)).slice(0, 6);

  const filteredShows = shows.filter(show => {
    const matchesCategory = activeCategory === 'all' || show.category === activeCategory;
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         show.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedShows = [...filteredShows].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'rating':
        return b.rating - a.rating;
      default: // popular
        return parseInt(b.views) - parseInt(a.views);
    }
  });

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Premium Showcase */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src={featuredShow.thumbnail} 
            alt={featuredShow.title}
            className="w-full h-full object-cover"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 h-full flex items-center py-20">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient/20 text-gold-gradient-start rounded-full text-sm font-bold tracking-wider border border-gold-gradient-start/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                FEATURED SERIES
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/60 text-gray-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                <Video className="w-4 h-4" />
                {featuredShow.episodes} Episodes
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-montserrat font-black mb-6 leading-tight">
              <span className="block text-white">{featuredShow.title.split(' ').slice(0, -1).join(' ')}</span>
              <span className="block epic-text">{featuredShow.title.split(' ').slice(-1)}</span>
            </h1>
            
            <div className="flex flex-wrap gap-5 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-lg">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-bold text-white">{featuredShow.rating}</span>
                <span className="text-gray-400">/5</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-lg text-gray-300">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{featuredShow.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-lg text-gray-300">
                <Eye className="w-5 h-5" />
                <span className="font-semibold">{featuredShow.views} views</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-gradient/20 backdrop-blur-sm rounded-lg border border-purple-gradient-start/30">
                <span className="text-purple-gradient-start font-bold text-sm">{featuredShow.category}</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 font-inter mb-10 leading-relaxed max-w-3xl">
              {featuredShow.description}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 px-10 py-5 bg-gold-gradient text-charcoal rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-105 transition-all duration-300">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Now</span>
              </button>
              
              <button className="group flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                <span>More Info</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Studio Services CTA */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
          <Link 
            to="/photography-videography"
            className="group flex items-center gap-4 p-5 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-gradient-start/50 hover:bg-slate-900/90 transition-all duration-300 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-gradient/20 flex items-center justify-center border border-blue-gradient-start/30 group-hover:scale-110 transition-transform">
              <Camera className="w-7 h-7 text-blue-gradient-start" />
            </div>
            <div>
              <h3 className="font-bold font-montserrat text-white text-base mb-1">Studio Services</h3>
              <p className="text-sm text-gray-400">Professional production</p>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-gradient-start group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Shows Carousel */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat epic-text-2 mb-3">
                Featured Shows
              </h2>
              <p className="text-gray-400 font-inter text-lg">Curated collection of our best series</p>
            </div>
            <button 
              onClick={() => setActiveCategory('all')}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-gradient-start/50 rounded-xl text-gray-300 hover:text-gold-gradient-start font-semibold transition-all duration-300"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredShows.map((show) => (
                <div 
                  key={show.id} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredShow(show.id)}
                  onMouseLeave={() => setHoveredShow(null)}
                >
                  <div className="relative rounded-2xl overflow-hidden mb-4 shadow-xl">
                    <OptimizedImage 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className={`absolute inset-0 bg-charcoal/90 flex items-center justify-center transition-opacity duration-300 ${hoveredShow === show.id ? 'opacity-100' : 'opacity-0'}`}>
                      <button className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-charcoal ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-lg text-xs font-semibold">
                        {show.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 bg-gold-gradient text-charcoal rounded-lg text-xs font-bold">
                        {show.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-1">
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-white group-hover:text-gold-gradient-start transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-gray-400 font-inter mb-4 line-clamp-2 text-sm leading-relaxed">
                      {show.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-bold text-white">{show.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Eye className="w-4 h-4" />
                          <span className="font-semibold">{show.views}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold">{show.episodes} eps</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now with Carousel Controls */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat epic-text-3 flex items-center gap-4 mb-3">
                <div className="p-3 bg-gold-gradient/20 rounded-xl border border-gold-gradient-start/30">
                  <TrendingUp className="w-8 h-8 text-gold-gradient-start" />
                </div>
                Trending Now
              </h2>
              <div className="flex items-center gap-2 text-gray-400 font-inter">
                <Users className="w-5 h-5" />
                <span className="text-lg">Most watched this week</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scrollTrending('left')}
                className="p-3 bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-gold-gradient-start/50 rounded-xl text-white hover:text-gold-gradient-start transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollTrending('right')}
                className="p-3 bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-gold-gradient-start/50 rounded-xl text-white hover:text-gold-gradient-start transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div 
              ref={trendingScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {trendingShows.map((show) => (
                <div 
                  key={show.id} 
                  className="flex-shrink-0 w-[400px] group cursor-pointer"
                >
                  <div className="flex gap-5 p-5 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-gold-gradient-start/30 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div className="relative rounded-xl overflow-hidden flex-shrink-0 shadow-xl">
                      <OptimizedImage 
                        src={show.thumbnail} 
                        alt={show.title}
                        className="w-36 h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal/60">
                        <button className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-charcoal ml-0.5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold font-montserrat mb-2 text-white group-hover:text-gold-gradient-start transition-colors truncate">
                          {show.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs mb-2">
                          <div className="flex items-center gap-1 text-gray-400">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                            <span className="font-bold text-white">{show.rating}</span>
                          </div>
                          <span className="text-gray-600">•</span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Eye className="w-3.5 h-3.5" />
                            <span className="font-semibold">{show.views}</span>
                          </div>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-400 font-semibold">{show.duration}</span>
                        </div>
                        <p className="text-gray-400 font-inter text-xs line-clamp-2 leading-relaxed">
                          {show.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="px-2.5 py-1 bg-gold-gradient/20 text-gold-gradient-start border border-gold-gradient-start/30 rounded-lg text-xs font-bold">
                          {show.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Gallery */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient-start/5 via-transparent to-blue-gradient-start/5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-full border border-gold-gradient-start/30">
              <Camera className="w-5 h-5 text-gold-gradient-start" />
              <span className="text-gold-gradient-start font-bold text-sm tracking-wider">EXCLUSIVE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-montserrat mb-6 epic-text">
              Behind the Scenes
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-inter max-w-3xl mx-auto leading-relaxed">
              Step into our world of storytelling and discover the magic that brings our shows to life
            </p>
          </div>

          <ImmersiveGallery images={galleryImages} title="Behind the Scenes" />
        </div>
      </section>

      {/* All Shows Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-montserrat mb-4 epic-text">All Shows</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl leading-relaxed">
                Explore our complete collection of original series and documentaries
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-charcoal/50 border-2 border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-gradient-start focus:bg-charcoal/70 transition-all w-full md:w-72 font-inter"
                />
              </div>
              
              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-charcoal/50 border-2 border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-gold-gradient-start hover:bg-charcoal/70 transition-all font-inter font-semibold cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.key} value={option.key}>{option.label}</option>
                  ))}
                </select>
                
                <button className="bg-charcoal/50 border-2 border-white/10 rounded-xl px-4 py-3.5 text-white hover:bg-charcoal/70 hover:border-gold-gradient-start/50 transition-all">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-14">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-7 py-3.5 rounded-xl font-bold font-inter transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gold-gradient text-charcoal shadow-xl shadow-gold-gradient-start/30 scale-105'
                    : 'bg-charcoal/60 text-white hover:bg-charcoal/80 border-2 border-white/10 hover:border-gold-gradient-start/50 hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Shows Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedShows.map((show) => (
              <div 
                key={show.id} 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredShow(show.id)}
                onMouseLeave={() => setHoveredShow(null)}
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 shadow-xl group-hover:shadow-2xl transition-shadow">
                  <OptimizedImage 
                    src={show.thumbnail} 
                    alt={show.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  <div className={`absolute inset-0 bg-charcoal/90 flex flex-col items-center justify-center transition-opacity duration-300 ${hoveredShow === show.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform mb-4">
                      <Play className="w-8 h-8 text-charcoal ml-1" />
                    </button>
                    <span className="text-white font-bold text-lg">Watch Now</span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-lg text-xs font-semibold">
                      {show.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 bg-gold-gradient text-charcoal rounded-lg text-xs font-bold">
                      {show.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-1">
                  <h3 className="text-xl font-bold font-montserrat mb-2 text-white group-hover:text-gold-gradient-start transition-colors">{show.title}</h3>
                  <p className="text-gray-400 font-inter mb-4 line-clamp-2 leading-relaxed">{show.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-bold text-white">{show.rating}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span className="font-semibold">{show.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 font-semibold">{show.episodes} eps</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-500 font-semibold">{show.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6 px-6 py-3 bg-gold-gradient/10 rounded-full border border-gold-gradient-start/30">
              <Award className="w-8 h-8 text-gold-gradient-start" />
              <span className="text-gold-gradient-start font-bold text-sm tracking-wider">RECOGNITION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-montserrat mb-6 epic-text">
              Awards & Recognition
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-inter max-w-3xl mx-auto leading-relaxed">
              Celebrating excellence in African storytelling and media production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-10 rounded-3xl bg-slate-900/60 backdrop-blur-sm border-2 border-white/5 hover:border-gold-gradient-start/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-gradient-start/20 hover:scale-105">
              <div className="w-24 h-24 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Award className="w-12 h-12 text-charcoal" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">Best Documentary Series</h3>
              <p className="text-gray-400 font-inter mb-4 text-lg">African Media Awards 2023</p>
              <div className="inline-block px-5 py-2 bg-gold-gradient/20 border border-gold-gradient-start/30 rounded-full">
                <p className="text-gold-gradient-start font-bold text-sm">🏆 WINNER</p>
              </div>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-slate-900/60 backdrop-blur-sm border-2 border-white/5 hover:border-blue-gradient-start/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-gradient-start/20 hover:scale-105">
              <div className="w-24 h-24 bg-blue-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">Innovation in Storytelling</h3>
              <p className="text-gray-400 font-inter mb-4 text-lg">Digital Media Excellence 2023</p>
              <div className="inline-block px-5 py-2 bg-blue-gradient/20 border border-blue-gradient-start/30 rounded-full">
                <p className="text-blue-gradient-start font-bold text-sm">⭐ FINALIST</p>
              </div>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-slate-900/60 backdrop-blur-sm border-2 border-white/5 hover:border-purple-gradient-start/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-gradient-start/20 hover:scale-105">
              <div className="w-24 h-24 bg-purple-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">Community Impact Award</h3>
              <p className="text-gray-400 font-inter mb-4 text-lg">Social Change Media 2023</p>
              <div className="inline-block px-5 py-2 bg-purple-gradient/20 border border-purple-gradient-start/30 rounded-full">
                <p className="text-purple-gradient-start font-bold text-sm">🏆 WINNER</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient-start/10 via-transparent to-blue-gradient-start/10"></div>
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-full border border-white/10">
            <Sparkles className="w-5 h-5 text-gold-gradient-start" />
            <span className="text-gold-gradient-start font-bold text-sm tracking-wider">EXCLUSIVE ACCESS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-8 epic-text leading-tight">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
            Subscribe to KGILL TV and get access to exclusive content, behind-the-scenes footage, 
            and early releases of our shows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group flex items-center justify-center gap-3 px-12 py-5 bg-gold-gradient text-charcoal rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-105 transition-all duration-300">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Subscribe Now</span>
            </button>
            <button className="group flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-gold-gradient-start mb-2">50+</div>
                <div className="text-gray-400 font-inter">Original Series</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-blue-gradient-start mb-2">1M+</div>
                <div className="text-gray-400 font-inter">Viewers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-purple-gradient-start mb-2">200+</div>
                <div className="text-gray-400 font-inter">Episodes</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-gold-gradient-start mb-2">15+</div>
                <div className="text-gray-400 font-inter">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KGTVPg;