import React, { useState, useEffect } from 'react';
import { Aperture, Award, Bike, Building2, CalendarDays, Camera, Heart, HeartHandshake, Home, Mail, MapPin, Phone, Shirt, User, Users, X, ArrowRight, Zap } from 'lucide-react';

import ImmersiveGallery from '../components/ImmersiveGallery';
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
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg",
      width: 320,
      height: 174,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 2,
      title: "Vocal Layers",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 3,
      title: "Synth Dreams",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 4,
      title: "Drum Mastery",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg",
      width: 320,
      height: 174,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 5,
      title: "Acoustic Soul",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg",
      width: 320,
      height: 212,
      type: "Studio Session",
      year: "2024"
    },
    {
      id: 6,
      title: "Mixing Magic",
      category: "studio",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg",
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
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed.jpg",
      width: 320,
      height: 212,
      type: "Wedding",
      year: "2024"
    },
    {
      id: 8,
      title: "Couple Love",
      category: "wedding",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg",
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
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE1.jpg",
      width: 320,
      height: 174,
      type: "Corporate",
      year: "2024"
    },
    {
      id: 11,
      title: "Board Meeting",
      category: "corporate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE10.jpg",
      width: 320,
      height: 212,
      type: "Corporate",
      year: "2024"
    },
    {
      id: 12,
      title: "Executive Portrait",
      category: "corporate",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE11.jpg",
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
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg",
      width: 320,
      height: 212,
      type: "Sports",
      year: "2024"
    },
    {
      id: 20,
      title: "Competition Highlights",
      category: "sports",
      image: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot9.jpg",
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
      {/* Hero Section - Enhanced */}
      <section className="relative py-24 md:py-40 overflow-hidden" aria-label="Hero section">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-charcoal via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan/20 to-slate-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-gradient-start/10 to-pink-gradient-start/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Award className="w-5 h-5 text-gold-gradient" />
              <span className="text-gold-gradient font-bold text-sm tracking-wider">AWARD-WINNING STUDIO</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6 leading-tight animate-fade-in-up">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">KGILL+</span>
              <span className="block bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta bg-clip-text text-transparent mt-2">STUDIO</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 font-inter mb-4 max-w-3xl mx-auto animate-fade-in-up-delayed leading-relaxed">
              Where <span className="text-gold-gradient font-bold">Moments</span> Become <span className="text-cyan font-bold">Masterpieces</span>
            </p>

            <p className="text-lg md:text-xl text-gray-400 font-inter mb-12 max-w-2xl mx-auto animate-fade-in-up-delayed">
              Professional photography and videography services that capture your story with artistic excellence
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up-delayed">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta text-charcoal font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-gradient/50"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta via-marigold to-gold-gradient-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-full border-2 border-white/20 hover:border-gold-gradient hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Aperture className="w-6 h-6" />
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up">
              {[
                { icon: <Users className="w-8 h-8" />, value: '500+', label: 'Happy Clients', color: 'from-cyan to-slate-blue' },
                { icon: <Camera className="w-8 h-8" />, value: '10K+', label: 'Photos Captured', color: 'from-marigold to-terracotta' },
                { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Awards Won', color: 'from-gold-gradient-start to-marigold' },
                { icon: <Heart className="w-8 h-8" />, value: '4+', label: 'Years Experience', color: 'from-pink-gradient-start to-terracotta' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-gold-gradient/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-charcoal">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold-gradient rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Studio Introduction Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-6">
                <Aperture className="w-5 h-5 text-gold-gradient" />
                <span className="text-gold-gradient font-bold text-sm tracking-wider">OUR STUDIO</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-white">
                Professional Studio <span className="bg-gradient-to-r from-gold-gradient-start to-terracotta bg-clip-text text-transparent">Experience</span>
              </h2>

              <p className="text-gray-300 font-inter mb-6 text-lg leading-relaxed">
                Step into our state-of-the-art studio where creativity meets technology. We provide a professional, comfortable environment designed to bring out the best in every shoot.
              </p>

              <p className="text-gray-400 font-inter mb-8 leading-relaxed">
                Equipped with cutting-edge cameras, professional lighting, and advanced editing software, we ensure every image captures your vision with exceptional quality and artistic excellence.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Camera className="w-5 h-5" />, text: "Pro Equipment" },
                  { icon: <Users className="w-5 h-5" />, text: "Expert Team" },
                  { icon: <Zap className="w-5 h-5" />, text: "Fast Turnaround" },
                  { icon: <Heart className="w-5 h-5" />, text: "Client Focused" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-gradient-to-br from-gold-gradient/20 to-terracotta/20 rounded-lg text-gold-gradient">
                      {feature.icon}
                    </div>
                    <span className="font-inter font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>

              <button
                className="group px-8 py-4 bg-gradient-to-r from-gold-gradient-start to-terracotta text-charcoal font-bold rounded-full hover:shadow-2xl hover:shadow-gold-gradient/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Camera className="w-8 h-8" />,
                  title: "Professional Gear",
                  desc: "Canon & Sony full-frame cameras",
                  gradient: "from-cyan to-slate-blue"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Studio Lighting",
                  desc: "Professional lighting setups",
                  gradient: "from-marigold to-terracotta"
                },
                {
                  icon: <Aperture className="w-8 h-8" />,
                  title: "Editing Suite",
                  desc: "Advanced post-production",
                  gradient: "from-purple-gradient-start to-pink-gradient-start"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Comfort First",
                  desc: "Relaxed, professional atmosphere",
                  gradient: "from-gold-gradient-start to-marigold"
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-gold-gradient/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-charcoal">{card.icon}</div>
                  </div>
                  <h3 className="font-bold text-white font-montserrat mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 font-inter">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking CTA - NEW */}
      <div className="fixed bottom-0 left-0 right-0 z-40 transform translate-y-full transition-transform duration-300" id="sticky-cta">
        <div className="bg-gradient-to-r from-charcoal via-slate-900 to-charcoal backdrop-blur-xl border-t border-gold-gradient/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold font-montserrat text-white mb-1">Ready to Create Something Amazing?</h3>
                <p className="text-gray-400 font-inter text-sm">Book your session today and let's bring your vision to life</p>
              </div>
              <div className="flex gap-3">
                <button
                  className="px-6 py-3 bg-gradient-to-r from-gold-gradient-start to-terracotta text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Camera className="w-5 h-5" />
                  <span>Book Now</span>
                </button>
                <a
                  href="tel:0797553148"
                  className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:border-gold-gradient hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="hidden sm:inline">Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                className={`btn-primary premium-hover-gold flex items-center gap-3 ${activeService === service.id ? 'bg-gold-gradient text-charcoal' : ''
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
      <section className="py-20 bg-charcoal texture-subtle relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-gold-gradient/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-40 -left-40 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
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

          {/* Studio Sessions Gallery Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat mb-4 text-white epic-text">Studio Sessions Gallery</h3>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              State-of-the-art equipment, cutting-edge editing, exceptional results.
            </p>
          </div>

          {/* Modern Bento Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
            {[
              { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass", span: "md:col-span-2 md:row-span-2" },
              { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers", span: "md:col-span-1 md:row-span-1" },
              { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams", span: "md:col-span-1 md:row-span-1" },
              { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery", span: "md:col-span-1 md:row-span-2" },
              { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul", span: "md:col-span-2 md:row-span-1" },
              { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic", span: "md:col-span-1 md:row-span-1" }
            ].map((session, index) => (
              <div
                key={session.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-gold/30 ${session.span}`}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
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
                {/* Glassmorphism Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-3xl"></div>

                {/* Image Container with Parallax */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={`${session.src}?tr=w-800,h-800,fo-auto`}
                    alt={session.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    loading={index > 2 ? "lazy" : "eager"}
                  />

                  {/* Gradient Overlay - Animated */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Animated Gold Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-0 group-hover:opacity-60 animate-pulse"></div>
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  {/* Camera Icon - Appears on Hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-gradient rounded-full blur-2xl opacity-50"></div>
                      <Camera className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-2xl relative z-10" />
                    </div>
                  </div>

                  {/* Title and Metadata */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2 drop-shadow-2xl font-montserrat">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gold-gradient">
                      <span className="text-sm md:text-base font-semibold tracking-wider">STUDIO SESSION</span>
                      <span className="w-2 h-2 rounded-full bg-gold-gradient animate-pulse"></span>
                      <span className="text-sm md:text-base font-semibold">2024</span>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-12 h-0.5 bg-gradient-to-r from-gold-gradient to-transparent"></div>
                  <div className="absolute top-4 left-4 w-0.5 h-12 bg-gradient-to-b from-gold-gradient to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 right-4 w-12 h-0.5 bg-gradient-to-l from-gold-gradient to-transparent"></div>
                  <div className="absolute bottom-4 right-4 w-0.5 h-12 bg-gradient-to-t from-gold-gradient to-transparent"></div>
                </div>
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
                <ImmersiveGallery
                  title="Exclusive Headshot Collection"
                  accentColor="from-purple-gradient-start to-pink-gradient-start"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg", title: "Corporate Headshot", category: "headshots", description: "Professional corporate headshot" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot9.jpg", title: "Artist Portrait", category: "headshots", description: "Creative artistic portrait" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg", title: "Business Professional", category: "headshots", description: "Professional business headshot" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot6.jpg", title: "Creative Professional", category: "headshots", description: "Creative professional portrait" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot8.jpg", title: "Industry Leader", category: "headshots", description: "Industry leader portrait" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg", title: "Executive Portrait", category: "headshots", description: "Executive portrait" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot5.jpg", title: "Professional Headshot", category: "headshots", description: "Professional headshot" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg", title: "Corporate Executive", category: "headshots", description: "Corporate executive headshot" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg", title: "Artistic Portrait", category: "headshots", description: "Artistic portrait" },
                    { id: 10, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot7.jpg", title: "Executive Headshot", category: "headshots", description: "Executive headshot" }
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
                <ImmersiveGallery
                  title="Event Highlights"
                  accentColor="from-marigold to-terracotta"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event1.jpg", title: "Kenya Fashion Awards", category: "events", description: "Covering the prestigious Kenya Fashion Awards" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event2.jpg", title: "Laikipia Fashion Gala", category: "events", description: "Laikipia County Fashion Gala event coverage" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event3.jpg", title: "Kenya Colour Run", category: "events", description: "Kenya Colour Run Festival event photography" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event4.jpg", title: "Clever Art Event", category: "events", description: "Clever Art Event coverage" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event5.jpg", title: "Pawa Festival", category: "events", description: "Pawa Festival event photography" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event6.jpg", title: "Jkuat Awards", category: "events", description: "Jkuat Awards & Mr & Miss Jkuat 2018" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event7.jpg", title: "Mr & Miss Jkuat", category: "events", description: "Mr & Miss Jkuat 2018 event coverage" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event8.jpg", title: "Dream Kona Events", category: "events", description: "Dream Kona Events coverage" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event9.jpg", title: "Tuvibe Festival", category: "events", description: "Tuvibe Festival event photography" },
                    { id: 10, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event10.jpg", title: "Wedding Ceremony", category: "events", description: "Wedding Ceremony photography" },
                    { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event11.jpg", title: "Baby Shower", category: "events", description: "Baby Shower event coverage" },
                    { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event13.jpg", title: "Kibera Talent Search", category: "events", description: "Kibera Talent Search event coverage" },
                    { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event14.jpg", title: "Mr & Miss Kibera", category: "events", description: "Mr & Miss Kibera event photography" },
                    { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event15.jpg", title: "The Millenials", category: "events", description: "The Millenials event coverage" },
                    { id: 16, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event16.jpg", title: "Special Occasion", category: "events", description: "Special Occasion event photography" },
                    { id: 17, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event17.jpg", title: "Event Coverage", category: "events", description: "General event photography coverage" },
                    { id: 18, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event18.jpg", title: "Memorable Moment", category: "events", description: "Capturing memorable moments" },
                    { id: 19, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event19.jpg", title: "Celebration", category: "events", description: "Celebration event photography" },
                    { id: 20, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event20.jpg", title: "Festival", category: "events", description: "Festival event coverage" },
                    { id: 21, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Events/Event21.jpg", title: "Special Event", category: "events", description: "Special event photography" }
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
                <ImmersiveGallery
                  title="Wedding Highlights"
                  accentColor="from-pink-gradient-start to-terracotta"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed.jpg", title: "Wedding Moments", category: "wedding", description: "Beautiful wedding moments captured" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg", title: "Couple Love", category: "wedding", description: "Romantic couple moments" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed3.jpg", title: "Special Ceremony", category: "wedding", description: "Special wedding ceremony" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed4.jpg", title: "Happy Couple", category: "wedding", description: "Joyful couple photography" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed5.jpg", title: "Wedding Joy", category: "wedding", description: "Celebrating wedding joy" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding16.jpg", title: "Celebration Highlights", category: "wedding", description: "Wedding celebration highlights" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed7.jpg", title: "Romantic Moments", category: "wedding", description: "Romantic wedding moments" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed8.jpg", title: "Wedding Bliss", category: "wedding", description: "Perfect wedding bliss" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed9.jpg", title: "Love Story", category: "wedding", description: "Capturing your love story" },
                    { id: 10, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wed10.jpg", title: "Forever Love", category: "wedding", description: "Symbol of forever love" },
                    { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding10.jpg", title: "Forever Love", category: "wedding", description: "Eternal love captured" },
                    { id: 12, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding11.jpg", title: "Forever Love", category: "wedding", description: "Forever love celebration" },
                    { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding31.jpg", title: "Forever Love", category: "wedding", description: "Everlasting love" },
                    { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding5.jpg", title: "Forever Love", category: "wedding", description: "Timeless wedding love" },
                    { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding30.jpg", title: "Forever Love", category: "wedding", description: "Forever in love" }
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
                <ImmersiveGallery
                  title="Corporate Photography Gallery"
                  accentColor="from-cyan to-slate-blue"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE1.jpg", title: "Corporate Team Photo", category: "corporate", description: "Professional corporate team photography" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE10.jpg", title: "Board Meeting", category: "corporate", description: "Board meeting photography" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE11.jpg", title: "Executive Portrait", category: "corporate", description: "Professional executive portrait" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE12.jpg", title: "Office Culture", category: "corporate", description: "Office culture photography" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE13.jpg", title: "Business Meeting", category: "corporate", description: "Business meeting photography" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE18.jpg", title: "Corporate Event", category: "corporate", description: "Corporate event photography" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE17.jpg", title: "Team Collaboration", category: "corporate", description: "Team collaboration photography" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE16.jpg", title: "Business Presentation", category: "corporate", description: "Business presentation photography" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE15.jpg", title: "Office Workspace", category: "corporate", description: "Office workspace photography" },
                    { id: 10, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE14.jpg", title: "Product Photography", category: "corporate", description: "Product photography" },
                    { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE19.jpg", title: "Corporate Portrait", category: "corporate", description: "Corporate portrait photography" },
                    { id: 12, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE2.jpg", title: "Team Building", category: "corporate", description: "Team building photography" },
                    { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE20.jpg", title: "Business Professionals", category: "corporate", description: "Business professionals photography" },
                    { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE21.jpg", title: "Conference Room", category: "corporate", description: "Conference room photography" },
                    { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE22.jpg", title: "Corporate Headshot", category: "corporate", description: "Corporate headshot photography" },
                    { id: 16, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE5.jpg", title: "Business Event", category: "corporate", description: "Business event photography" },
                    { id: 17, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE4.jpg", title: "Office Professionals", category: "corporate", description: "Office professionals photography" },
                    { id: 18, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE3.jpg", title: "Corporate Meeting", category: "corporate", description: "Corporate meeting photography" },
                    { id: 19, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE24.jpg", title: "Executive Meeting", category: "corporate", description: "Executive meeting photography" },
                    { id: 20, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE23.jpg", title: "Team Photo", category: "corporate", description: "Team photo session" },
                    { id: 21, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE6.jpg", title: "Business Workshop", category: "corporate", description: "Business workshop photography" },
                    { id: 22, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE7.jpg", title: "Corporate Presentation", category: "corporate", description: "Corporate presentation photography" },
                    { id: 23, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE8.jpg", title: "Office Team", category: "corporate", description: "Office team photography" },
                    { id: 24, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Corporate/CORPORATE9.jpg", title: "Business Professionals", category: "corporate", description: "Business professionals photography" }
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
                <ImmersiveGallery
                  title="Premium Property Showcase"
                  accentColor="from-green to-cyan"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate1.png", title: "Modern Living Room", category: "real-estate", description: "Modern living room real estate photography" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate2.png", title: "Luxury Kitchen", category: "real-estate", description: "Luxury kitchen real estate photography" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate3.png", title: "Spacious Bedroom", category: "real-estate", description: "Spacious bedroom real estate photography" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate4.png", title: "Elegant Bathroom", category: "real-estate", description: "Elegant bathroom real estate photography" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate5.png", title: "Stunning Exterior", category: "real-estate", description: "Stunning property exterior photography" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate6.png", title: "Beautiful Garden", category: "real-estate", description: "Beautiful garden real estate photography" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/RealEstate/RealEstate7.png", title: "Modern Office Space", category: "real-estate", description: "Modern office space real estate photography" }
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
                <ImmersiveGallery
                  title="Graduation Memories"
                  accentColor="from-gold-gradient-start to-marigold"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation1.jpg", title: "Academic Achievement", category: "graduation", description: "Celebrating academic achievement" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation2.jpg", title: "Cap & Gown", category: "graduation", description: "Traditional cap and gown photography" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation3.jpg", title: "Proud Graduate", category: "graduation", description: "Proud graduate moment photography" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation4.jpg", title: "Celebration Moment", category: "graduation", description: "Special celebration moment" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation5.jpg", title: "Academic Pride", category: "graduation", description: "Capture of academic pride" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation6.jpg", title: "Milestone Celebration", category: "graduation", description: "Graduation milestone celebration" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation7.jpg", title: "Graduation Joy", category: "graduation", description: "Joyful graduation moment" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation8.jpg", title: "Academic Success", category: "graduation", description: "Academic success celebration" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Graduation/Graduation9.jpg", title: "Future Ahead", category: "graduation", description: "Looking forward to the future" }
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
                <ImmersiveGallery
                  title="Africanism"
                  accentColor="from-terracotta to-marigold"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism2.jpg", title: "African Culture", category: "africanism", description: "Celebrating African culture" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism.jpg", title: "African Heritage", category: "africanism", description: "Honoring African heritage" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism7.jpg", title: "Cultural Expression", category: "africanism", description: "African cultural expression" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism8.jpg", title: "African Beauty", category: "africanism", description: "Capturing African beauty" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism6.jpg", title: "Cultural Pride", category: "africanism", description: "African cultural pride" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism3.jpg", title: "African Essence", category: "africanism", description: "The essence of Africa" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism4.jpg", title: "Cultural Richness", category: "africanism", description: "Rich African culture" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism9.jpg", title: "African Identity", category: "africanism", description: "African identity celebration" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Africanism/Africanism5.jpg", title: "Cultural Heritage", category: "africanism", description: "African cultural heritage" }
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
                <ImmersiveGallery
                  title="Fashion Meet N Greet"
                  accentColor="from-purple-gradient-start to-cyan"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion1.jpg", title: "Fashion Forward", category: "fashion", description: "Forward-thinking fashion photography" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion2.jpg", title: "Style Icon", category: "fashion", description: "Style icon photography session" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion3.jpg", title: "Street Style", category: "fashion", description: "Street style fashion photography" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion4.jpg", title: "Fashion Culture", category: "fashion", description: "Celebrating fashion culture" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion5.jpg", title: "Trendsetter", category: "fashion", description: "Trendsetter fashion photography" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion6.jpg", title: "Fashion Statement", category: "fashion", description: "Bold fashion statement photography" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion7.jpg", title: "Style Expression", category: "fashion", description: "Style expression photography" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion8.jpg", title: "Fashion Identity", category: "fashion", description: "Fashion identity photography" },
                    { id: 9, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion12.jpg", title: "Outstanding Style", category: "fashion", description: "Outstanding style photography" },
                    { id: 10, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion11.jpg", title: "Fashion Vibes", category: "fashion", description: "Capturing fashion vibes" },
                    { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion10.jpg", title: "Fashionista Life", category: "fashion", description: "Fashionista lifestyle photography" },
                    { id: 12, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion9.jpg", title: "Style Journey", category: "fashion", description: "Style journey photography" },
                    { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion15.jpg", title: "Fashion Meets", category: "fashion", description: "Fashion meets photography" },
                    { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion13.jpg", title: "Style Community", category: "fashion", description: "Style community photography" },
                    { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Fashion/Fashion14.jpg", title: "Fashion Hangout", category: "fashion", description: "Fashion hangout photography" }
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
                <ImmersiveGallery
                  title="Product Photography"
                  accentColor="from-slate-blue to-purple-gradient-start"
                  images={[
                    { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product1.jpg", title: "Product Showcase", category: "product", description: "Professional product showcase photography" },
                    { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product2.jpg", title: "Commercial Photography", category: "product", description: "Commercial product photography" },
                    { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product3.jpg", title: "Professional Styling", category: "product", description: "Professional product styling" },
                    { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product4.jpg", title: "Detail Shots", category: "product", description: "Detailed product shots" },
                    { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product5.jpg", title: "E-commerce Ready", category: "product", description: "E-commerce ready product photography" },
                    { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product6.jpg", title: "Brand Photography", category: "product", description: "Brand-focused product photography" },
                    { id: 7, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product7.jpg", title: "Marketing Visuals", category: "product", description: "Marketing-focused product photography" },
                    { id: 8, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Product/Product8.jpg", title: "Product Presentation", category: "product", description: "Product presentation photography" }
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

      {/* Testimonials Section - NEW */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate-900 to-charcoal relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-gradient/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-gold-gradient" />
              <span className="text-gold-gradient font-bold text-sm tracking-wider">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="display-2 font-montserrat mb-6 epic-text">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              Don't just take our word for it - hear from the people we've had the privilege to work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & James",
                role: "Wedding Clients",
                image: "https://ui-avatars.com/api/?name=Sarah+James&background=FFD700&color=1F2937&size=128",
                rating: 5,
                text: "KGILL+ Studio captured our wedding day beautifully! Every moment was documented with such care and artistry. The photos are absolutely stunning and we'll treasure them forever.",
                service: "Wedding Photography"
              },
              {
                name: "Michael Chen",
                role: "Corporate Client",
                image: "https://ui-avatars.com/api/?name=Michael+Chen&background=06B6D4&color=1F2937&size=128",
                rating: 5,
                text: "Professional, creative, and efficient. The team headshots they produced for our company were exceptional. Highly recommend for any corporate photography needs!",
                service: "Corporate Photography"
              },
              {
                name: "Amina Hassan",
                role: "Fashion Designer",
                image: "https://ui-avatars.com/api/?name=Amina+Hassan&background=FF5E62&color=1F2937&size=128",
                rating: 5,
                text: "Working with KGILL+ was an absolute pleasure. They understood my vision perfectly and brought my fashion collection to life through their lens. True professionals!",
                service: "Fashion Photography"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-gold-gradient/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold-gradient/20 group-hover:text-gold-gradient/40 transition-colors duration-300">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-gradient" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 font-inter text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="inline-block px-3 py-1 bg-gold-gradient/20 border border-gold-gradient/30 rounded-full mb-6">
                  <span className="text-gold-gradient text-xs font-bold tracking-wider">{testimonial.service}</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-gold-gradient/50"
                  />
                  <div>
                    <h4 className="font-bold text-white font-montserrat">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 font-inter">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Reviews CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 font-inter mb-4">Join hundreds of satisfied clients</p>
            <div className="flex items-center justify-center gap-2 text-gold-gradient">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-gradient-to-br from-gold-gradient to-terracotta flex items-center justify-center text-charcoal font-bold text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="font-bold">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section - NEW */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-gradient/20 to-terracotta/20 backdrop-blur-sm border border-gold-gradient/30 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-gold-gradient" />
              <span className="text-gold-gradient font-bold text-sm tracking-wider">AWARDS & RECOGNITION</span>
            </div>
            <h2 className="display-2 font-montserrat mb-6 epic-text">Industry Recognition</h2>
            <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: "SOYA Awards", year: "2023", icon: "🏆" },
              { name: "Nairobi Photographer of the Year", year: "2023", icon: "📸" },
              { name: "Nabla Awards", year: "2022", icon: "⭐" },
              { name: "35 Awards", year: "2022", icon: "🎖️" }
            ].map((award, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-gold-gradient/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{award.icon}</div>
                <h3 className="font-bold text-white font-montserrat mb-2">{award.name}</h3>
                <p className="text-gold-gradient text-sm font-bold">{award.year}</p>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold font-montserrat text-center text-white mb-12">
              Trusted by Leading Brands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                "Mac & More",
                "Tononoka Steels",
                "Kenya Fashion Awards",
                "Global Peace Foundation",
                "Stirling University",
                "Kenya Colour Run"
              ].map((client, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold-gradient/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">🏢</div>
                    <p className="text-sm text-gray-400 group-hover:text-white font-inter font-semibold transition-colors">{client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-gold-gradient/10 via-cyan/10 to-terracotta/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "250K+", label: "Social Media Views" },
                { value: "500+", label: "Events Covered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "4+", label: "Years Excellence" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold font-montserrat bg-gradient-to-r from-gold-gradient-start via-marigold to-terracotta bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-inter text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
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

      {/* Enhanced Lightbox Modal with Navigation */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowModal(false);
            if (e.key === 'ArrowLeft') {
              // Navigate to previous image
              const studioSessions = [
                { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
              ];
              const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
              if (currentIndex > 0) {
                const prevSession = studioSessions[currentIndex - 1];
                setSelectedImage({
                  title: prevSession.title,
                  image: prevSession.src,
                  type: 'Studio Session',
                  year: '2024'
                });
              }
            }
            if (e.key === 'ArrowRight') {
              // Navigate to next image
              const studioSessions = [
                { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
              ];
              const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
              if (currentIndex < studioSessions.length - 1) {
                const nextSession = studioSessions[currentIndex + 1];
                setSelectedImage({
                  title: nextSession.title,
                  image: nextSession.src,
                  type: 'Studio Session',
                  year: '2024'
                });
              }
            }
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-7xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute -top-16 right-0 text-white hover:text-gold-gradient transition-all duration-300 z-20 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute -top-16 left-0 text-white bg-white/10 backdrop-blur-md rounded-full px-6 py-3 font-montserrat font-bold">
              {(() => {
                const studioSessions = [
                  { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                  { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                  { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                  { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                  { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                  { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
                ];
                const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
                return `${currentIndex + 1} / ${studioSessions.length}`;
              })()}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const studioSessions = [
                  { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                  { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                  { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                  { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                  { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                  { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
                ];
                const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
                if (currentIndex > 0) {
                  const prevSession = studioSessions[currentIndex - 1];
                  setSelectedImage({
                    title: prevSession.title,
                    image: prevSession.src,
                    type: 'Studio Session',
                    year: '2024'
                  });
                }
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-gradient transition-all duration-300 z-20 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
              disabled={(() => {
                const studioSessions = [
                  { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                  { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                  { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                  { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                  { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                  { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
                ];
                const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
                return currentIndex === 0;
              })()}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const studioSessions = [
                  { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                  { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                  { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                  { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                  { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                  { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
                ];
                const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
                if (currentIndex < studioSessions.length - 1) {
                  const nextSession = studioSessions[currentIndex + 1];
                  setSelectedImage({
                    title: nextSession.title,
                    image: nextSession.src,
                    type: 'Studio Session',
                    year: '2024'
                  });
                }
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-gradient transition-all duration-300 z-20 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
              disabled={(() => {
                const studioSessions = [
                  { id: 1, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg", title: "Midnight Bass" },
                  { id: 2, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg", title: "Vocal Layers" },
                  { id: 3, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg", title: "Synth Dreams" },
                  { id: 4, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg", title: "Drum Mastery" },
                  { id: 5, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg", title: "Acoustic Soul" },
                  { id: 6, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg", title: "Mixing Magic" }
                ];
                const currentIndex = studioSessions.findIndex(s => s.src === selectedImage.image);
                return currentIndex === studioSessions.length - 1;
              })()}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <div
              className="relative rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Loading indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-10 transition-opacity duration-300" id="lightbox-loader">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-gold-gradient border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-montserrat">Loading high-res image...</p>
                  </div>
                </div>

                <img
                  src={getHighResImageUrl(selectedImage.image)}
                  alt={`${selectedImage.title} - ${selectedImage.type} by KGILL+ Studio`}
                  className="w-full h-full object-contain max-h-[75vh] transition-opacity duration-500"
                  onLoad={(e) => {
                    const loader = document.getElementById('lightbox-loader');
                    if (loader) {
                      loader.style.opacity = '0';
                      setTimeout(() => {
                        loader.style.display = 'none';
                      }, 300);
                    }
                  }}
                />
              </div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-8 backdrop-blur-sm">
                <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-3 drop-shadow-lg">
                  {selectedImage.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-300">
                  <span className="flex items-center gap-2 text-lg">
                    <span className="w-2 h-2 rounded-full bg-gold-gradient animate-pulse"></span>
                    <span className="font-semibold">{selectedImage.type}</span>
                  </span>
                  <span className="flex items-center gap-2 text-lg">
                    <span className="w-2 h-2 rounded-full bg-gold-gradient animate-pulse"></span>
                    <span className="font-semibold">{selectedImage.year}</span>
                  </span>
                  <span className="flex items-center gap-2 text-lg">
                    <Camera className="w-5 h-5 text-gold-gradient" />
                    <span className="font-semibold">KGILL+ Studio</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 text-white/60 text-sm font-inter">
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>
                <span>Previous</span>
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>
                <span>Next</span>
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd>
                <span>Close</span>
              </span>
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
                  { id: 11, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding10.jpg", title: "Elegant Ceremony" },
                  { id: 12, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding11.jpg", title: "Bridal Portrait" },
                  { id: 13, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding31.jpg", title: "Reception Highlights" },
                  { id: 14, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding5.jpg", title: "Garden Ceremony" },
                  { id: 15, src: "https://ik.imagekit.io/5zp8ovb7c/Kgill/Wedding/Wedding30.jpg", title: "Vintage Style" },
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