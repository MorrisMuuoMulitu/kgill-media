import React, { useState, useEffect } from 'react';
import { Camera, Video, Users, Heart, Star, Play, Calendar, MapPin, Mail, Phone, User, Home, Award, ArrowRight, ExternalLink, X, Menu, Sparkles, Crown, Target, Zap, Clock } from 'lucide-react';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ title: '', image: '', type: '', year: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data
  const services = [
    {
      id: 'studio',
      title: 'Studio Photography',
      icon: <Camera className="w-8 h-8" />,
      description: 'Professional in-studio portrait and commercial photography',
      features: [
        'Portrait Headshots',
        'Corporate Photography',
        'Product Photography',
        'Lifestyle Shoots'
      ],
      details: 'Our state-of-the-art studio provides the perfect setting for professional, comfortable, and relaxed shoots. Whether you need headshots for your LinkedIn profile, product photography for your e-commerce store, or lifestyle shots for your personal brand, our studio services have got you covered.'
    }
  ];

  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Headshots",
      category: "studio",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Portrait",
      year: "2023"
    },
    {
      id: 2,
      title: "Wedding Ceremony",
      category: "wedding",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Wedding",
      year: "2023"
    },
    {
      id: 3,
      title: "Fashion Event",
      category: "event",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Event",
      year: "2022"
    },
    {
      id: 4,
      title: "Brand Campaign",
      category: "commercial",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Commercial",
      year: "2022"
    },
    {
      id: 5,
      title: "Documentary Film",
      category: "creative",
      image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Documentary",
      year: "2021"
    },
    {
      id: 6,
      title: "Graduation Portraits",
      category: "studio",
      image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Portrait",
      year: "2023"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section - Divine Elegance */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-bg">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-gradient blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-marigold blur-3xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-terracotta blur-3xl opacity-10 animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gold-gradient opacity-10 animate-float"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center mb-6">
              <Crown className="w-12 h-12 text-gold-gradient mr-3" />
              <span className="px-6 py-3 bg-gold-gradient text-charcoal rounded-full text-lg font-bold tracking-wider">
                DIVINE PHOTOGRAPHY STUDIO
              </span>
              <Sparkles className="w-12 h-12 text-gold-gradient ml-3" />
            </div>
            
            <h1 className="display-1 font-serif mb-8 leading-tight text-white animate-fade-in-up">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                KGILL STUDIO
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-gold-gradient mt-4 tracking-wide">
                Where Vision Meets Perfection
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-300 font-inter max-w-4xl mx-auto mb-12 animate-fade-in-up-delayed">
              Crafting timeless moments through divine artistry and unparalleled excellence
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up-delayed-more">
              <button className="btn-primary flex items-center gap-4 premium-hover-gold px-10 py-5 text-xl font-bold">
                <span>Book Your Session</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <button className="btn-secondary flex items-center gap-4 premium-hover-gold px-10 py-5 text-xl font-bold">
                <span>View Portfolio</span>
                <Zap className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-gold-gradient flex justify-center p-1">
            <div className="w-2 h-2 bg-gold-gradient rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Divine Introduction */}
      <section className="py-32 bg-gradient-to-br from-charcoal via-slate-900 to-charcoal relative overflow-hidden">
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold-gradient/20 rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-gold-gradient/20 rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 bg-gold-gradient text-charcoal rounded-full text-lg font-bold tracking-wider">
                  <Target className="w-6 h-6 mr-2" />
                  SACRED SPACE
                </span>
              </div>
              
              <h2 className="display-2 font-serif mb-8 text-white leading-tight">
                Divine Studio <br />
                <span className="text-gold-gradient">Experience</span>
              </h2>
              
              <p className="text-2xl text-gray-300 font-inter leading-relaxed">
                Enter a realm where creativity transcends boundaries and every frame tells a sacred story. 
                Our studio is more than a space—it's a sanctuary where visions become reality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gold-gradient/20">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Divine Lighting</h3>
                  <p className="text-gray-400 text-sm">Heaven-sent illumination</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gold-gradient/20">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Sacred Artistry</h3>
                  <p className="text-gray-400 text-sm">Divine craftsmanship</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gold-gradient/20">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Eternal Beauty</h3>
                  <p className="text-gray-400 text-sm">Timeless elegance</p>
                </div>
              </div>
              
              <button className="btn-primary flex items-center gap-4 premium-hover-gold px-10 py-5 text-xl font-bold mt-8">
                <span>Discover Our Sacred Space</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative">
              {/* Floating Image Gallery */}
              <div className="relative h-full">
                <div className="absolute top-0 left-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-gradient/30 transform rotate-6 hover:rotate-3 transition-all duration-700">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Sacred Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute top-16 right-0 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-gradient/30 transform -rotate-3 hover:rotate-0 transition-all duration-700 delay-100">
                  <img 
                    src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Divine Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-1/4 w-60 h-76 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-gradient/30 transform rotate-2 hover:-rotate-1 transition-all duration-700 delay-200">
                  <img 
                    src="https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Sacred Moment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Services - Celestial Offerings */}
      <section className="py-32 bg-charcoal texture-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-gradient blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-marigold blur-3xl opacity-15 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold-gradient mr-3" />
              <span className="px-6 py-3 bg-slate-800 text-gold-gradient rounded-full text-lg font-bold tracking-wider">
                CELESTIAL OFFERINGS
              </span>
              <Sparkles className="w-8 h-8 text-gold-gradient ml-3" />
            </div>
            
            <h2 className="display-2 font-serif mb-8 text-white leading-tight">
              Divine <span className="text-gold-gradient">Services</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Sacred offerings crafted to illuminate your essence and eternal beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="premium-card premium-hover-gold group relative overflow-hidden rounded-3xl p-8 transform transition-all duration-700 hover:-translate-y-4"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <div className="w-full h-full rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-70 animate-pulse"></div>
                </div>
                
                {/* Sacred Geometry Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M50,15 L85,50 L50,85 L15,50 Z" fill="currentColor" className="text-gold-gradient/20" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gold-gradient flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold font-serif text-white mb-6 text-center group-hover:text-gold-gradient transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 font-inter mb-8 text-center text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 group-hover:text-gray-300 transition-colors duration-500">
                        <div className="w-2 h-2 rounded-full bg-gold-gradient flex-shrink-0"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-gray-500 font-inter text-center text-base">
                    {service.details}
                  </p>
                  
                  <div className="text-center mt-8">
                    <button className="inline-flex items-center gap-2 text-gold-gradient font-bold group-hover:underline transition-all duration-500">
                      <span>Explore Sacred Offering</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supreme Portrait Headshots Gallery - Royal Treatment */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-charcoal to-slate-900 relative overflow-hidden">
        {/* Royal Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-gradient blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-marigold blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Crown className="w-10 h-10 text-gold-gradient mr-4" />
              <span className="px-8 py-4 bg-gold-gradient text-charcoal rounded-full text-xl font-bold tracking-wider shadow-2xl">
                ROYAL PORTRAITURE
              </span>
              <Crown className="w-10 h-10 text-gold-gradient ml-4" />
            </div>
            
            <h2 className="display-2 font-serif mb-8 text-white leading-tight">
              Supreme <span className="text-gold-gradient">Headshots</span>
            </h2>
            
            <p className="text-3xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed">
              Professional portraits that elevate your personal brand and command attention
            </p>
          </div>
          
          {/* Supreme Headshots Showcase - Museum-Quality Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Featured Headshot - Largest Display */}
            <div 
              className="premium-card premium-hover-gold group relative overflow-hidden rounded-4xl cursor-pointer transform transition-all duration-700 hover:-translate-y-6 shadow-3xl hover:shadow-4xl"
              onClick={() => {
                setSelectedImage({
                  title: "Executive Leadership Portrait",
                  image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110",
                  type: "Executive Portrait",
                  year: "2024"
                });
                setShowModal(true);
              }}
            >
              {/* Supreme Background Image - Full Resolution */}
              <div 
                className="w-full h-[700px] bg-cover bg-center bg-no-repeat rounded-4xl transition-all duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110)` }}
              ></div>
              
              {/* Supreme Light Effect - Museum Quality */}
              <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <div className="w-full h-full rounded-4xl border-8 border-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 blur-3xl opacity-0 group-hover:opacity-80 animate-pulse"></div>
              </div>
              
              {/* Supreme Overlay - Professional Finish */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700 ease-out rounded-4xl"></div>
              
              {/* Supreme Information Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-4 rounded-full bg-gold-gradient"></div>
                    <span className="text-2xl font-bold text-gold-gradient tracking-wider">FEATURED PORTRAIT</span>
                  </div>
                  
                  <h3 className="text-5xl font-bold font-serif text-white mb-6 drop-shadow-2xl leading-tight">
                    Executive Leadership Portrait
                  </h3>
                  
                  <div className="flex flex-wrap gap-8 text-gray-300">
                    <span className="flex items-center gap-3">
                      <User className="w-6 h-6 text-gold-gradient" />
                      <span className="text-2xl font-bold">Executive Portrait</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-gold-gradient" />
                      <span className="text-2xl font-bold">2024</span>
                    </span>
                  </div>
                  
                  <div className="absolute top-8 right-8">
                    <div className="px-6 py-3 bg-gold-gradient text-charcoal rounded-full text-lg font-bold shadow-2xl">
                      <span className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        <span>Premium</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Supreme Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-4xl"></div>
            </div>
            
            {/* Secondary Headshots Grid - Curated Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { 
                  id: 2, 
                  src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276", 
                  title: "Corporate Professional", 
                  type: "Business Portrait" 
                },
                { 
                  id: 3, 
                  src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg?updatedAt=1757781880859", 
                  title: "Creative Director", 
                  type: "Artistic Portrait" 
                },
                { 
                  id: 4, 
                  src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg?updatedAt=1757781886251", 
                  title: "Senior Executive", 
                  type: "Leadership Portrait" 
                },
                { 
                  id: 5, 
                  src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg?updatedAt=1757781885300", 
                  title: "Professional Artist", 
                  type: "Creative Portrait" 
                }
              ].map((headshot) => (
                <div 
                  key={headshot.id}
                  className="premium-card premium-hover-gold group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-3xl"
                  onClick={() => {
                    setSelectedImage({
                      title: headshot.title,
                      image: headshot.src,
                      type: headshot.type,
                      year: "2024"
                    });
                    setShowModal(true);
                  }}
                >
                  {/* Secondary Image Container */}
                  <div 
                    className="w-full h-80 bg-cover bg-center bg-no-repeat rounded-3xl transition-all duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${headshot.src})` }}
                  ></div>
                  
                  {/* Secondary Light Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-full h-full rounded-3xl border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-0 group-hover:opacity-60 animate-pulse"></div>
                  </div>
                  
                  {/* Secondary Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500 ease-out rounded-3xl"></div>
                  
                  {/* Secondary Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold font-serif text-white mb-3 drop-shadow-xl">
                      {headshot.title}
                    </h3>
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-lg font-bold">{headshot.type}</span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold-gradient"></span>
                        <span className="text-lg font-bold">2024</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Secondary Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Supreme CTA - Exclusive Offer */}
          <div className="text-center mt-24">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gold-gradient blur-2xl opacity-75 rounded-full animate-pulse"></div>
              <button 
                className="btn-primary px-12 py-6 premium-hover-gold relative flex items-center gap-4 text-2xl font-bold shadow-2xl hover:shadow-3xl"
                onClick={() => {
                  // Scroll to contact section or open modal
                }}
              >
                <span>Schedule Your Supreme Session</span>
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
            
            <p className="text-2xl text-gray-400 font-inter mt-8 max-w-3xl mx-auto">
              Limited slots available for premium portrait sessions. Book now to secure your place in our royal clientele roster.
            </p>
          </div>
        </div>
      </section>

      {/* Divine Portfolio - Sacred Gallery */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-gold-gradient mr-3" />
              <span className="px-6 py-3 bg-slate-800 text-gold-gradient rounded-full text-lg font-bold tracking-wider">
                SACRED GALLERY
              </span>
              <Camera className="w-8 h-8 text-gold-gradient ml-3" />
            </div>
            
            <h2 className="display-2 font-serif mb-8 text-white leading-tight">
              Divine <span className="text-gold-gradient">Portfolio</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Timeless moments captured in celestial light and eternal beauty
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gold-gradient text-charcoal shadow-2xl'
                  : 'bg-slate-800 text-white hover:bg-slate-700 shadow-lg'
              } premium-hover-gold`}
            >
              All Sacred Works
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveCategory(service.id)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeCategory === service.id
                    ? 'bg-gold-gradient text-charcoal shadow-2xl'
                    : 'bg-slate-800 text-white hover:bg-slate-700 shadow-lg'
                } premium-hover-gold`}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid - Divine Masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`premium-card premium-hover-gold group cursor-pointer relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:-translate-y-3 ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => {
                  setSelectedImage(item);
                  setShowModal(true);
                }}
              >
                {/* Divine Light Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="w-full h-full rounded-3xl border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-60 animate-pulse"></div>
                </div>
                
                <div className="relative rounded-3xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Heavenly Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Sacred Symbol */}
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold">
                      {item.type}
                    </span>
                  </div>
                  
                  {/* Divine Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-serif text-white mb-3 drop-shadow-xl">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-lg">{services.find(s => s.id === item.category)?.title || item.category}</span>
                      <span className="text-lg font-bold text-gold-gradient">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Heavenly Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Testimonials - Sacred Words */}
      <section className="py-32 bg-charcoal texture-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-gradient blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-gold-gradient mr-3 fill-current" />
              <span className="px-6 py-3 bg-slate-800 text-gold-gradient rounded-full text-lg font-bold tracking-wider">
                SACRED WORDS
              </span>
              <Star className="w-8 h-8 text-gold-gradient ml-3 fill-current" />
            </div>
            
            <h2 className="display-2 font-serif mb-8 text-white leading-tight">
              Divine <span className="text-gold-gradient">Testimonies</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Sacred words from souls touched by divine artistry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                id: 1,
                name: "James Mwangi",
                role: "CEO, Tech Innovations Ltd",
                content: "The corporate headshots KGILL+ Studio did for our team were exceptional. They captured our professionalism and personality perfectly.",
                rating: 5
              },
              {
                id: 2,
                name: "Sarah Omondi",
                role: "Bride",
                content: "Our wedding photography was beyond our expectations. Every moment was captured beautifully, and the memories are priceless.",
                rating: 5
              },
              {
                id: 3,
                name: "Robert Kimani",
                role: "Real Estate Agent",
                content: "The real estate photography helped sell my listings 40% faster. The quality and attention to detail are unmatched.",
                rating: 5
              }
            ].map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="premium-card premium-hover-gold group relative overflow-hidden rounded-3xl p-8"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-full rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-70 animate-pulse"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                      <span className="text-charcoal font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold font-serif text-white text-xl">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 font-inter italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Sacred Quote Marks */}
                  <div className="absolute top-6 right-6 text-gold-gradient/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Contact - Sacred Connection */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-charcoal to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-gold-gradient mr-3 fill-current" />
              <span className="px-6 py-3 bg-slate-800 text-gold-gradient rounded-full text-lg font-bold tracking-wider">
                SACRED CONNECTION
              </span>
              <Heart className="w-8 h-8 text-gold-gradient ml-3 fill-current" />
            </div>
            
            <h2 className="display-2 font-serif mb-8 text-white leading-tight">
              Divine <span className="text-gold-gradient">Communion</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Begin your sacred journey with divine artistry and eternal beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-4xl font-bold font-serif text-white mb-8">Sacred Channels of Communication</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-2xl mb-3">Divine Correspondence</h4>
                    <a href="mailto:kgillcompany@gmail.com" className="text-2xl text-gray-300 hover:text-gold-gradient transition-colors duration-300">
                      kgillcompany@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-2xl mb-3">Sacred Voice</h4>
                    <div className="space-y-2">
                      <a href="tel:0797553148" className="text-2xl text-gray-300 hover:text-gold-gradient transition-colors duration-300 block">
                        0797 553 148
                      </a>
                      <a href="tel:0757749883" className="text-2xl text-gray-300 hover:text-gold-gradient transition-colors duration-300 block">
                        0757 749 883
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-2xl mb-3">Sacred Sanctuary</h4>
                    <p className="text-2xl text-gray-300">
                      Nairobi Innovation Hub<br />
                      Ngong Road, Nairobi
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sacred Hours */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gold-gradient/20">
                <h4 className="font-bold text-white text-2xl mb-6 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-gold-gradient" />
                  Sacred Hours
                </h4>
                <div className="space-y-4 text-xl text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-gold-gradient">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gold-gradient">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold-gradient">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-10 border border-gold-gradient/30 shadow-2xl">
              <h3 className="text-3xl font-bold font-serif text-white mb-8">Begin Your Sacred Journey</h3>
              
              <form className="space-y-8">
                <div>
                  <label className="block text-gray-300 font-inter text-xl mb-4">Sacred Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border-2 border-gold-gradient/30 rounded-2xl px-6 py-5 text-white text-xl focus:outline-none focus:ring-4 focus:ring-gold-gradient/50 transition-all duration-300"
                    placeholder="Your divine name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter text-xl mb-4">Celestial Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-900/50 border-2 border-gold-gradient/30 rounded-2xl px-6 py-5 text-white text-xl focus:outline-none focus:ring-4 focus:ring-gold-gradient/50 transition-all duration-300"
                    placeholder="Your celestial correspondence"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter text-xl mb-4">Sacred Offering Interest</label>
                  <select className="w-full bg-slate-900/50 border-2 border-gold-gradient/30 rounded-2xl px-6 py-5 text-white text-xl focus:outline-none focus:ring-4 focus:ring-gold-gradient/50 transition-all duration-300">
                    <option>Select a sacred offering</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter text-xl mb-4">Divine Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-slate-900/50 border-2 border-gold-gradient/30 rounded-2xl px-6 py-5 text-white text-xl focus:outline-none focus:ring-4 focus:ring-gold-gradient/50 transition-all duration-300 resize-none"
                    placeholder="Share your divine vision..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full py-6 premium-hover-gold flex items-center justify-center gap-4 text-2xl font-bold">
                  <span>Begin Sacred Communion</span>
                  <ArrowRight className="w-8 h-8" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Footer - Eternal Blessing */}
      <footer className="py-20 bg-charcoal border-t border-gold-gradient/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="mb-10">
              <div className="inline-flex items-center justify-center mb-6">
                <Crown className="w-12 h-12 text-gold-gradient mr-4" />
                <h2 className="text-4xl font-bold font-serif text-white">KGILL STUDIO</h2>
                <Crown className="w-12 h-12 text-gold-gradient ml-4" />
              </div>
              <p className="text-2xl text-gray-400 font-inter max-w-2xl mx-auto">
                Where divine vision meets eternal artistry
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-xl text-gray-400 hover:text-gold-gradient transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="border-t border-gold-gradient/20 pt-10">
              <p className="text-gray-500 text-lg">
                © 2024 KGILL STUDIO. All divine rights reserved. Crafted with celestial love.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Divine Lightbox Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-16 right-0 text-white hover:text-gold-gradient transition-colors z-10 p-3 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg"
            >
              <X className="w-12 h-12" />
            </button>
            
            <div 
              className="relative rounded-3xl overflow-hidden shadow-3xl border-4 border-gold-gradient/30"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[75vh] mx-auto transition-all duration-700 hover:brightness-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 via-charcoal/80 to-transparent p-10 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 drop-shadow-2xl">
                    {selectedImage.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-gray-300">
                    <span className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-gold-gradient"></span>
                      <span className="font-bold text-xl">{selectedImage.type}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-gold-gradient" />
                      <span className="font-bold text-xl">{selectedImage.year}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  // Previous image logic would go here
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  // Next image logic would go here
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyVideographyPg;