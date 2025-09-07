import React, { useState } from 'react';
import { Camera, Video, Award, ArrowRight, Star, Play } from 'lucide-react';

const PhotographyVideographyPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('photography');

  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Community Documentary",
      description: "Documentary series capturing community stories in Nairobi",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "videography",
      type: "Documentary",
      year: "2023",
      client: "UNICEF Kenya"
    },
    {
      id: 2,
      title: "Corporate Event",
      description: "Coverage of annual tech conference in Nairobi",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "photography",
      type: "Event",
      year: "2023",
      client: "Safaricom"
    },
    {
      id: 3,
      title: "Brand Campaign",
      description: "Visual storytelling for local fashion brand",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "photography",
      type: "Commercial",
      year: "2022",
      client: "Maasai Market"
    },
    {
      id: 4,
      title: "Music Video",
      description: "Promotional video for emerging Kenyan artist",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "videography",
      type: "Music",
      year: "2023",
      client: "Olive Ent."
    },
    {
      id: 5,
      title: "Social Campaign",
      description: "Visual assets for environmental awareness campaign",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "photography",
      type: "Campaign",
      year: "2022",
      client: "Green Africa"
    },
    {
      id: 6,
      title: "Short Film",
      description: "Award-winning short film about urban life",
      image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "videography",
      type: "Narrative",
      year: "2021",
      client: "Self-Produced"
    }
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services for events, portraits, and commercial projects",
      features: [
        "Event Photography",
        "Portrait Sessions",
        "Product Photography",
        "Commercial Shoots"
      ]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videography",
      description: "High-quality video production for documentaries, commercials, and events",
      features: [
        "Documentary Production",
        "Commercial Videos",
        "Event Coverage",
        "Music Videos"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Post-Production",
      description: "Professional editing and post-production services for all media",
      features: [
        "Video Editing",
        "Photo Retouching",
        "Color Grading",
        "Motion Graphics"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, Safaricom",
      content: "KGILL Media transformed our brand story with stunning visuals that captured our essence perfectly. Their attention to detail and creative approach exceeded our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Michael Ochieng",
      role: "Director, Nairobi Film Festival",
      content: "Working with KGILL Media was a game-changer for our festival. Their documentary coverage brought our event to life and helped us reach a global audience.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      name: "Amina Hassan",
      role: "Founder, Maasai Market",
      content: "The commercial shoot KGILL Media did for our brand was exceptional. They understood our vision and delivered visuals that perfectly represent our brand identity.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

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
                PROFESSIONAL SERVICES
              </span>
            </div>
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">Photography &</span>
              <span className="block epic-text">Videography</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto">
              Capturing moments and creating visual legacies that tell your story with authenticity and impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold">
                <span>Hire Our Creatives</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Our Services</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Professional media production services tailored to your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="premium-card premium-hover-gold"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-4">{service.title}</h3>
                <p className="text-gray-400 font-inter mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold-gradient"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="display-2 font-montserrat mb-4 epic-text">Our Portfolio</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl">
                A showcase of our creative work across various industries and projects
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('photography')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'photography'
                    ? 'bg-gold-gradient text-charcoal'
                    : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
                } premium-hover-gold`}
              >
                Photography
              </button>
              <button
                onClick={() => setActiveTab('videography')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'videography'
                    ? 'bg-gold-gradient text-charcoal'
                    : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
                } premium-hover-gold`}
              >
                Videography
              </button>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'photography', label: 'Photography' },
              { key: 'videography', label: 'Videography' }
            ].map((category) => (
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
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="premium-card premium-hover-gold"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  {item.category === 'videography' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-gold-gradient/90 flex items-center justify-center premium-hover-gold">
                        <Play className="w-6 h-6 text-charcoal ml-1" />
                      </button>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-charcoal/80 text-white rounded-full text-xs">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-montserrat mb-2">{item.title}</h3>
                <p className="text-gray-400 font-inter mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.client}</span>
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
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
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

      {/* CTA Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="display-2 font-montserrat mb-6 epic-text">Ready to Tell Your Story?</h2>
          <p className="text-2xl text-gray-400 font-inter mb-10 max-w-3xl mx-auto">
            Let our creative team capture your vision with professional photography and videography services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-8 py-4 premium-hover-gold">
              Get a Quote
            </button>
            <button className="btn-secondary px-8 py-4 premium-hover-gold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographyVideographyPg;