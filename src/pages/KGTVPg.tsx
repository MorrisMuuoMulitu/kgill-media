import React, { useState, useEffect } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, Camera, TrendingUp, Users, Award, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import OptimizedImage from '../components/OptimizedImage';

const KGTVPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popular');

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

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

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
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src={featuredShow.thumbnail} 
            alt={featuredShow.title}
            className="w-full h-full object-cover"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-gradient/20 text-gold-gradient-start rounded-full text-sm font-bold tracking-wider border border-gold-gradient-start/30">
                FEATURED SERIES
              </span>
            </div>
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">{featuredShow.title.split(' ').slice(0, -1).join(' ')}</span>
              <span className="block epic-text">{featuredShow.title.split(' ').slice(-1)}</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-bold">{featuredShow.rating}</span>
                <span className="text-gray-500">•</span>
                <span>{featuredShow.episodes} Episodes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>{featuredShow.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Eye className="w-5 h-5" />
                <span>{featuredShow.views} views</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
              {featuredShow.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold px-8 py-4 text-lg">
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold px-8 py-4 text-lg">
                <span>View Series</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Studio Services CTA */}
        <div className="absolute bottom-8 right-8 z-10">
          <Link 
            to="/photography-videography"
            className="premium-card premium-hover-blue flex items-center gap-3 p-4 max-w-xs rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-gradient/20 flex items-center justify-center border border-blue-gradient-start/30">
              <Camera className="w-6 h-6 text-blue-gradient-start" />
            </div>
            <div>
              <h3 className="font-bold font-montserrat text-white text-sm">Studio Services</h3>
              <p className="text-xs text-gray-400">Professional production</p>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-gradient-start" />
          </Link>
        </div>
      </section>

      {/* Featured Shows Carousel */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat epic-text-2">
              Featured Shows
            </h2>
            <Link to="/photography-videography" className="text-gray-400 hover:text-gold-gradient-start flex items-center gap-2 font-inter font-bold">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredShows.map((show) => (
                <div 
                  key={show.id} 
                  className="premium-card premium-hover-gold group rounded-2xl overflow-hidden"
                >
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <OptimizedImage 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center premium-hover-gold shadow-2xl">
                        <Play className="w-6 h-6 text-charcoal ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs font-bold">
                        {show.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-gold-gradient text-charcoal rounded-full text-xs font-bold">
                        {show.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-gold-gradient-start transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-gray-400 font-inter mb-4 line-clamp-2 text-sm">
                    {show.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-bold">{show.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{show.views}</span>
                      </div>
                    </div>
                    <button className="btn-secondary px-4 py-2 flex items-center gap-2 text-sm premium-hover-gold">
                      <Play className="w-4 h-4" />
                      <span>Watch</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now with Simple Sliding */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat epic-text-3 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-gold-gradient-start" />
              Trending Now
            </h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>Most watched this week</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 pb-4">
              {trendingShows.map((show) => (
                <div 
                  key={show.id} 
                  className="flex-shrink-0 w-80 premium-card premium-hover-gold group rounded-2xl"
                >
                  <div className="flex gap-4">
                    <div className="relative rounded-xl overflow-hidden flex-shrink-0">
                      <OptimizedImage 
                        src={show.thumbnail} 
                        alt={show.title}
                        className="w-32 h-20 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 text-charcoal ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold font-montserrat mb-1 group-hover:text-gold-gradient-start transition-colors truncate">
                        {show.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{show.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{show.views}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 font-inter text-xs line-clamp-2 mb-3">
                        {show.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-charcoal/50 text-gray-400 rounded-full text-xs">
                          {show.category}
                        </span>
                        <button className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-lg text-xs font-inter font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-1 premium-hover-gold">
                          <Play className="w-3 h-3" />
                          <span>Play</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Shows Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="display-2 font-montserrat mb-4 epic-text">All Shows</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl">
                Explore our complete collection of original series and documentaries
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-charcoal/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-gold-gradient-start w-full md:w-64"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-gradient-start"
                >
                  {sortOptions.map(option => (
                    <option key={option.key} value={option.key}>{option.label}</option>
                  ))}
                </select>
                
                <button className="bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-white hover:bg-charcoal/70 transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gold-gradient text-charcoal'
                    : 'bg-charcoal/50 text-white hover:bg-charcoal/70 border border-white/10'
                } premium-hover-gold`}
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
                className="premium-card premium-hover-gold rounded-2xl"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <OptimizedImage 
                    src={show.thumbnail} 
                    alt={show.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      {show.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-gold-gradient text-charcoal rounded-full text-xs font-bold">
                      {show.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-montserrat mb-2">{show.title}</h3>
                <p className="text-gray-400 font-inter mb-4 line-clamp-2">{show.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{show.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{show.rating}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{show.year}</span>
                </div>
                
                <button className="w-full btn-secondary flex items-center justify-center gap-2 premium-hover-gold py-3">
                  <Play className="w-4 h-4" />
                  <span>Watch {show.episodes} Episodes</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text flex items-center justify-center gap-3">
              <Award className="w-10 h-10 text-gold-gradient-start" />
              Awards & Recognition
            </h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Celebrating excellence in African storytelling and media production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card premium-hover-gold text-center p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gold-gradient/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-gradient-start/30">
                <Award className="w-10 h-10 text-gold-gradient-start" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">Best Documentary Series</h3>
              <p className="text-gray-400 font-inter mb-4">African Media Awards 2023</p>
              <p className="text-gold-gradient-start font-bold">Winner</p>
            </div>
            
            <div className="premium-card premium-hover-gold text-center p-8 rounded-2xl">
              <div className="w-20 h-20 bg-blue-gradient/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-gradient-start/30">
                <Star className="w-10 h-10 text-blue-gradient-start" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">Innovation in Storytelling</h3>
              <p className="text-gray-400 font-inter mb-4">Digital Media Excellence 2023</p>
              <p className="text-blue-gradient-start font-bold">Finalist</p>
            </div>
            
            <div className="premium-card premium-hover-gold text-center p-8 rounded-2xl">
              <div className="w-20 h-20 bg-purple-gradient/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-gradient-start/30">
                <Users className="w-10 h-10 text-purple-gradient-start" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">Community Impact Award</h3>
              <p className="text-gray-400 font-inter mb-4">Social Change Media 2023</p>
              <p className="text-purple-gradient-start font-bold">Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="display-2 font-montserrat mb-6 epic-text">Join the Movement</h2>
          <p className="text-2xl text-gray-400 font-inter mb-10 max-w-3xl mx-auto">
            Subscribe to KGILL TV and get access to exclusive content, behind-the-scenes footage, 
            and early releases of our shows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-8 py-4 premium-hover-gold text-lg">
              Subscribe Now
            </button>
            <button className="btn-secondary px-8 py-4 premium-hover-gold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KGTVPg;