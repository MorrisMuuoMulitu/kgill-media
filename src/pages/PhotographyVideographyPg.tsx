import React, { useState, useEffect } from 'react';
import { Aperture, Bike, Building2, CalendarDays, Camera, Heart, HeartHandshake, Home, Mail, MapPin, Phone, Shirt, User, Users, X, ArrowRight } from 'lucide-react';

import CompactGridGallery from '../components/CompactGridGallery';
import SkeletonLoader from '../components/SkeletonLoader';


import { Gallery } from 'react-grid-gallery';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [showFullCollectionModal, setShowFullCollectionModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ title: '', image: '', type: '', year: '' });
  const [bookingService, setBookingService] = useState('');
  const [bookingPackage, setBookingPackage] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [openFAQs, setOpenFAQs] = useState(Array(8).fill(false));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted, setting loading to true");
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("Loading complete, setting loading to false");
    }, 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const getHighResImageUrl = (url: string) => {
    if (url.includes('?')) {
      return `${url}&tr=w-2000`;
    }
    return `${url}?tr=w-2000`;
  };


  // Services data
  const services = [
    {
      id: 'studio',
      category: 'Personal',
      title: 'Studio Photography',
      icon: <Aperture className="w-8 h-8" />,
      description: 'Professional in-studio portrait and commercial photography',
      features: [
        'Portrait Headshots',
        'Lifestyle Shoots',
        'Personal Branding',
        'Product Photography'
      ],
      details: 'State-of-the-art studio for professional, comfortable shoots. Perfect for LinkedIn headshots, product photography, and lifestyle shots for your personal brand.'
    },
    {
      id: 'wedding',
      category: 'Celeations',
      title: 'Wedding Photography & Videography',
      icon: <HeartHandshake className="w-8 h-8" />,
      description: 'Full-day wedding coverage with customizable packages',
      features: [
        'Pre-wedding Shoots',
        'Ceremony Coverage',
        'Reception Videos',
        'Album Creation'
      ],
      details: 'Capture every special moment with our discreet, professional team specializing in emotional storytelling to preserve your memories.'
    },
    {
      id: 'corporate',
      category: 'Business',
      title: 'Corporate Photography',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Professional business photography for brands and teams',
      features: [
        'Headshots',
        'Team Photos',
        'Event Coverage',
        'Product Photography'
      ],
      details: 'High-quality corporate photography to capture your brand essence. Services include headshots, team photos, events, and product photography with fast turnaround times.'
    },
    {
      id: 'fashion',
      category: 'Creative',
      title: 'Fashion Photography',
      icon: <Shirt className="w-8 h-8" />,
      description: 'Fashion shoots highlighting diverse styles and cultural expressions',
      features: [
        'Designer Collaborations',
        'Style Portraits',
        'Cultural Wear',
        'Event Coverage'
      ],
      details: 'Showcasing diverse styles from Arabian wear to street vintage. We create imagery that celebrates fashion and cultural identity.'
    },
    {
      id: 'real-estate',
      category: 'Commercial',
      title: 'Real Estate Photography',
      icon: <Home className="w-8 h-8" />,
      description: 'Professional property listing photos that sell',
      features: [
        'Interior Photography',
        'Exterior Shots',
        'Virtual Tours',
        'Drone Photography'
      ],
      details: 'High-quality property images that attract buyers. We highlight your property\'s best features to maximize appeal and selling potential.'
    },
    {
      id: 'events',
      category: 'Entertainment',
      title: 'Event Coverage',
      icon: <CalendarDays className="w-8 h-8" />,
      description: 'Comprehensive coverage of festivals, galas, and cultural events',
      features: [
        'Award Shows',
        'Fashion Galas',
        'Cultural Festivals',
        'Talent Competitions'
      ],
      details: 'We capture the essence of events with our experience documenting cultural celebrations and special occasions.'
    },
    {
      id: 'sports',
      category: 'Specialized',
      title: 'Sports Photography',
      icon: <Bike className="w-8 h-8" />,
      description: 'Action shots capturing sports and competition moments',
      features: [
        'Motorsports Coverage',
        'Racing Events',
        'Competition Photography',
        'High-Speed Shots'
      ],
      details: 'Specializing in high-speed, high-precision shots for motorsports and competitions. We ensure we capture every moment of action.'
    }
  ];

  // Portfolio data
  const portfolioItems = [
    // Studio Photography
    {
      id: 1,
      title: "Midnight Bass",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg?updatedAt=1757778687521",
      width: 320,
      height: 174,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 2,
      title: "Vocal Layers",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg?updatedAt=1757778686276",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 3,
      title: "Synth Dreams",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg?updatedAt=1757778686459",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 4,
      title: "Drum Mastery",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg?updatedAt=1757778688452",
      width: 320,
      height: 174,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 5,
      title: "Acoustic Soul",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg?updatedAt=1757778687035",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 6,
      title: "Mixing Magic",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg?updatedAt=1757778689476",
      width: 320,
      height: 174,
      type: "Studio Session",
      year: "2024"
    },
    // Wedding Photography
    {
      id: 7,
      title: "Wedding Moments",
      category: "wedding",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed.jpg?updatedAt=1759398774220",
      width: 320,
      height: 212,
      type: "Wedding",
      year: "2024"
    },
    {
      id: 8,
      title: "Couple Love",
      category: "wedding",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg?updatedAt=1759398775225",
      width: 320,
      height: 174,
      type: "Wedding",
      year: "2024"
    },
    {
      id: 9,
      title: "Special Ceremony",
      category: "wedding",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed3.jpg",
      width: 320,
      height: 212,
      type: "Wedding",
      year: "2024"
    },
    // Corporate Photography
    {
      id: 10,
      title: "Corporate Team Photo",
      category: "corporate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE1.jpg?updatedAt=1759414890450",
      width: 320,
      height: 174,
      type: "Corporate",
      year: "2024"
    },
    {
      id: 11,
      title: "Board Meeting",
      category: "corporate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE10.jpg?updatedAt=1759414889734",
      width: 320,
      height: 212,
      type: "Corporate",
      year: "2024"
    },
    {
      id: 12,
      title: "Executive Portrait",
      category: "corporate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE11.jpg?updatedAt=1759414892507",
      width: 320,
      height: 174,
      type: "Corporate",
      year: "2024"
    },
    // Fashion Photography
    {
      id: 13,
      title: "Kenya Fashion Awards",
      category: "fashion",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event1.jpg",
      width: 320,
      height: 212,
      type: "Fashion",
      year: "2024"
    },
    {
      id: 14,
      title: "Laikipia Fashion Gala",
      category: "fashion",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event2.jpg",
      width: 320,
      height: 174,
      type: "Fashion",
      year: "2024"
    },
    // Real Estate Photography
    {
      id: 15,
      title: "Modern Living Room",
      category: "real-estate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate1.png",
      width: 320,
      height: 212,
      type: "Real Estate",
      year: "2024"
    },
    {
      id: 16,
      title: "Luxury Kitchen",
      category: "real-estate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate2.png",
      width: 320,
      height: 174,
      type: "Real Estate",
      year: "2024"
    },
    // Event Coverage
    {
      id: 17,
      title: "Kenya Colour Run",
      category: "events",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event3.jpg",
      width: 320,
      height: 212,
      type: "Event",
      year: "2024"
    },
    {
      id: 18,
      title: "Clever Art Event",
      category: "events",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event4.jpg",
      width: 320,
      height: 174,
      type: "Event",
      year: "2024"
    },
    // Sports Photography
    {
      id: 19,
      title: "Motorsport Action",
      category: "sports",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276",
      width: 320,
      height: 212,
      type: "Sports",
      year: "2024"
    },
    {
      id: 20,
      title: "Competition Highlights",
      category: "sports",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot9.jpg?updatedAt=1757781886781",
      width: 320,
      height: 174,
      type: "Sports",
      year: "2024"
    }
  ];

  const packages = [
    {
      serviceId: 'studio',
      packages: [
        {
          name: 'Basic',
          price: 'Ksh 5,000',
          features: ['1 hour session', '10 edited photos', 'Online gallery'],
        },
        {
          name: 'Standard',
          price: 'Ksh 10,000',
          features: ['2 hour session', '20 edited photos', 'Online gallery', '1 outfit change'],
        },
        {
          name: 'Premium',
          price: 'Ksh 15,000',
          features: ['3 hour session', '30 edited photos', 'Online gallery', '2 outfit changes', 'Makeup artist'],
        },
      ],
    },
    {
      serviceId: 'wedding',
      packages: [
        {
          name: 'Ceremony',
          price: 'Ksh 50,000',
          features: ['4 hours coverage', '200 edited photos', 'Online gallery'],
        },
        {
          name: 'Full Day',
          price: 'Ksh 100,000',
          features: ['8 hours coverage', '400 edited photos', 'Online gallery', 'Pre-wedding shoot'],
        },
        {
          name: 'Premium',
          price: 'Ksh 150,000',
          features: ['12 hours coverage', '600 edited photos', 'Online gallery', 'Pre-wedding shoot', 'Wedding album'],
        },
      ],
    },
    {
      serviceId: 'corporate',
      packages: [
        {
          name: 'Headshots',
          price: 'Ksh 10,000',
          features: ['1 hour session', '10 edited photos per person', 'Online gallery'],
        },
        {
          name: 'Team Photos',
          price: 'Ksh 20,000',
          features: ['2 hour session', '20 edited photos', 'Online gallery'],
        },
        {
          name: 'Event Coverage',
          price: 'Ksh 30,000',
          features: ['4 hours coverage', '200 edited photos', 'Online gallery'],
        },
      ],
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : services.some(s => s.id === activeCategory) 
      // If activeCategory is a service id, filter by that specific service
      ? portfolioItems.filter(item => item.category === activeCategory)
      // If activeCategory is a category name, filter by all services in that category
      : portfolioItems.filter(item => {
          const service = services.find(s => s.id === item.category);
          return service && service.category.toLowerCase() === activeCategory.toLowerCase();
        });

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden premium-bg" aria-label="Hero section">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-1 font-orbitron mb-6 leading-tight text-cyan animate-fade-in-up">
              <span className="block">KGILL+ STUDIO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto animate-fade-in-up-delayed">
              Professional photography and videography services for individuals and businesses
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
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                  OUR STUDIO
                </span>
              </div>
              
              <h2 className="display-2 font-montserrat mb-6 epic-text">Professional Studio Experience</h2>
              
              <p className="text-gray-300 font-inter mb-6 text-lg">
                Professional, comfortable shoots for exceptional results.
              </p>
              
              <p className="text-gray-300 font-inter mb-8">
                State-of-the-art equipment and editing software for quality images.
              </p>
              
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

      {/* Services Showcase - Majestic Service Buttons */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate-900 to-black relative overflow-x-hidden" id="services-section">
        {/* Animated SVG Divider */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#goldGradient)" fillOpacity="0.3" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD700" />
              <stop offset="0.5" stopColor="#FFB347" />
              <stop offset="1" stopColor="#FF5E62" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-gradient/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Capture Your Moments, Tell Your Story</h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>
          
          {/* Service Buttons List */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.filter(service => portfolioItems.some(item => item.category === service.id)).map((service) => (
              <button
                key={service.id}
                className={`btn-primary premium-hover-gold flex items-center gap-3 ${
                  activeService === service.id ? 'bg-gold-gradient text-charcoal' : ''
                }`}
                onClick={() => setActiveService(activeService === service.id ? 'all' : service.id)}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          
          {/* Expanded Service Details Panel */}
          {activeService !== 'all' && (
            <div className="relative z-20 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border border-gold-gradient/30 rounded-3xl p-8 mb-16 animate-fade-in">
              <button
                onClick={() => setActiveService('all')}
                className="absolute top-4 right-4 text-white hover:text-gold-gradient transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              {services.map(service => (
                activeService === service.id && (
                  <div key={service.id} className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-gradient/20 to-terracotta/20 flex items-center justify-center">
                        <div className="w-6 h-6 text-gold-gradient">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold font-montserrat text-white">{service.title}</h3>
                        <p className="text-gold-gradient text-sm font-bold tracking-wider">{service.category}</p>
                      </div>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 font-inter text-lg mb-8 leading-relaxed">
                        {service.details}
                      </p>
                      
                      <h4 className="text-xl font-bold font-montserrat text-gold-gradient mb-6 tracking-wider">WHAT WE OFFER:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-gold-gradient/30 transition-all duration-300"
                          >
                            <div className="w-3 h-3 rounded-full bg-gold-gradient mt-2 flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center pt-6 border-t border-slate-700/50">
                        <button 
                          className="btn-secondary premium-hover-gold flex items-center gap-3 mx-auto"
                          onClick={() => {
                            let sectionId = 'portfolio-section';
                            switch (service.id) {
                              case 'wedding':
                                sectionId = 'portfolio-wedding';
                                break;
                              case 'corporate':
                                sectionId = 'portfolio-corporate';
                                break;
                              case 'events':
                                sectionId = 'portfolio-events';
                                break;
                              case 'real-estate':
                                sectionId = 'portfolio-real-estate';
                                break;
                              case 'graduation':
                                sectionId = 'portfolio-graduation';
                                break;
                              case 'africanism':
                                sectionId = 'portfolio-africanism';
                                break;
                              case 'fashion':
                                sectionId = 'portfolio-fashion';
                                break;
                              case 'product':
                                sectionId = 'portfolio-product';
                                break;
                            }
                            const portfolioSection = document.getElementById(sectionId);
                            if (portfolioSection) {
                              portfolioSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          <span>View Portfolio</span>
                          <Camera className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="text-center pt-6 border-t border-slate-700/50">
                        <h4 className="text-xl font-bold font-montserrat text-gold-gradient mb-6 tracking-wider">PACKAGES</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {packages.find(p => p.serviceId === service.id)?.packages.map(pkg => (
                            <div key={pkg.name} className="glass-morphism border border-gold-gradient/30 rounded-2xl p-6">
                              <h5 className="text-2xl font-bold font-montserrat text-white mb-4">{pkg.name}</h5>
                              <p className="text-4xl font-bold text-gold-gradient mb-4">{pkg.price}</p>
                              <ul className="text-gray-300 font-inter space-y-2 mb-6">
                                {pkg.features.map(feature => (
                                  <li key={feature} className="flex items-center">
                                    <span className="text-gold-gradient mr-2">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className="btn-primary premium-hover-gold w-full"
                                onClick={() => {
                                  setBookingService(service.id);
                                  setBookingPackage(pkg.name);
                                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
          
          {/* Call to Action */}
          <div className="text-center mt-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gold-gradient blur-lg opacity-75 rounded-full animate-pulse"></div>
              <button 
                className="btn-primary px-10 py-5 premium-hover-gold relative flex items-center gap-3 text-xl font-bold"
                onClick={() => {
                  // Scroll to contact section or open booking modal
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-400 font-inter mt-6 max-w-2xl mx-auto">
              Ready to elevate your visual presence? Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Sessions Gallery */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Craft Your Image, Define Your Brand</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Create a strong professional brand image that showcases your unique style and personality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                  BOOK YOUR SLOT
                </span>
              </div>
              
              <h3 className="text-3xl font-bold font-montserrat mb-6 text-white">Professional Studio Experience</h3>
              
              <p className="text-gray-300 font-inter mb-6 text-lg">
                Experienced photographers capturing your essence with tailored, high-quality images.
              </p>
              
              <p className="text-gray-300 font-inter mb-8">
                From LinkedIn headshots to e-commerce product photos, we've got you covered with professional guidance.
              </p>
              
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
          
          {/* Studio Sessions Gallery */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">Explore Our Work</h3>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              State-of-the-art equipment, cutting-edge editing, exceptional results.
            </p>
          </div>
          
          {/* Studio Sessions Grid - More compact layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 p-2 sm:p-4">
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-gold/20 bg-gradient-to-br from-slate-900/50 to-slate-800/70 border border-slate-700/50"
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
                {/* Background Image Container - Full size, not cropped */}
                <div 
                  className="w-full h-80 md:h-96 bg-cover bg-center bg-no-repeat rounded-2xl transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${session.src})` }}
                  aria-label={`Studio Session: ${session.title}`}
                >
                  {/* Loading indicator */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border-4 border-gold-gradient border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
                
                {/* Animated Gold Border Glow (Pulsing) */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-2xl border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-70 animate-pulse"></div>
                </div>

                {/* Subtle Audio Waveform Overlay (SVG Background) */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,50 C20,30 40,70 60,40 C80,10 100,60 100,50 L100,100 L0,100 Z" fill="currentColor" className="text-yellow-300/30" />
                  </svg>
                </div>

                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-600 ease-out rounded-2xl"></div>

                {/* Floating Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1 drop-shadow-2xl">
                    {session.title}
                  </h3>
                  <p className="text-yellow-200 text-sm md:text-base font-light tracking-wide drop-shadow-lg">
                    Studio Session
                  </p>
                </div>

                {/* Sparkling Camera Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 scale-90 group-hover:scale-125">
                  <div className="relative">
                    <Camera className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-2xl" />
                    {/* Animated Sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"
                        style={{
                          top: `${-15 + Math.random() * 30}%`,
                          left: `${-15 + Math.random() * 30}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1.5s',
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gold-gradient blur-lg opacity-75 rounded-full animate-pulse"></div>
              <button className="btn-primary px-10 py-5 premium-hover-gold relative flex items-center gap-3 text-xl font-bold">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section - Glassmorphism, Animated SVG Divider, Premium Gradients */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-charcoal to-black relative overflow-x-hidden">
        {/* Animated SVG Divider */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#specialGoldGradient)" fillOpacity="0.3" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <defs>
            <linearGradient id="specialGoldGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD700" />
              <stop offset="0.5" stopColor="#FFB347" />
              <stop offset="1" stopColor="#FF5E62" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="display-2 font-montserrat mb-6 epic-text bg-gradient-to-r from-gold-gradient-start via-terracotta to-marigold bg-clip-text text-transparent animate-gradient-move">Expertise for Every Occasion</h2>
            <p className="text-2xl text-gray-300 font-inter max-w-3xl mx-auto animate-fade-in-up">
              Expertise in capturing life's most important moments
            </p>
          </div>
          <div className="grid grid-cols-1 gap-24">
            {/* Portrait Headshots - Full-screen Gallery */}
            <div className="w-full" id="portfolio-corporate">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <User className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Portrait Headshots</h3>
                  <p className="text-gray-300">For corporates, artists, and celebrities</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl">
                Professional photographs that show a person's head and shoulders, perfect for LinkedIn profiles, business cards, and company websites.
              </p>
              <p className="text-gray-200 font-inter text-lg animate-fade-in-up max-w-3xl">
                A valuable tool for creating a strong first impression, showcasing professionalism, and building trust with potential clients or employers. An essential marketing tool for individuals and businesses alike.
              </p>
              
              {/* Massive Full-Screen Headshots Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">EXCLUSIVE HEADSHOT COLLECTION</h4>
                <CompactGridGallery 
                  title="Exclusive Headshot Collection"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276", title: "Corporate Headshot" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot9.jpg?updatedAt=1757781886781", title: "Artist Portrait" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg?updatedAt=1757781886251", title: "Business Professional" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot6.jpg?updatedAt=1757781885957", title: "Creative Professional" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot8.jpg?updatedAt=1757781885499", title: "Industry Leader" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg?updatedAt=1757781885300", title: "Executive Portrait" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot5.jpg?updatedAt=1757781884664", title: "Professional Headshot" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110", title: "Corporate Executive" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg?updatedAt=1757781880859", title: "Artistic Portrait" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot7.jpg?updatedAt=1757781874606", title: "Executive Headshot" }
                  ]} 
                />
              </div>
            </div>
            
            {/* Event Photography */}
            <div className="w-full" id="portfolio-events">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <Camera className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Event Photography</h3>
                  <p className="text-gray-300">Professional coverage for memorable occasions</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl">
                Event Photography are some of our major areas in both photography and video coverage. We have been to several events doing coverage.
              </p>
              <p className="text-gray-200 font-inter text-lg animate-fade-in-up max-w-3xl">
                Our experience includes Kenya Fashion Awards 2018, Laikipia County Fashion Gala 2018, Kenya Colour Run Festival, Clever Art Event, Pawa Festival, Jkuat Awards & Mr & Miss Jkuat 2018, Dream Kona Events, Tuvibe Festival, Weddings, Baby Showers, Birthday Parties, Kibera Talent Search, Mr & Miss Kibera, The Millenials, and many other special occasions.
              </p>
              
              {/* Event Photography Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">EVENT HIGHLIGHTS</h4>
                <CompactGridGallery 
                  title="Event Highlights"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event1.jpg", title: "Kenya Fashion Awards" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event2.jpg", title: "Laikipia Fashion Gala" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event3.jpg", title: "Kenya Colour Run" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event4.jpg", title: "Clever Art Event" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event5.jpg", title: "Pawa Festival" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event6.jpg", title: "Jkuat Awards" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event7.jpg", title: "Mr & Miss Jkuat" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event8.jpg", title: "Dream Kona Events" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event9.jpg", title: "Tuvibe Festival" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event10.jpg", title: "Wedding Ceremony" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event11.jpg", title: "Baby Shower" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event12.jpg", title: "Birthday Party" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event13.jpg", title: "Kibera Talent Search" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event14.jpg", title: "Mr & Miss Kibera" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event15.jpg", title: "The Millenials" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event16.jpg", title: "Special Occasion" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event17.jpg", title: "Event Coverage" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event18.jpg", title: "Memorable Moment" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event19.jpg", title: "Celebration" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event20.jpg", title: "Festival" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event21.jpg", title: "Special Event" }
                  ]} 
                />
              </div>
            </div>
            
            {/* Wedding Photography & Videography */}
            <div className="w-full" id="portfolio-wedding">
              <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <div className="md:w-1/2">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                      <Heart className="w-8 h-8 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-montserrat text-white drop-shadow-lg">Wedding Photography & Videography</h3>
                      <p className="text-gray-300 text-lg">Complete wedding media coverage</p>
                    </div>
                  </div>
                  <p className="text-gray-200 font-inter mb-6 text-lg animate-fade-in-up">
                    Comprehensive wedding media coverage with the latest equipment to capture every special moment.
                  </p>
                  <p className="text-gray-200 font-inter mb-8 text-lg animate-fade-in-up">
                    Stunning images and videos that preserve your memories with customizable packages and discreet service.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary flex items-center gap-2">
                      <span>View Packages</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="btn-secondary flex items-center gap-2">
                      <span>Contact Us</span>
                    </button>
                  </div>
                </div>
                
                <div className="md:w-1/2 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-3xl flex items-center justify-center">
                      <div className="text-center p-8">
                        <Heart className="w-16 h-16 text-gold-gradient mx-auto mb-4" />
                        <h3 className="text-2xl font-bold font-montserrat text-white mb-2">KGILL+ WEDDINGS</h3>
                        <p className="text-gray-300">Professional Wedding Coverage</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gold-gradient text-charcoal px-6 py-3 rounded-full font-bold shadow-xl">
                    <span className="flex items-center gap-2">
                      <span>✨</span> Premium Packages
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Wedding Gallery */}
              <div className="mt-12">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-12 text-center epic-text">Wedding Highlights</h4>
                <CompactGridGallery 
                  title="Wedding Highlights"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed.jpg?updatedAt=1759398774220", title: "Wedding Moments" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg?updatedAt=1759398775225", title: "Couple Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed3.jpg", title: "Special Ceremony" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed4.jpg", title: "Happy Couple" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed5.jpg", title: "Wedding Joy" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding16.jpg?updatedAt=1759397148221", title: "Celebration Highlights" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg", title: "Romantic Moments" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed8.jpg", title: "Wedding Bliss" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed9.jpg", title: "Love Story" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed10.jpg", title: "Forever Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding10.jpg?updatedAt=1759397148343", title: "Forever Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding11.jpg?updatedAt=1759397148387", title: "Forever Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding31.jpg?updatedAt=1759397148442", title: "Forever Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding5.jpg?updatedAt=1759397148239", title: "Forever Love" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding30.jpg?updatedAt=1759397148749", title: "Forever Love" }
                  ]} 
                />
              </div>
            </div>
            
            {/* Corporate Photography */}
            <div className="w-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <Users className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Corporate Photography</h3>
                  <p className="text-gray-300">Professional business photography for brands and teams</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl">
                Professional corporate photography that captures your brand essence and showcases your team.
              </p>
              
              {/* Corporate Photography Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">CORPORATE PHOTOGRAPHY GALLERY</h4>
                <CompactGridGallery 
                  title="Corporate Photography Gallery"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE1.jpg?updatedAt=1759414890450", title: "Corporate Team Photo" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE10.jpg?updatedAt=1759414889734", title: "Board Meeting" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE11.jpg?updatedAt=1759414892507", title: "Executive Portrait" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE12.jpg?updatedAt=1759414889763", title: "Office Culture" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE13.jpg?updatedAt=1759414897700", title: "Business Meeting" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE18.jpg?updatedAt=1759414890314", title: "Corporate Event" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE17.jpg?updatedAt=1759414906205", title: "Team Collaboration" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE16.jpg?updatedAt=1759414892553", title: "Business Presentation" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE15.jpg?updatedAt=1759414889617", title: "Office Workspace" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE14.jpg?updatedAt=1759414889538", title: "Product Photography" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE19.jpg?updatedAt=1759414890528", title: "Corporate Portrait" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE2.jpg?updatedAt=1759414892388", title: "Team Building" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE20.jpg?updatedAt=1759414889815", title: "Business Professionals" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE21.jpg?updatedAt=1759414902409", title: "Conference Room" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE22.jpg?updatedAt=1759414890213", title: "Corporate Headshot" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE5.jpg?updatedAt=1759414902386", title: "Business Event" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE4.jpg?updatedAt=1759414892488", title: "Office Professionals" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE3.jpg?updatedAt=1759414889673", title: "Corporate Meeting" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE24.jpg?updatedAt=1759414906762", title: "Executive Meeting" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE23.jpg?updatedAt=1759414892400", title: "Team Photo" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE6.jpg?updatedAt=1759414889643", title: "Business Workshop" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE7.jpg?updatedAt=1759414889833", title: "Corporate Presentation" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE8.jpg?updatedAt=1759414890058", title: "Office Team" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE9.jpg?updatedAt=1759414890024", title: "Business Professionals" }
                  ]} 
                />
              </div>
            </div>

            {/* Real Estate Photography */}
            <div className="w-full" id="portfolio-real-estate">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <MapPin className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Real Estate Photography</h3>
                  <p className="text-gray-300">Professional property listing photos that sell</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl">
                High-quality property images that attract buyers. We highlight your property's best features to maximize appeal and selling potential.
              </p>
              
              {/* Real Estate Photography Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">PREMIUM PROPERTY SHOWCASE</h4>
                <CompactGridGallery 
                  title="Premium Property Showcase"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate1.png", title: "Modern Living Room" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate2.png", title: "Luxury Kitchen" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate3.png", title: "Spacious Bedroom" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate4.png", title: "Elegant Bathroom" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate5.png", title: "Stunning Exterior" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate6.png", title: "Beautiful Garden" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate7.png", title: "Modern Office Space" }
                  ]} 
                />
              </div>
            </div>

            {/* Graduation Shoots */}
            <div className="w-full" id="portfolio-graduation">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <User className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Graduation Shoots</h3>
                  <p className="text-gray-300">Professional milestone photography for your achievement</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl">
                Kgill Plus Studio offers professional and high-quality graduation photography services to help capture and celebrate this milestone achievement.
              </p>
              
              {/* Graduation Shoots Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">GRADUATION MEMORIES</h4>
                <CompactGridGallery 
                  title="Graduation Memories"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation1.jpg", title: "Academic Achievement" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation2.jpg", title: "Cap & Gown" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation3.jpg", title: "Proud Graduate" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation4.jpg", title: "Celebration Moment" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation5.jpg", title: "Academic Pride" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation6.jpg", title: "Milestone Celebration" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation7.jpg?updatedAt=1759469659138", title: "Graduation Joy" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation8.jpg?updatedAt=1759469658920", title: "Academic Success" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation9.jpg?updatedAt=1759469658977", title: "Future Ahead" }
                  ]} 
                />
              </div>

            </div>

            {/* Africanism Section */}
            <div className="w-full mt-20" id="portfolio-africanism">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <Camera className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Africanism</h3>
                  <p className="text-gray-300">Celebrating the wealth of African culture</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-4 text-lg animate-fade-in-up max-w-3xl italic">
                "I've got to where I am in life not because of something I brought to the world but through something I found - the wealth of African culture."
              </p>
              <p className="text-gray-200 font-inter mb-8 text-lg animate-fade-in-up max-w-3xl">
                It's obvious that the rest of the world loves high African culture - African culture, period.
              </p>
              
              {/* Africanism Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">AFRICANISM</h4>
                <CompactGridGallery 
                  title="Africanism"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism2.jpg?updatedAt=1759474239925", title: "African Culture" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism.jpg?updatedAt=1759474239572", title: "African Heritage" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism7.jpg?updatedAt=1759474239390", title: "Cultural Expression" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism8.jpg?updatedAt=1759474239393", title: "African Beauty" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism6.jpg?updatedAt=1759474239201", title: "Cultural Pride" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism3.jpg?updatedAt=1759474239013", title: "African Essence" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism4.jpg?updatedAt=1759474238982", title: "Cultural Richness" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism9.jpg?updatedAt=1759474239331", title: "African Identity" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism5.jpg?updatedAt=1759474239165", title: "Cultural Heritage" }
                  ]} 
                />
              </div>
            </div>

            {/* Fashion Meet n Greet Hangout Section */}
            <div className="w-full mt-20" id="portfolio-fashion">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <Shirt className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Kgill Fashion Meet n Greet Hangout</h3>
                  <p className="text-gray-300">Identifying your style and bringing out the fashionista in you</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-8 text-lg animate-fade-in-up max-w-3xl">
                It's all about fashion culture - identifying your fashion style & bringing it out to be an outstanding fashionista. Join us in celebrating individual style, self-expression, and the art of fashion.
              </p>
              
              {/* Fashion Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">FASHION MEET N GREET</h4>
                <CompactGridGallery 
                  title="Fashion Meet n Greet Hangout"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion1.jpg", title: "Fashion Forward" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion2.jpg", title: "Style Icon" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion3.jpg", title: "Street Style" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion4.jpg", title: "Fashion Culture" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion5.jpg", title: "Trendsetter" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion6.jpg", title: "Fashion Statement" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion7.jpg", title: "Style Expression" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion8.jpg", title: "Fashion Identity" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion12.jpg", title: "Outstanding Style" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion11.jpg", title: "Fashion Vibes" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion10.jpg", title: "Fashionista Life" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion9.jpg", title: "Style Journey" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion15.jpg", title: "Fashion Meets" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion13.jpg", title: "Style Community" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion14.jpg", title: "Fashion Hangout" }
                  ]} 
                />
              </div>
            </div>

            {/* Product Photography Section */}
            <div className="w-full mt-20" id="portfolio-product">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce">
                  <Camera className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-white drop-shadow-lg">Product Photography</h3>
                  <p className="text-gray-300">Professional product images that sell and captivate</p>
                </div>
              </div>
              <p className="text-gray-200 font-inter mb-8 text-lg animate-fade-in-up max-w-3xl">
                High-quality product photography that showcases your items in the best light. From e-commerce listings to marketing campaigns, we create stunning visuals that highlight your product's unique features and drive sales.
              </p>
              
              {/* Product Photography Gallery */}
              <div className="mt-8 relative z-20">
                <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-8 text-center epic-text">PRODUCT PHOTOGRAPHY</h4>
                <CompactGridGallery 
                  title="Product Photography"
                  images={[
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product1.jpg", title: "Product Showcase" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product2.jpg", title: "Commercial Photography" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product3.jpg", title: "Professional Styling" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product4.jpg", title: "Detail Shots" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product5.jpg", title: "E-commerce Ready" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product6.jpg", title: "Brand Photography" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product7.jpg", title: "Marketing Visuals" },
                    { src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product8.jpg", title: "Product Presentation" }
                  ]} 
                />
              </div>
            </div>

            </div>
          </div>
      </section>





      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Your Questions, Answered</h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Everything you need to know about our services and booking process
            </p>
          </div>
          
          <div className="space-y-6">
            {[ 
              {
                question: "How far in advance should I book a session?",
                answer: "We recommend booking at least 2-3 weeks in advance for regular sessions and 1-2 months for weddings or large events. During peak seasons, we may book up to 2 months in advance."
              },
              {
                question: "What equipment do you use?",
                answer: "We use professional-grade cameras including Canon and Sony full-frame models with a variety of lenses. We also have professional lighting equipment, reflectors, and other accessories to ensure optimal results in any environment."
              },
              {
                question: "How many photos will I receive?",
                answer: "The number varies based on the package and session length. Typically, portrait sessions yield 20-50 edited photos, event coverage offers 100-500+ photos, and wedding packages can include 500-1000+ high-resolution images."
              },
              {
                question: "How long does it take to receive my photos?",
                answer: "Portrait sessions: 1-2 weeks, Event coverage: 2-3 weeks, Wedding packages: 3-4 weeks. Rush delivery options are available for an additional fee."
              },
              {
                question: "Can I request specific edits or retouching?",
                answer: "Yes! Our premium packages include basic retouching. Additional retouching, creative edits, and special requests are available at competitive rates. We'll discuss your preferences during the consultation."
              },
              {
                question: "Do you travel for shoots?",
                answer: "Yes, we offer on-location services within Nairobi and surrounding areas. Travel fees may apply for locations beyond 30km from our studio. We also cover events and weddings across Kenya."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Cancellations made more than 48 hours before the session are fully refundable. Cancellations within 48 hours are subject to a 50% fee. Less than 24 hours' notice results in a 100% charge. We're happy to reschedule for emergencies."
              },
              {
                question: "Do you offer photo printing services?",
                answer: "Yes, we offer professional printing services for your selected images. We partner with premium printing labs to ensure gallery-quality prints on various paper types and sizes."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-morphism border border-gold-gradient/30 rounded-xl overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => {
                    const newOpenFAQs = [...openFAQs];
                    newOpenFAQs[index] = !newOpenFAQs[index];
                    setOpenFAQs(newOpenFAQs);
                  }}
                >
                  <h3 className="text-lg font-bold font-montserrat text-white">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-gold-gradient transform transition-transform ${openFAQs[index] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQs[index] && (
                  <div className="px-6 pb-6 text-gray-300 font-inter">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Tool */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Find Your Perfect Package</h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              Compare our different service packages to find the perfect match for your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-left font-montserrat font-bold text-lg">Feature</th>
                  {services.map(service => (
                    <th key={service.id} className="py-4 px-6 text-center font-montserrat font-bold">
                      {service.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-slate-800/30">
                  <td className="py-4 px-6 font-medium">Perfect For</td>
                  {services.map(service => (
                    <td key={service.id} className="py-4 px-6 text-center">
                      {service.details.substring(0, 50) + '...'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800 hover:bg-slate-800/30">
                  <td className="py-4 px-6 font-medium">Key Features</td>
                  {services.map(service => (
                    <td key={service.id} className="py-4 px-6 text-center">
                      <ul className="text-left space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold-gradient mr-2">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800 hover:bg-slate-800/30">
                  <td className="py-4 px-6 font-medium">Delivery Time</td>
                  {services.map(service => (
                    <td key={service.id} className="py-4 px-6 text-center">
                      {service.id.includes('wedding') ? '3-4 weeks' : 
                       service.id.includes('event') ? '2-3 weeks' : 
                       service.id.includes('sports') ? '1-2 weeks' : '1-2 weeks'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800 hover:bg-slate-800/30">
                  <td className="py-4 px-6 font-medium">Photos/Videos</td>
                  {services.map(service => (
                    <td key={service.id} className="py-4 px-6 text-center">
                      {service.id.includes('wedding') ? '500+ images' : 
                       service.id.includes('event') ? '100-300 images' : 
                       service.id.includes('portrait') ? '20-50 edited' : 
                       service.id.includes('fashion') ? '30-80 edited' : 
                       service.id.includes('real-estate') ? '20-60 images' : 
                       service.id.includes('sports') ? '200+ action shots' : '10-50 images'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Starting From</td>
                  {services.map(service => (
                    <td key={service.id} className="py-4 px-6 text-center">
                      <button className="bg-gradient-to-r from-gold-gradient to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Book Now
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      

      {/* Contact Section - Premium, Animated, Accessible */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate-900 to-black relative overflow-x-hidden">
        {/* Animated SVG Divider */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#contactGoldGradient)" fillOpacity="0.3" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <defs>
            <linearGradient id="contactGoldGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD700" />
              <stop offset="0.5" stopColor="#FFB347" />
              <stop offset="1" stopColor="#FF5E62" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="display-2 font-montserrat mb-6 epic-text bg-gradient-to-r from-gold-gradient-start via-terracotta to-marigold bg-clip-text text-transparent animate-gradient-move">Let's Create Something Amazing Together</h2>
            <p className="text-2xl text-gray-300 font-inter max-w-3xl mx-auto animate-fade-in-up">
              Ready to book your session? Contact us today
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold font-montserrat mb-8 text-white drop-shadow-lg">Contact Information</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <Mail className="w-8 h-8 text-gold-gradient flex-shrink-0 mt-1 animate-bounce" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Email</h4>
                    <a href="mailto:kgillcompany@gmail.com" className="text-gray-300 hover:text-gold-gradient transition-colors text-lg">
                      kgillcompany@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="w-8 h-8 text-gold-gradient flex-shrink-0 mt-1 animate-bounce" />
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
                <div className="flex items-start gap-6">
                  <MapPin className="w-8 h-8 text-gold-gradient flex-shrink-0 mt-1 animate-bounce" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Studio Location</h4>
                    <p className="text-gray-300 text-lg">
                      Nairobi Innovation Hub<br />
                      Ngong Road, Nairobi
                    </p>
                  </div>
                </div>
                
                {/* Additional Contact Options */}
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-4">Quick Connect</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://wa.me/254797553148" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <span>WhatsApp</span>
                    </a>
                    <a href="https://facebook.com/kgillmedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <span>Facebook</span>
                    </a>
                    <a href="https://instagram.com/kgillmedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <span>Instagram</span>
                    </a>
                    <a href="https://linkedin.com/company/kgill-media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors">
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-1">
              <div className="glass-morphism border border-gold-gradient/30 shadow-2xl rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold font-montserrat mb-6 text-white drop-shadow-lg">Quick Booking</h3>
                <form 
                  className="space-y-4" 
                  autoComplete="off"
                  aria-label="Book your studio session"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                    const form = e.target as HTMLFormElement;
                    const formData = {
                      name: (form.elements.namedItem('name') as HTMLInputElement).value,
                      email: (form.elements.namedItem('email') as HTMLInputElement).value,
                      service: bookingService,
                      package: bookingPackage,
                      date: bookingDate,
                      time: bookingTime,
                      phone: (form.elements.namedItem('phone') as HTMLInputElement).value
                    };
                    console.log('Booking form submitted:', formData);
                    alert('Thank you for your booking request! We will contact you soon.');
                    // Reset form after submission
                    (e.target as HTMLFormElement).reset();
                    setBookingService('');
                    setBookingPackage('');
                    setBookingDate('');
                    setBookingTime('');
                  }}
                >
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="name">Full Name</label>
                      <input 
                        id="name"
                        type="text" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                        placeholder="Your name"
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="email">Email</label>
                      <input 
                        id="email"
                        type="email" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                        placeholder="Your email"
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="service">Service Interest</label>
                      <select 
                        id="service"
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                        required
                        aria-required="true"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="package">Package</label>
                      <select 
                        id="package"
                        value={bookingPackage}
                        onChange={(e) => setBookingPackage(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                        required
                        aria-required="true"
                      >
                        <option value="">Select a package</option>
                        {bookingService && services.find(s => s.id === bookingService) && (
                          <>
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                            <option value="custom">Custom</option>
                          </>
                        )}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="date">Date</label>
                        <input 
                          id="date"
                          type="date" 
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                          required
                          aria-required="true"
                        />
                      </div>
                      
                      <div className="relative">
                        <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="time">Time</label>
                        <input 
                          id="time"
                          type="time" 
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-gray-300 font-inter mb-2 text-sm" htmlFor="phone">Phone</label>
                      <input 
                        id="phone"
                        type="tel" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-gradient transition-all duration-300"
                        placeholder="Your phone number"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full py-4 premium-hover-gold">
                    Request Callback
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 text-center">
                    Or call us directly:<br />
                    <a href="tel:0797553148" className="text-gold-gradient font-bold hover:underline">0797 553 148</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile-specific features */}
          <div className="mt-12 md:hidden">
            <div className="glass-morphism border border-gold-gradient/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold font-montserrat text-white mb-4">On-the-Go Options</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-gold-gradient to-terracotta text-charcoal px-4 py-3 rounded-lg font-bold">Call Now</button>
                <button className="bg-gradient-to-r from-cyan to-slate-blue text-charcoal px-4 py-3 rounded-lg font-bold">WhatsApp</button>
                <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-4 py-3 rounded-lg font-bold">Callback</button>
                <button className="bg-gradient-to-r from-terracotta to-marigold text-charcoal px-4 py-3 rounded-lg font-bold">Text Us</button>
              </div>
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
              <div className="relative">
                <img 
                  src={getHighResImageUrl(selectedImage.image)} 
                  alt={`${selectedImage.title} - ${selectedImage.type} by KGILL+ Studio`}
                  className="w-full h-full object-contain max-h-[80vh]"
                  onLoad={(e) => {
                    // Hide loading indicator when image loads
                    const loadingIndicator = e.currentTarget.previousElementSibling;
                    if (loadingIndicator) {
                      loadingIndicator.classList.add('opacity-0');
                      loadingIndicator.classList.add('pointer-events-none');
                    }
                  }}
                />
                {/* Loading indicator for lightbox image */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70">
                  <div className="w-16 h-16 border-4 border-gold-gradient border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
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
      
      {/* Full Wedding Collection Modal */}
      {showFullCollectionModal && (
  <div 
    className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
    onClick={() => setShowFullCollectionModal(false)}
  >
    <div className="relative max-w-7xl w-full max-h-[95vh] overflow-y-auto bg-slate-900/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl">
      <button
        onClick={() => setShowFullCollectionModal(false)}
        className="absolute -top-12 right-0 text-white hover:text-gold-gradient transition-colors z-10"
      >
        <X className="w-10 h-10" />
      </button>
      
      <div className="p-8">
        <div className="text-center mb-12">
          <h2 className="display-2 font-montserrat mb-6 epic-text">Full Wedding Collection</h2>
          <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
            Explore our complete portfolio of wedding photography, capturing every precious moment from ceremonies to celebrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding10.jpg?updatedAt=1759397148343", title: "Elegant Ceremony" },
            { id: 12, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding11.jpg?updatedAt=1759397148387", title: "Bridal Portrait" },
            { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding31.jpg?updatedAt=1759397148442", title: "Reception Highlights" },
            { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding5.jpg?updatedAt=1759397148239", title: "Garden Ceremony" },
            { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding30.jpg?updatedAt=1759397148749", title: "Vintage Style" },
            { id: 16, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed12.jpg", title: "Beach Wedding" },
            { id: 17, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed13.jpg", title: "Cultural Celebration" },
            { id: 18, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed14.jpg", title: "Rustic Theme" },
            { id: 19, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed15.jpg", title: "Luxury Venue" },
            { id: 20, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed16.jpg", title: "Evening Glamour" }
          ].map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 shadow-xl hover:shadow-2xl"
              onClick={() => {
                setSelectedImage({
                  title: photo.title,
                  image: photo.src,
                  type: 'Wedding Photography',
                  year: '2024'
                });
                setShowFullCollectionModal(false);
                setShowModal(true);
              }}
            >
              <div className="aspect-[3/4]">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-white font-bold text-sm truncate">{photo.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="btn-primary px-8 py-4 premium-hover-gold inline-flex items-center gap-3 text-lg font-bold"
            onClick={() => setShowFullCollectionModal(false)}
          >
            <span>Close Collection</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>

  );

};

export default PhotographyVideographyPg;