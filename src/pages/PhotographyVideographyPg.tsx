import React, { useState, useEffect } from 'react';
import { Camera, Video, Users, Heart, Star, Play, Calendar, MapPin, Mail, Phone, User, Home, Award, ArrowRight, ExternalLink } from 'lucide-react';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ title: '', image: '', type: '', year: '' });

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
    },
    {
      id: 'wedding',
      title: 'Wedding Coverage',
      icon: <Heart className="w-8 h-8" />,
      description: 'Comprehensive wedding photography and videography services',
      features: [
        'Full Day Coverage',
        'Cinematic Videos',
        'Engagement Sessions',
        'Album Design'
      ],
      details: 'We specialize in capturing every special moment of your big day with the latest equipment and editing software. Our experienced team delivers stunning images and videos that help you relive your wedding memories for years to come.'
    },
    {
      id: 'event',
      title: 'Event Photography',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Coverage for all types of events and celebrations',
      features: [
        'Corporate Events',
        'Fashion Shows',
        'Concerts & Festivals',
        'Private Parties'
      ],
      details: 'With experience covering major events like Kenya Fashion Awards, Laikipia County Fashion Gala, Kenya Colour Run Festival, and many more, we bring professional documentation to every celebration.'
    },
    {
      id: 'commercial',
      title: 'Commercial Production',
      icon: <Users className="w-8 h-8" />,
      description: 'End-to-end commercial photography and videography services',
      features: [
        'Brand Campaigns',
        'Product Photography',
        'Corporate Videos',
        'Real Estate'
      ],
      details: 'We create stunning visual content that captures the essence of your brand and helps you connect with your audience. From corporate headshots to real estate showcases, we deliver high-quality results.'
    },
    {
      id: 'creative',
      title: 'Creative Projects',
      icon: <Video className="w-8 h-8" />,
      description: 'Documentaries, music videos, and artistic productions',
      features: [
        'Documentary Films',
        'Music Videos',
        'Short Films',
        'Artistic Projects'
      ],
      details: 'Our creative team specializes in storytelling through visual media. We produce award-winning documentaries, promotional videos for emerging artists, and narrative films that captivate audiences.'
    }
  ];

  useEffect(() => {
    document.querySelectorAll('.premium-card').forEach(card => {
      card.addEventListener('click', () => {
        const sparkles = card.querySelectorAll('.animate-bounce');
        sparkles.forEach(s => {
          s.style.animation = 'none';
          setTimeout(() => s.style.animation = 'sparkles 1.5s infinite', 10);
        });
      });
    });
  }, []);

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
    },
    {
      id: 7,
      title: "Real Estate Showcase",
      category: "commercial",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Real Estate",
      year: "2023"
    },
    {
      id: 8,
      title: "Music Video",
      category: "creative",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Music",
      year: "2023"
    }
  ];

  const testimonials = [
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
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto">
              Kgill Plus Studio is a photography and videography service provider that specializes in capturing and preserving memories for individuals and families. With a team of skilled professionals, we use the latest equipment and techniques to turn your special moments into lasting memories.
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
              
              <h2 className="display-2 font-montserrat mb-6 epic-text">Studio Sessions</h2>
              <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto mb-12">
                Book your slot and let's create something amazing together.
              </p>

              <p className="text-gray-300 font-inter mb-6 text-lg">
                Your brand is unique. Your photos should be too. Our studio is your creative playground to capture your essence. We're dedicated to producing high-quality, tailored images that tell your story.
              </p>

              <p className="text-gray-300 font-inter mb-6">
                From professional headshots that make an impact, to product photography that sells, to lifestyle shots that build your brand, we've got you covered. Our team guides you through the entire process, from styling to the final shot, ensuring you feel confident and look your best.
              </p>

              <p className="text-gray-300 font-inter mb-8">
                With top-of-the-line equipment and a passion for perfection, we deliver images that don't just meet expectations—they exceed them. Ready to elevate your brand?
              </p>
              
              <button className="btn-primary px-8 py-4 premium-hover-gold flex items-center gap-3">
                <span>Book Your Studio Session</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
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
                  className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 ease-out hover:scale-110 hover:rotate-[2deg] shadow-2xl hover:shadow-3xl hover:shadow-gold/20 bg-gradient-to-br from-slate-900/50 to-slate-800/70 backdrop-blur-sm border-2 border-slate-700/50"
                  style={{
                    backgroundImage: `url(${session.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px', // Increased height
                  }}
                >
                  {/* Animated Gold Border Glow (Pulsing) */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full rounded-3xl border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-0 group-hover:opacity-70 animate-pulse"></div>
                  </div>

                  {/* Subtle Audio Waveform Overlay (SVG Background) */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M0,50 C20,30 40,70 60,40 C80,10 100,60 100,50 L100,100 L0,100 Z" fill="currentColor" className="text-yellow-300/30" />
                    </svg>
                  </div>

                  {/* Dark Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-600 ease-out"></div>

                  {/* Floating Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2 drop-shadow-2xl">
                      {session.title}
                    </h3>
                    <p className="text-yellow-200 text-lg font-light tracking-wide drop-shadow-lg">
                      Studio Session • Immersive Sound Design
                    </p>
                  </div>

                  {/* Sparkling Camera Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 scale-90 group-hover:scale-150">
                    <div className="relative">
                      <Camera className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-2xl" />
                      {/* Animated Sparkles */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce"
                          style={{
                            top: `${-20 + Math.random() * 40}%`,
                            left: `${-20 + Math.random() * 40}%`,
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: '2s',
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Parallax Depth Layer (Subtle Movement) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                    style={{
                      backgroundImage: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 100%)`,
                    }}
                  ></div>

                  {/* Rating Stars */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-white text-sm ml-2 font-bold">5.0</span>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gold-gradient blur-lg opacity-75 rounded-full animate-pulse"></div>
                  <button className="btn-primary px-10 py-5 premium-hover-gold relative flex items-center gap-3 text-xl font-bold">
                    <span>Book Your Studio Session</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                  {/* Feature 1 */}
                  <div className="premium-card premium-hover-gold p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">State-of-the-Art Equipment</h3>
                    <p className="text-gray-400">Professional lighting and cameras for perfect shots</p>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="premium-card premium-hover-gold p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">Expert Photographers</h3>
                    <p className="text-gray-400">Skilled professionals with years of experience</p>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="premium-card premium-hover-gold p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-charcoal" />
                    </div>
                    <h3 className="text-xl font-bold font-montserrat mb-2">Premium Quality</h3>
                    <p className="text-gray-400">Retouched and edited images delivered in 48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Services Section */}
      </section>      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Our Services</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Professional photography and videography services tailored to your unique needs
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
              
              <p className="text-gray-300 font-inter mb-6">
                Headshots are a valuable tool for creating a strong first impression and showcasing your professionalism. They can also help to build trust with potential clients or employers, and can be a powerful marketing tool for individuals and businesses alike.
              </p>
              
              {/* Headshots Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Professional Headshot</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Corporate Headshot</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Business Headshot</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Executive Headshot</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Professional Portrait</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-2xl hover:shadow-3xl" 
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
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Headshot Session</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-2xl hover:shadow-3xl" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Corporate Portrait',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot6.jpg?updatedAt=1757781885957',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot6.jpg?updatedAt=1757781885957" 
                    alt="Corporate Portrait"
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Corporate Portrait</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-2xl hover:shadow-3xl" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Business Portrait',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot7.jpg?updatedAt=1757781874606',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot7.jpg?updatedAt=1757781874606" 
                    alt="Business Portrait"
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Business Portrait</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-2xl hover:shadow-3xl" 
                     onClick={() => {
                       setSelectedImage({
                         title: 'Executive Portrait',
                         image: 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot8.jpg?updatedAt=1757781885499',
                         type: 'Portrait',
                         year: '2024'
                       });
                       setShowModal(true);
                     }}>
                  <img 
                    src="https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot8.jpg?updatedAt=1757781885499" 
                    alt="Executive Portrait"
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 hover:opacity-50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-100 hover:opacity-100 transition-all duration-500">
                    <p className="text-lg font-bold drop-shadow-xl">Executive Portrait</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-gold-gradient rounded-xl transition-all duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Wedding Photography */}
            <div className="premium-card premium-hover-gold">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat">Wedding Photography</h3>
                  <p className="text-gray-400">Capturing your special day</p>
                </div>
              </div>
              
              <p className="text-gray-300 font-inter mb-4">
                Kgill Plus Studio specializes in providing comprehensive wedding media coverage services, including photography and videography. Our experienced team of professionals uses the latest equipment and editing software to capture every special moment of your big day.
              </p>
              
              <p className="text-gray-300 font-inter">
                We deliver stunning images and videos that will help you relive your wedding memories for years to come. We offer a range of customizable packages to meet your unique needs, and we work discreetly and efficiently to ensure a stress-free and enjoyable experience for you.
              </p>
            </div>
            
            {/* Corporate Photography */}
            <div className="premium-card premium-hover-gold">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat">Corporate Photography</h3>
                  <p className="text-gray-400">Elevating your business brand</p>
                </div>
              </div>
              
              <p className="text-gray-300 font-inter mb-4">
                At Kgill Plus Studio, we understand the importance of having high-quality corporate photography for businesses of all sizes. Our team of skilled photographers specializes in creating stunning corporate images that capture the essence of your brand.
              </p>
              
              <p className="text-gray-300 font-inter">
                We offer a range of corporate photography services, including headshots, team photos, event coverage, and product photography. We work closely with our clients to understand their brand identity and capture the right tone and style for their corporate images.
              </p>
            </div>
            
            {/* Event Photography */}
            <div className="premium-card premium-hover-gold">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat">Event Photography</h3>
                  <p className="text-gray-400">Documenting special occasions</p>
                </div>
              </div>
              
              <p className="text-gray-300 font-inter mb-4">
                Event Photography are some of our major areas in both photography and video coverage. We have been to several events doing coverage including Kenya Fashion Awards 2018, Laikipia County Fashion Gala 2018, Kenya Colour Run Festival, and many more.
              </p>
              
              <p className="text-gray-300 font-inter">
                From weddings and baby showers to corporate events and music festivals, we capture the energy and emotion of every celebration, creating lasting memories that you can treasure forever.
              </p>
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
              A showcase of our creative work across various industries and projects
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="premium-card premium-hover-gold group transform transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-2xl hover:shadow-3xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-gold-gradient text-charcoal rounded-full text-sm font-bold">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-gradient rounded-2xl transition-all duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold font-montserrat mb-3">{item.title}</h3>
                <div className="flex justify-between items-center text-gray-400">
                  <span className="font-medium">{services.find(s => s.id === item.category)?.title || item.category}</span>
                  <span className="font-bold text-lg">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Client Testimonials</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              What our clients say about working with our creative team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="premium-card premium-hover-gold"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center">
                    <span className="text-charcoal font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-inter italic">"{testimonial.content}"</p>
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
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl w-full max-h-[95vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-20 right-0 text-white hover:text-gold-gradient transition-all duration-300 z-10 p-3 rounded-full bg-charcoal/70 hover:bg-charcoal/90 backdrop-blur-lg shadow-2xl hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div 
              className="relative rounded-3xl overflow-hidden bg-charcoal shadow-3xl border-4 border-gold-gradient/30"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh] mx-auto transition-all duration-700 hover:brightness-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 via-charcoal/85 to-transparent p-10 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4 drop-shadow-2xl">{selectedImage.title}</h3>
                  <div className="flex flex-wrap gap-8 text-gray-200">
                    <span className="flex items-center gap-4">
                      <span className="w-5 h-5 rounded-full bg-gold-gradient"></span>
                      <span className="font-bold text-xl">{selectedImage.type}</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <Calendar className="w-6 h-6 text-gold-gradient" />
                      <span className="font-bold text-xl">{selectedImage.year}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/70 hover:bg-charcoal/90 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
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
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-gradient p-4 rounded-full bg-charcoal/70 hover:bg-charcoal/90 backdrop-blur-lg transition-all duration-300 hover:scale-110 shadow-2xl"
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
