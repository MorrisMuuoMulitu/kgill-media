import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Award, BookOpen, ArrowRight, Star } from 'lucide-react';

const WorkshopsPg = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // Sample workshop data
  const workshops = [
    {
      id: 1,
      title: "Documentary Filmmaking Masterclass",
      description: "Learn the art of storytelling through documentary filmmaking with industry professionals",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "filmmaking",
      duration: "5 days",
      level: "Intermediate",
      participants: 25,
      rating: 4.9,
      instructor: "Kenya Gill",
      date: "2023-07-15",
      location: "Nairobi Innovation Hub",
      price: "KES 15,000",
      highlights: [
        "Hands-on camera work",
        "Story development techniques",
        "Post-production editing",
        "Industry networking"
      ]
    },
    {
      id: 2,
      title: "Photography for Social Impact",
      description: "Capture compelling images that drive social change and community engagement",
      image: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "photography",
      duration: "3 days",
      level: "Beginner",
      participants: 30,
      rating: 4.8,
      instructor: "Amina Hassan",
      date: "2023-06-22",
      location: "iHub Nairobi",
      price: "KES 10,000",
      highlights: [
        "Composition fundamentals",
        "Lighting techniques",
        "Storytelling through images",
        "Portfolio development"
      ]
    },
    {
      id: 3,
      title: "Digital Storytelling Workshop",
      description: "Master the tools and techniques of digital media creation for modern audiences",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "digital",
      duration: "2 days",
      level: "Beginner",
      participants: 35,
      rating: 4.7,
      instructor: "Michael Ochieng",
      date: "2023-08-05",
      location: "KICC Nairobi",
      price: "KES 8,000",
      highlights: [
        "Social media content creation",
        "Video editing basics",
        "Digital distribution",
        "Audience engagement"
      ]
    },
    {
      id: 4,
      title: "Advanced Cinematography",
      description: "Elevate your visual storytelling with advanced cinematography techniques",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "filmmaking",
      duration: "4 days",
      level: "Advanced",
      participants: 20,
      rating: 4.9,
      instructor: "Sarah Johnson",
      date: "2023-09-10",
      location: "Nairobi Film School",
      price: "KES 20,000",
      highlights: [
        "Cinematic lighting",
        "Camera movement techniques",
        "Color grading mastery",
        "Professional workflow"
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Workshops' },
    { key: 'filmmaking', label: 'Filmmaking' },
    { key: 'photography', label: 'Photography' },
    { key: 'digital', label: 'Digital Media' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Sinema Mtaani Festival",
      description: "Annual community film festival showcasing local talent",
      date: "2023-07-30",
      location: "Nairobi National Museum",
      attendees: 500
    },
    {
      id: 2,
      title: "Youth Media Summit",
      description: "Gathering of young African storytellers and media professionals",
      date: "2023-08-15",
      location: "KICC Nairobi",
      attendees: 300
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => 
    activeCategory === 'all' || workshop.category === activeCategory
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
                CREATIVE EDUCATION
              </span>
            </div>
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">Workshops &</span>
              <span className="block epic-text">Training Programs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-10 max-w-3xl mx-auto">
              Empowering the next generation of African storytellers with hands-on creative education
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary flex items-center gap-3 premium-hover-gold">
                <span>Browse Workshops</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="btn-secondary flex items-center gap-3 premium-hover-gold">
                <span>Upcoming Events</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="display-2 font-montserrat mb-4 epic-text">Our Workshops</h2>
              <p className="text-xl text-gray-400 font-inter max-w-2xl">
                Hands-on training programs led by industry professionals
              </p>
            </div>
            
            <div className="flex gap-2">
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
          </div>
          
          {/* Workshops Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWorkshops.map((workshop) => (
              <div 
                key={workshop.id} 
                className="premium-card premium-hover-gold"
              >
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-gradient text-charcoal rounded-full text-sm font-bold">
                      {workshop.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-charcoal/80 text-white rounded-full text-sm">
                      {workshop.duration}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-montserrat mb-3">{workshop.title}</h3>
                <p className="text-gray-400 font-inter mb-4 line-clamp-2">{workshop.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{workshop.participants} participants</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {workshop.highlights.slice(0, 3).map((highlight, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-charcoal/50 text-gray-300 rounded-full text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gold-gradient-start">{workshop.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400">{workshop.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="btn-secondary px-6 py-2 premium-hover-gold"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-charcoal texture-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Upcoming Events</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Join our community gatherings and networking opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="premium-card premium-hover-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-charcoal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-montserrat mb-2">{event.title}</h3>
                    <p className="text-gray-400 font-inter mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.attendees}+ attendees</span>
                      </div>
                    </div>
                    
                    <button className="btn-secondary mt-6 px-6 py-2 premium-hover-gold">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="display-2 font-montserrat mb-6 epic-text">Student Testimonials</h2>
            <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
              Hear from our workshop alumni about their learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "James Mutua",
                role: "Photography Workshop Alumni",
                content: "The hands-on approach and mentorship I received transformed my understanding of visual storytelling. I've since started my own photography business.",
                rating: 5,
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                id: 2,
                name: "Grace Wanjiru",
                role: "Documentary Filmmaking Alumni",
                content: "The workshop opened doors I never knew existed. I'm now working on my first documentary feature with support from KGILL Media.",
                rating: 5,
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                id: 3,
                name: "David Kimani",
                role: "Digital Media Workshop Alumni",
                content: "The practical skills and industry connections I gained have been invaluable in my career. The instructors were incredibly knowledgeable.",
                rating: 5,
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((testimonial) => (
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
          <h2 className="display-2 font-montserrat mb-6 epic-text">Join Our Creative Community</h2>
          <p className="text-2xl text-gray-400 font-inter mb-10 max-w-3xl mx-auto">
            Sign up for our newsletter to stay updated on upcoming workshops and events
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-gradient-start"
            />
            <button className="btn-primary px-8 py-4 premium-hover-gold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="premium-card max-w-2xl w-full max-h-[90vh] overflow-y-auto premium-hover-gold">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold font-montserrat">{selectedWorkshop.title}</h3>
              <button 
                onClick={() => setSelectedWorkshop(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img 
                src={selectedWorkshop.image} 
                alt={selectedWorkshop.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
            </div>
            
            <p className="text-gray-300 font-inter mb-6">{selectedWorkshop.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold font-montserrat mb-3">Workshop Details</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold-gradient-start" />
                    <span>{selectedWorkshop.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-gradient-start" />
                    <span>{selectedWorkshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-gradient-start" />
                    <span>{selectedWorkshop.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold-gradient-start" />
                    <span>{selectedWorkshop.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold-gradient-start" />
                    <span>{selectedWorkshop.level} Level</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-gold-gradient-start" />
                    <span>Instructor: {selectedWorkshop.instructor}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold font-montserrat mb-3">What You'll Learn</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold-gradient mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gold-gradient-start">{selectedWorkshop.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>{selectedWorkshop.rating} Rating</span>
                </div>
              </div>
              <button className="btn-primary px-8 py-3 premium-hover-gold">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopsPg;