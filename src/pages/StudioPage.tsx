import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, Image as ImageIcon, User, ShoppingBag, Calendar, Award } from 'lucide-react';

const StudioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Executive Portrait",
      category: "portrait",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Portrait",
      year: "2023",
      client: "Tech Innovations Ltd"
    },
    {
      id: 2,
      title: "Luxury Fashion Campaign",
      category: "fashion",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Fashion",
      year: "2023",
      client: "Marigold Collections"
    },
    {
      id: 3,
      title: "Wedding Ceremony",
      category: "event",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Wedding",
      year: "2023",
      client: "The Mwangi Wedding"
    },
    {
      id: 4,
      title: "Product Lifestyle",
      category: "commercial",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Commercial",
      year: "2022",
      client: "Urban Essentials"
    },
    {
      id: 5,
      title: "Documentary Series",
      category: "creative",
      image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Documentary",
      year: "2021",
      client: "NGO Partners"
    },
    {
      id: 6,
      title: "Graduation Portraits",
      category: "portrait",
      image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Portrait",
      year: "2023",
      client: "University of Nairobi"
    },
    {
      id: 7,
      title: "Real Estate Showcase",
      category: "commercial",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Real Estate",
      year: "2023",
      client: "Luxury Homes Agency"
    },
    {
      id: 8,
      title: "Music Video Still",
      category: "creative",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Music",
      year: "2023",
      client: "Emerging Artists"
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL', icon: Grid },
    { id: 'portrait', name: 'PORTRAIT', icon: User },
    { id: 'fashion', name: 'FASHION', icon: ShoppingBag },
    { id: 'event', name: 'EVENT', icon: Calendar },
    { id: 'commercial', name: 'COMMERCIAL', icon: Award }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Handle keyboard navigation for lightbox
  const handleKeyDown = useCallback((event) => {
    if (!selectedImage) return;
    
    if (event.key === 'Escape') {
      setSelectedImage(null);
    } else if (event.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (event.key === 'ArrowRight') {
      navigateImage('next');
    }
  }, [selectedImage]);

  // Navigate between images
  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  // Handle scroll for logo visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-gradient border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-400 font-inter">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header/Filter Bar */}
      <header className="sticky top-0 z-40 bg-charcoal/80 backdrop-blur-xl border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 py-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-inter font-bold text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gold-gradient text-charcoal shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Gallery */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="masonry-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Chrome Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-2xl border-2 border-transparent bg-gradient-to-r from-chrome via-gold-gradient to-chrome blur-sm opacity-0 group-hover:opacity-70 animate-pulse"></div>
                </div>
                
                {/* Information Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <h3 className="text-xl font-bold font-serif text-white mb-2 drop-shadow-lg">{item.title}</h3>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="text-sm font-medium uppercase tracking-wider font-inter">{item.type}</span>
                    <span className="text-sm font-inter">{item.year}</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Logo Watermark */}
      <div className={`fixed bottom-6 left-6 z-30 transition-opacity duration-500 ${showLogo ? 'opacity-30' : 'opacity-0'}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-charcoal" />
          </div>
          <span className="text-white font-bold text-lg font-serif">KGILL STUDIO</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-7xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-gold-gradient transition-colors z-10 p-3 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden bg-charcoal shadow-3xl border border-gold-gradient/20">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[75vh] mx-auto transition-all duration-700 hover:brightness-105"
              />
              
              {/* Image Information */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 via-charcoal/80 to-transparent p-8 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4 drop-shadow-2xl">
                    {selectedImage.title}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-gray-300">
                    <span className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-gold-gradient"></span>
                      <span className="font-bold text-lg font-inter">{selectedImage.type}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gold-gradient" />
                      <span className="font-bold text-lg font-inter">{selectedImage.year}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gold-gradient" />
                      <span className="font-bold text-lg font-inter">{selectedImage.client}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioPage;