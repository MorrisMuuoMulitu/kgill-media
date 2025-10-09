import React, { useState, useEffect, useRef } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, ChevronLeft, Camera, TrendingUp, Users, Award, Search, Filter, Video, Sparkles, Youtube, ExternalLink, ThumbsUp, Calendar, Tv, X, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import OptimizedImage from '../components/OptimizedImage';

import YouTubePlayerModal from '../components/YouTubePlayerModal';

const KGTVPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  // Sample show data
  const sampleShows = [
    {
      id: 1,
      title: "Voices of the Youth",
      description: "Documentary series featuring young African changemakers who are reshaping their communities through innovation and activism",
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
      category: "Health",
      duration: "33 min",
      views: "98K",
      rating: 4.6,
      date: "2022-10-12",
      episodes: 11,
      year: "2022"
    }
  ];

  // Actual KGILL TV YouTube video data
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
      year: "2025"
    },
    {
      id: 9,
      title: "KICK OFF S01 E01(Kevo Hajui Kuomba Mechi)",
      description: "Welcome to the Kick Off web series - a full vibe on football, love and relationship.",
      thumbnail: "https://img.youtube.com/vi/EgO4wXrZ2iU/maxresdefault.jpg",
      category: "Web Series",
      duration: "Unknown",
      views: "1.2K",
      date: "1 year ago",
      videoId: "EgO4wXrZ2iU",
      year: "2024"
    },
    {
      id: 10,
      title: "KICK OFF EPISODE 4 (Anguka na Dem wa Morio)",
      description: "Football web series episode focusing on relationships",
      thumbnail: "https://img.youtube.com/vi/Z2b4uT16Kmk/maxresdefault.jpg",
      category: "Web Series",
      duration: "Unknown",
      views: "334",
      date: "1 year ago",
      videoId: "Z2b4uT16Kmk",
      year: "2024"
    },
    {
      id: 11,
      title: "Welcome to Kgill Tv (For People Like You)",
      description: "Kgill TV is the home to African Diversity of Art. We are determined to showcasing Africa's very best Art from Films, talk shows, interviews, vlogs, reality shows.",
      thumbnail: "https://img.youtube.com/vi/X1zNzenFvUk/maxresdefault.jpg",
      category: "Introduction",
      duration: "0:14",
      views: "108",
      date: "3 years ago",
      videoId: "X1zNzenFvUk",
      year: "2022"
    },
    {
      id: 12,
      title: "Social Media Influence on Gen-Zs #UnapologeticallyAdults",
      description: "Unapologetically Adults Podcast with hosts Mitchelle and Omiele discussing social media's impact on Gen-Z",
      thumbnail: "https://img.youtube.com/vi/NpwD7mRM8-s/maxresdefault.jpg",
      category: "Podcast",
      duration: "17:58",
      views: "357",
      date: "2 years ago",
      videoId: "NpwD7mRM8-s",
      year: "2023"
    }
  ];

  // Use YouTube videos as the main content
  const shows = youtubeVideos;

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
  const behindTheScenesVideo = youtubeVideos.find(video => video.id === 8);

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
  // Featured Videos - show top 8 videos
  const featuredShows = shows.slice(0, 8);
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
        // For YouTube content, we'll sort by ID (newer videos have higher IDs)
        return b.id - a.id;
      case 'views':
        // Convert views to numbers for sorting (handle "K" suffix)
        const aViews = a.views.includes('K') ? parseFloat(a.views) * 1000 : parseInt(a.views) || 0;
        const bViews = b.views.includes('K') ? parseFloat(b.views) * 1000 : parseInt(b.views) || 0;
        return bViews - aViews;
      default: // popular (use views as popularity metric)
        const aPop = a.views.includes('K') ? parseFloat(a.views) * 1000 : parseInt(a.views) || 0;
        const bPop = b.views.includes('K') ? parseFloat(b.views) * 1000 : parseInt(b.views) || 0;
        return bPop - aPop;
    }
  });

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Epic Video Showcase */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src={featuredShow.thumbnail} 
            alt={featuredShow.title}
            className="w-full h-full object-cover"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal"></div>
          {/* Animated overlay for enhanced visual effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
        </div>
        
        {/* KGILL TV Logo - Centered at Top */}
        <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-20">
          <div className="relative group">
            <img 
              src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Logos/tvlog.png?updatedAt=1760027625818&tr=f-webp" 
              alt="KGILL TV Logo" 
              className="h-24 md:h-40 lg:h-56 w-auto object-contain animate-fade-in-up drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gold-gradient/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 h-full flex items-center py-20 pt-40 md:pt-56">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="max-w-3xl">
              
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient/20 text-gold-gradient-start rounded-full text-sm font-bold tracking-wider border border-gold-gradient-start/30 backdrop-blur-sm shadow-lg">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  FEATURED PREMIERE
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900/70 text-gray-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-slate-700/50 shadow-lg">
                  <Youtube className="w-5 h-5 text-red-500" />
                  YouTube Exclusive
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-purple-gradient/20 text-purple-gradient-start rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-gradient-start/30 shadow-lg">
                  <Tv className="w-5 h-5" />
                  Season 2
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-8 leading-tight">
                <span className="block text-white animate-fade-in-up">{featuredShow.title.split(' ').slice(0, -1).join(' ')}</span>
                <span className="block epic-text animate-gradient-move mt-2">{featuredShow.title.split(' ').slice(-1)}</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-slate-900/60 backdrop-blur-sm rounded-xl text-gray-300 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-marigold" />
                    <span className="font-bold text-white">{featuredShow.duration}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-inter">Duration</span>
                </div>
                <div className="p-4 bg-slate-900/60 backdrop-blur-sm rounded-xl text-gray-300 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-cyan" />
                    <span className="font-bold text-white">{featuredShow.views}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-inter">Views</span>
                </div>
                <div className="p-4 bg-slate-900/60 backdrop-blur-sm rounded-xl text-gray-300 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-terracotta" />
                    <span className="font-bold text-white">{featuredShow.date}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-inter">Release</span>
                </div>
                <div className="p-4 bg-slate-900/60 backdrop-blur-sm rounded-xl text-gray-300 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-purple fill-current" />
                    <span className="font-bold text-white">4.9</span>
                  </div>
                  <span className="text-xs text-gray-400 font-inter">Rating</span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 font-inter mb-10 leading-relaxed">
                {featuredShow.description}
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => {
                    setSelectedVideo(featuredShow);
                    setIsModalOpen(true);
                  }}
                  className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 bg-gold-gradient text-charcoal rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-marigold/20 to-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Watch Premiere</span>
                </button>
                
                <button className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Youtube className="w-6 h-6 text-red-500" />
                  <span>Subscribe</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Featured Video Preview */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-gold-gradient-start/50 transition-all duration-500">
                <OptimizedImage 
                  src={featuredShow.thumbnail} 
                  alt={featuredShow.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Play Button Overlay */}
                <button 
                  onClick={() => {
                    setSelectedVideo(featuredShow);
                    setIsModalOpen(true);
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-charcoal ml-2" />
                  </div>
                </button>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1.5 bg-gold-gradient text-charcoal rounded-full text-xs font-bold">
                      {featuredShow.category}
                    </span>
                    <span className="px-3 py-1.5 bg-slate-900/80 text-gray-300 rounded-full text-xs font-semibold border border-slate-700/50">
                      {featuredShow.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-white truncate">
                    {featuredShow.title}
                  </h3>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan rounded-full flex items-center justify-center shadow-lg animate-float">
                <Star className="w-6 h-6 text-charcoal fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-marigold rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-1000">
                <Heart className="w-5 h-5 text-charcoal fill-current" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Studio Services CTA */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
          <Link 
            to="/photography-videography"
            className="group relative overflow-hidden flex items-center gap-4 p-5 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-gradient-start/50 hover:bg-slate-900/90 transition-all duration-300 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-16 h-16 rounded-xl bg-blue-gradient/20 flex items-center justify-center border border-blue-gradient-start/30 group-hover:scale-110 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <Camera className="w-8 h-8 text-blue-gradient-start z-10 relative" />
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
                Featured Videos
              </h2>
              <p className="text-gray-400 font-inter text-lg">Curated collection of our best content</p>
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
                      <button 
                        onClick={() => {
                          setSelectedVideo(show);
                          setIsModalOpen(true);
                        }}
                        className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform"
                      >
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
                Trending Videos
              </h2>
              <div className="flex items-center gap-2 text-gray-400 font-inter">
                <Youtube className="w-5 h-5" />
                <span className="text-lg">Most popular on YouTube</span>
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

      {/* Behind the Scenes Video */}
      {behindTheScenesVideo && (
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

            <div className="max-w-5xl mx-auto">
              <div className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage 
                  src={behindTheScenesVideo.thumbnail} 
                  alt={behindTheScenesVideo.title}
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Play Button Overlay */}
                <button 
                  onClick={() => {
                    setSelectedVideo(behindTheScenesVideo);
                    setIsModalOpen(true);
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-16 h-16 text-charcoal ml-2" />
                  </div>
                </button>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-gold-gradient text-charcoal rounded-lg text-sm font-bold">
                      {behindTheScenesVideo.category}
                    </span>
                    <span className="px-4 py-2 bg-slate-900/80 text-white rounded-lg text-sm font-semibold border border-slate-700/50">
                      {behindTheScenesVideo.views} views
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold font-montserrat text-white mb-3">
                    {behindTheScenesVideo.title}
                  </h3>
                  <p className="text-lg text-gray-300 font-inter max-w-3xl">
                    {behindTheScenesVideo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Shows Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-montserrat mb-4 epic-text">All Videos</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl leading-relaxed">
                Explore our complete YouTube video collection
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
                    <button 
                      onClick={() => {
                        setSelectedVideo(show);
                        setIsModalOpen(true);
                      }}
                      className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform mb-4"
                    >
                      <Play className="w-8 h-8 text-charcoal ml-1" />
                    </button>
                    <span className="text-white font-bold text-lg">Watch Video</span>
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
            <Youtube className="w-5 h-5 text-gold-gradient-start" />
            <span className="text-gold-gradient-start font-bold text-sm tracking-wider">YOUTUBE CHANNEL</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-8 epic-text leading-tight">
            Join the Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-inter mb-12 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our YouTube channel @kgilltv and get access to exclusive African content, 
            behind-the-scenes footage, and early releases of our videos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://www.youtube.com/@kgilltv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-12 py-5 bg-gold-gradient text-charcoal rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-105 transition-all duration-300"
            >
              <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Subscribe on YouTube</span>
            </a>
            <button className="group flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-gold-gradient-start mb-2">150+</div>
                <div className="text-gray-400 font-inter">YouTube Videos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-blue-gradient-start mb-2">1.87K</div>
                <div className="text-gray-400 font-inter">Subscribers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-purple-gradient-start mb-2">500K+</div>
                <div className="text-gray-400 font-inter">Total Views</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black font-montserrat text-gold-gradient-start mb-2">12+</div>
                <div className="text-gray-400 font-inter">Content Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* YouTube Player Modal */}
      <YouTubePlayerModal
        videoId={selectedVideo?.videoId || ''}
        title={selectedVideo?.title || ''}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default KGTVPg;