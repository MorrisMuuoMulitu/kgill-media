import React, { useState, useEffect } from 'react';
import { Camera, Video, Users, Heart, Star, Play, Calendar, MapPin, Mail, Phone, User, Home, Award, ArrowRight, ExternalLink, X } from 'lucide-react';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ title: '', image: '', type: '', year: '' });

  // Add keyboard event listener for ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) { // ESC key
        setShowModal(false);
      }
    };
    
    if (showModal) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showModal]);

  // Helper function to get higher resolution image URLs for lightbox
  const getHighResImageUrl = (url) => {
    // Replace w=800 with w=1920 for higher resolution
    return url.replace('w=800', 'w=1920');
  };

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
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden premium-bg">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                KGILL+ STUDIO
              </span>
            </div>
            
            <h1 className="display-1 font-orbitron mb-6 leading-tight text-cyan animate-fade-in-up">
              <span className="block">KGILL STUDIO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto animate-fade-in-up-delayed">
              Professional studio photography services for individuals and businesses
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold">
                <span>Book a Session</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Introduction Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                  OUR STUDIO
                </span>
              </div>
              
              <h2 className="display-2 font-montserrat mb-6 epic-text">Professional Studio Experience</h2>
              
              <p className="text-gray-300 font-inter mb-6 text-lg">
                Our studio provides the perfect setting for professional, comfortable, and relaxed shoots, ensuring that our clients feel at ease and confident in front of the camera.
              </p>
              
              <p className="text-gray-300 font-inter mb-8">
                With our state-of-the-art equipment and cutting-edge editing software, we are committed to delivering exceptional quality images that exceed your expectations.
              </p>
              
              <button className="btn-primary px-8 py-4 premium-hover-gold flex items-center gap-3">
                <span>Book Your Studio Session</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-gold-gradient mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-2">KGILL+ STUDIO</h3>
                  <p className="text-gray-300">Professional Photography & Videography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sessions Gallery */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Studio Sessions</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Explore our latest studio photography sessions
            </p>
          </div>
          
          {/* Studio Sessions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-12 p-4 md:p-6">
            {/* Each card is now a masterpiece */}
            {[
              { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg?updatedAt=1757778687521", title: "Midnight Bass" },
              { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg?updatedAt=1757778686276", title: "Vocal Layers" },
              { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg?updatedAt=1757778686459", title: "Synth Dreams" },
              { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg?updatedAt=1757778688452", title: "Drum Mastery" },
              { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg?updatedAt=1757778687035", title: "Acoustic Soul" },
              { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg?updatedAt=1757778689476", title: "Mixing Magic" }
            ].map((session) => (
              <div
                key={session.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-[1deg] shadow-xl hover:shadow-2xl hover:shadow-gold/10 bg-gradient-to-br from-slate-900/50 to-slate-800/70 backdrop-blur-sm border border-slate-700/30"
                style={{
                  backgroundImage: `url(${session.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '450px', // Base height
                }}
                onClick={() => {
                  setSelectedImage({
                    title: session.title,
                    image: session.src,
                    type: 'Studio Session',
                    year: '2024'
                  });
                  setShowModal(true);
                }}
              >
                {/* Animated Gold Border Glow (Pulsing) */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-0 group-hover:opacity-60 animate-pulse"></div>
                </div>

                {/* Subtle Audio Waveform Overlay (SVG Background) */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,50 C20,30 40,70 60,40 C80,10 100,60 100,50 L100,100 L0,100 Z" fill="currentColor" className="text-yellow-300/20" />
                  </svg>
                </div>

                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-all duration-600 ease-out"></div>

                {/* Floating Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-1 drop-shadow-lg">
                    {session.title}
                  </h3>
                  <p className="text-yellow-200 text-sm font-light tracking-wide drop-shadow">
                    Studio Session • Immersive Sound Design
                  </p>
                </div>

                {/* Sparkling Camera Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 scale-75 group-hover:scale-125">
                  <div className="relative">
                    <Camera className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" />
                    {/* Animated Sparkles */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-bounce"
                        style={{
                          top: `${-10 + Math.random() * 20}%`,
                          left: `${-10 + Math.random() * 20}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '1.5s',
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Parallax Depth Layer (Subtle Movement) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.1) 100%)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 premium-hover-gold flex items-center gap-3 mx-auto">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Our Services</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`premium-card premium-hover-gold cursor-pointer transition-all duration-300 ${
                  activeService === service.id ? 'ring-2 ring-gold-gradient' : ''
                }`}
                onClick={() => setActiveService(activeService === service.id ? 'all' : service.id)}
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-4">{service.title}</h3>
                <p className="text-gray-400 font-inter mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-gradient"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-gray-300 font-inter text-sm mt-4">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Specialized Services</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Expertise in capturing life's most important moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Portrait Headshots */}
            <div className="premium-card premium-hover-gold">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat">Portrait Headshots</h3>
                  <p className="text-gray-400">For corporates, artists, and celebrities</p>
                </div>
              </div>
              
              <p className="text-gray-300 font-inter mb-4">
                Headshots are professional photographs that typically show a person's head and shoulders. They are often used for business and career purposes, such as on LinkedIn profiles, business cards, or on company websites.
              </p>
              
              <p className="text-gray-300 font-inter">
                Headshots are a valuable tool for creating a strong first impression and showcasing your professionalism. They can also help to build trust with potential clients or employers, and can be a powerful marketing tool for individuals and businesses alike.
              </p>
              
              {/* Headshots Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Professional Headshot',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110" 
                    alt="Professional Headshot 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Portrait
                    </span>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Corporate Headshot',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276" 
                    alt="Corporate Headshot"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Corporate
                    </span>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Business Headshot',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg?updatedAt=1757781880859',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg?updatedAt=1757781880859" 
                    alt="Business Headshot"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Business
                    </span>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Executive Headshot',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg?updatedAt=1757781886251',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg?updatedAt=1757781886251" 
                    alt="Executive Headshot"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Executive
                    </span>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Professional Portrait',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg?updatedAt=1757781885300',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg?updatedAt=1757781885300" 
                    alt="Professional Portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Portrait
                    </span>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer group" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Headshot Session',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot5.jpg?updatedAt=1757781884664',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot5.jpg?updatedAt=1757781884664" 
                    alt="Headshot Session"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      Session
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Our Portfolio</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              A showcase of our creative work
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gold-gradient text-charcoal'
                  : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
              } premium-hover-gold`}
            >
              All Projects
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveCategory(service.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeCategory === service.id
                    ? 'bg-gold-gradient text-charcoal'
                    : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
                } premium-hover-gold`}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="premium-card premium-hover-gold group cursor-pointer"
                onClick={() => {
                  setSelectedImage(item);
                  setShowModal(true);
                }}
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-montserrat mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{services.find(s => s.id === item.category)?.title || item.category}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Get In Touch</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Ready to book your session? Contact us today
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold font-montserrat mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Email</h4>
                    <a href="mailto:kgillcompany@gmail.com" className="text-gray-300 hover:text-gold-gradient transition-colors text-lg">
                      kgillcompany@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Phone</h4>
                    <a href="tel:0797553148" className="text-gray-300 hover:text-gold-gradient transition-colors block text-lg">
                      0797 553 148
                    </a>
                    <a href="tel:0757749883" className="text-gray-300 hover:text-gold-gradient transition-colors text-lg">
                      0757 749 883
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Studio Location</h4>
                    <p className="text-gray-300 text-lg">
                      Nairobi Innovation Hub<br />
                      Ngong Road, Nairobi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-charcoal/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-montserrat mb-6">Book Your Session</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-inter mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-charcoal border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-gradient"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-charcoal border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-gradient"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter mb-2">Service Interest</label>
                  <select className="w-full bg-charcoal border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-gradient">
                    <option>Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-inter mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-charcoal border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-gradient"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full py-4 premium-hover-gold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-gradient transition-colors z-10"
            >
              <X className="w-10 h-10" />
            </button>
            
            <div 
              className="relative rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={getHighResImageUrl(selectedImage.image)} 
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6">
                <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{selectedImage.title}</h3>
                <div className="flex flex-wrap gap-4 text-gray-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-gradient"></span>
                    {selectedImage.type}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-gradient"></span>
                    {selectedImage.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyVideographyPg;