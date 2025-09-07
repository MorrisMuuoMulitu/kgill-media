import React, { useState } from 'react';
import { Camera, Video, Users, Camera as PortraitIcon, Heart, Star, Play, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const KgillStudioPage = () => {
  const [activeTab, setActiveTab] = useState('studio');
  const [activeService, setActiveService] = useState('headshots');

  const services = [
    {
      id: 'headshots',
      title: 'Portrait Headshots',
      icon: <PortraitIcon className="w-8 h-8" />,
      description: 'Professional headshots for corporates, artists, and celebrities',
      details: 'Headshots are professional photographs that typically show a person\'s head and shoulders. They are often used for business and career purposes, such as on LinkedIn profiles, business cards, or on company websites. Headshots are a valuable tool for creating a strong first impression and showcasing your professionalism.'
    },
    {
      id: 'wedding',
      title: 'Wedding Photography',
      icon: <Heart className="w-8 h-8" />,
      description: 'Comprehensive wedding media coverage services',
      details: 'Kgill Plus Studio specializes in providing comprehensive wedding media coverage services, including photography and videography. Our experienced team of professionals uses the latest equipment and editing software to capture every special moment of your big day, delivering stunning images and videos that will help you relive your wedding memories for years to come.'
    },
    {
      id: 'corporate',
      title: 'Corporate Photography',
      icon: <Users className="w-8 h-8" />,
      description: 'High-quality corporate photography for businesses',
      details: 'At Kgill Plus Studio, we understand the importance of having high-quality corporate photography for businesses of all sizes. Our team of skilled photographers specializes in creating stunning corporate images that capture the essence of your brand, showcase your team, and help you connect with your audience.'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Photography',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Professional real estate photography services',
      details: 'Our real estate photography services help showcase properties in the best possible light, attracting potential buyers and highlighting the unique features of each space.'
    },
    {
      id: 'graduation',
      title: 'Graduation Shoots',
      icon: <Star className="w-8 h-8" />,
      description: 'Professional graduation photography services',
      details: 'Kgill Plus Studio offers professional and high-quality graduation photography services to help capture and celebrate this milestone achievement. Our team of experienced photographers has the expertise and creativity to capture stunning images that showcase your unique personality and academic achievement.'
    },
    {
      id: 'event',
      title: 'Event Photography',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Coverage for all types of events',
      details: 'Event Photography are some of our major areas in both photography and video coverage. We have been to several events doing coverage including Kenya Fashion Awards, Laikipia County Fashion Gala, Kenya Colour Run Festival, and many more.'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Headshots",
      category: "headshots",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Wedding Ceremony",
      category: "wedding",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Team Photoshoot",
      category: "corporate",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Graduation Portraits",
      category: "graduation",
      image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Fashion Event",
      category: "event",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Real Estate Showcase",
      category: "real-estate",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      role: "Robert Kimani, Prime Properties",
      content: "The real estate photography helped sell my listings 40% faster. The quality and attention to detail are unmatched.",
      rating: 5
    }
  ];

  const filteredPortfolio = activeService === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeService);

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
              <span className="block">KGILL+ STUDIO</span>
              <span className="block epic-text">Photography & Videography</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto">
              Kgill Plus Studio is a photography and videography service provider that specializes in capturing and preserving memories for individuals and families. With a team of skilled professionals, the studio uses the latest equipment and techniques to capture your special moments and turn them into lasting memories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold">
                <span>Book a Session</span>
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sessions Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Studio Sessions</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto mb-10">
              Book for your slot
            </p>
            <p className="text-xl text-gray-300 font-inter max-w-4xl mx-auto">
              Are you looking to create a strong professional brand image that showcases your unique style and personality? Look no further than our studio photography services! Our team of experienced photographers is dedicated to capturing the essence of our clients in every shoot, producing high-quality images that are tailored to their individual needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-montserrat mb-6">Professional Studio Experience</h3>
              <p className="text-gray-300 font-inter mb-6">
                Our studio provides the perfect setting for a professional, comfortable, and relaxed shoot, ensuring that our clients feel at ease and confident in front of the camera. Whether you need headshots for your LinkedIn profile, product photography for your e-commerce store, or lifestyle shots for your personal brand, our studio photography services have got you covered.
              </p>
              <p className="text-gray-300 font-inter mb-8">
                With our state-of-the-art equipment and cutting-edge editing software, we are committed to delivering exceptional quality images that exceed your expectations. Book a studio shoot with us today and let us help you create the professional brand image that you deserve!
              </p>
              <button className="btn-primary px-8 py-4 premium-hover-gold">
                Book Your Studio Session
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="KGILL+ Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
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
              Professional photography and videography services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`premium-card premium-hover-gold cursor-pointer transition-all duration-300 ${
                  activeService === service.id ? 'ring-2 ring-gold-gradient' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-4">{service.title}</h3>
                <p className="text-gray-400 font-inter mb-4">{service.description}</p>
                <p className="text-gray-300 font-inter text-sm">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Our Portfolio</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              A showcase of our creative work across various services
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => setActiveService('all')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeService === 'all'
                  ? 'bg-gold-gradient text-charcoal'
                  : 'bg-charcoal/50 text-white hover:bg-charcoal/70'
              } premium-hover-gold`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeService === service.id
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
            {filteredPortfolio.map((item) => (
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
                </div>
                
                <h3 className="text-xl font-bold font-montserrat mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Client Testimonials</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              What our clients say about our services
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
      <section className="py-20 bg-slate-900">
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
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <a href="mailto:kgillcompany@gmail.com" className="text-gray-300 hover:text-gold-gradient transition-colors">
                      kgillcompany@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <a href="tel:0797553148" className="text-gray-300 hover:text-gold-gradient transition-colors block">
                      0797553148
                    </a>
                    <a href="tel:0757749883" className="text-gray-300 hover:text-gold-gradient transition-colors">
                      0757749883
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-gradient flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Studio Location</h4>
                    <p className="text-gray-300">
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

export default KgillStudioPage;