import React, { useState, useEffect } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';

const KGTVPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample show data
  const shows = [
    {
      id: 1,
      title: "Voices of the Youth",
      description: "Documentary series featuring young African changemakers",
      thumbnail: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Documentary",
      duration: "45 min",
      views: "125K",
      rating: 4.8,
      date: "2023-05-15",
      featured: true
    },
    {
      id: 2,
      title: "Sinema Mtaani",
      description: "Community filmmaking projects from Nairobi's streets",
      thumbnail: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Community",
      duration: "30 min",
      views: "89K",
      rating: 4.6,
      date: "2023-04-22"
    },
    {
      id: 3,
      title: "Digital Griot",
      description: "Exploring African storytelling in the digital age",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      duration: "52 min",
      views: "156K",
      rating: 4.9,
      date: "2023-03-10"
    },
    {
      id: 4,
      title: "Innovation Hub",
      description: "Tech entrepreneurs reshaping Africa's future",
      thumbnail: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      duration: "38 min",
      views: "92K",
      rating: 4.5,
      date: "2023-02-18"
    },
    {
      id: 5,
      title: "Climate Warriors",
      description: "Young activists fighting for environmental justice",
      thumbnail: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Environment",
      duration: "41 min",
      views: "78K",
      rating: 4.7,
      date: "2023-01-30"
    },
    {
      id: 6,
      title: "Artisan Stories",
      description: "Traditional crafts in the modern world",
      thumbnail: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      duration: "35 min",
      views: "65K",
      rating: 4.4,
      date: "2022-12-15"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Shows' },
    { key: 'Documentary', label: 'Documentaries' },
    { key: 'Community', label: 'Community' },
    { key: 'Culture', label: 'Culture' },
    { key: 'Technology', label: 'Technology' },
    { key: 'Environment', label: 'Environment' }
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
  const documentaries = shows.filter(show => show.category === 'Documentary');
  const communityShows = shows.filter(show => show.category === 'Community');
  const cultureShows = shows.filter(show => show.category === 'Culture');

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Netflix Style */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={featuredShow.thumbnail} 
            alt={featuredShow.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                FEATURED SHOW
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
            
            <p className="text-xl text-gray-300 font-inter mb-8">
              {featuredShow.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold px-8 py-4">
                <Play className="w-5 h-5" />
                <span>Play Now</span>
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold px-8 py-4">
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Studio Services CTA */}
        <div className="absolute bottom-8 right-8 z-10">
          <Link 
            to="/photography-videography"
            className="premium-card premium-hover-gold flex items-center gap-3 p-4 max-w-xs"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold font-montserrat text-white">Studio Services</h3>
              <p className="text-sm text-gray-400">Professional production</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gold-gradient-start" />
          </Link>
        </div>
      </section>

      {/* Documentaries Row */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-montserrat epic-text-2">Documentaries</h2>
            <Link to="/photography-videography" className="text-gray-400 hover:text-gold-gradient-start flex items-center gap-2">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {documentaries.map((show) => (
                <div 
                  key={show.id} 
                  className="flex-shrink-0 w-64 premium-card premium-hover-gold group"
                >
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Play className="w-5 h-5 text-charcoal ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-charcoal/80 text-white rounded text-xs">
                        {show.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold font-montserrat mb-1 truncate">{show.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{show.rating}</span>
                    <span>•</span>
                    <span>{show.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Shows Row */}
      <section className="py-12 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-montserrat epic-text-3">Community Stories</h2>
            <Link to="/workshops" className="text-gray-400 hover:text-gold-gradient-start flex items-center gap-2">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {communityShows.map((show) => (
                <div 
                  key={show.id} 
                  className="flex-shrink-0 w-64 premium-card premium-hover-gold group"
                >
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Play className="w-5 h-5 text-charcoal ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-charcoal/80 text-white rounded text-xs">
                        {show.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold font-montserrat mb-1 truncate">{show.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{show.rating}</span>
                    <span>•</span>
                    <span>{show.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Shows Row */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-montserrat epic-text">Culture & Arts</h2>
            <Link to="/workshops" className="text-gray-400 hover:text-gold-gradient-start flex items-center gap-2">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {cultureShows.map((show) => (
                <div 
                  key={show.id} 
                  className="flex-shrink-0 w-64 premium-card premium-hover-gold group"
                >
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Play className="w-5 h-5 text-charcoal ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-charcoal/80 text-white rounded text-xs">
                        {show.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold font-montserrat mb-1 truncate">{show.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{show.rating}</span>
                    <span>•</span>
                    <span>{show.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Shows Section */}
      <section className="py-20 bg-charcoal texture-subtle">
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
                <input
                  type="text"
                  placeholder="Search shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-gradient-start w-full md:w-64"
                />
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
                    : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
                } premium-hover-gold`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Shows Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {shows.map((show) => (
              <div 
                key={show.id} 
                className="premium-card premium-hover-gold"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
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
                
                <div className="flex justify-between items-center">
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
                  <button className="btn-secondary px-4 py-2 flex items-center gap-2 text-sm premium-hover-gold">
                    <Play className="w-4 h-4" />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            ))}
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
            <button className="btn-primary px-8 py-4 premium-hover-gold">
              Subscribe Now
            </button>
            <button className="btn-secondary px-8 py-4 premium-hover-gold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KGTVPg;