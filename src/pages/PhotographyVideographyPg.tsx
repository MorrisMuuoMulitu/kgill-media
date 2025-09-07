import React, { useState } from 'react';
import { Camera, Video, Users, Heart, Star, Play, Calendar, MapPin, Mail, Phone, Portrait, Home, Award, ArrowRight, ExternalLink } from 'lucide-react';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');

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
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">Photography &</span>
              <span className="block epic-text">Videography</span>
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
              
              <h2 className="display-2 font-montserrat mb-6 epic-text">Professional Studio Experience</h2>
              
              <p className="text-gray-300 font-inter mb-6 text-lg">
                Are you looking to create a strong professional brand image that showcases your unique style and personality? Look no further than our studio photography services!
              </p>
              
              <p className="text-gray-300 font-inter mb-6">
                Our studio provides the perfect setting for a professional, comfortable, and relaxed shoot, ensuring that our clients feel at ease and confident in front of the camera. Whether you need headshots for your LinkedIn profile, product photography for your e-commerce store, or lifestyle shots for your personal brand, our studio photography services have got you covered.
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

      {/* Services Section */}
      <section className="py-20 bg-charcoal texture-subtle">
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
                  <Portrait className="w-6 h-6 text-charcoal" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="premium-card premium-hover-gold group"
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
    </div>
  );
};

export default PhotographyVideographyPg;