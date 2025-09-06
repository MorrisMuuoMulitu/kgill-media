import React, { useState } from 'react';
import { Calendar, MapPin, Users, Filter, Play } from 'lucide-react';

const TheMovement = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      title: "Digital Storytelling Workshop",
      date: "March 15, 2024",
      location: "Nairobi Innovation Hub",
      category: "workshop",
      attendees: 45,
      status: "upcoming",
      description: "Learn the fundamentals of digital storytelling and content creation",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Youth Film Festival",
      date: "April 20-22, 2024",
      location: "Kenya National Theatre",
      category: "film",
      attendees: 200,
      status: "upcoming",
      description: "Celebrating young filmmakers and their impact stories",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Podcast Production Bootcamp",
      date: "February 28, 2024",
      location: "Online",
      category: "podcast",
      attendees: 75,
      status: "completed",
      description: "Intensive training on podcast creation from concept to distribution",
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Community Impact Summit",
      date: "May 10, 2024",
      location: "University of Nairobi",
      category: "innovation",
      attendees: 150,
      status: "upcoming",
      description: "Connecting youth leaders with social impact organizations",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const projects = [
    {
      title: "Climate Action Stories",
      location: { lat: -1.2921, lng: 36.8219, name: "Nairobi" },
      description: "Documentary series on youth-led environmental initiatives",
      impact: "10 communities reached",
      status: "active"
    },
    {
      title: "Tech Innovation Podcast",
      location: { lat: -1.2921, lng: 36.8219, name: "Kenya" },
      description: "Weekly conversations with African tech entrepreneurs",
      impact: "25 episodes, 15K downloads",
      status: "ongoing"
    },
    {
      title: "Rural Education Initiative",
      location: { lat: -0.0917, lng: 34.7680, name: "Kisumu" },
      description: "Digital literacy training in rural communities",
      impact: "200+ youth trained",
      status: "completed"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Events' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'film', label: 'Film' },
    { key: 'podcast', label: 'Podcast' },
    { key: 'innovation', label: 'Innovation' }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-terracotta">MOVEMENT</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            Join a thriving community of young creatives, changemakers, and storytellers working together 
            to transform communities across Kenya and beyond.
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              UPCOMING EVENTS
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto mb-8">
              Don't miss out on workshops, festivals, and community gatherings that are shaping the future of storytelling.
            </p>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-marigold to-terracotta text-charcoal'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-inter font-semibold ${
                      event.status === 'upcoming' 
                        ? 'bg-marigold text-charcoal' 
                        : 'bg-slate-600 text-white'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-inter capitalize">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-montserrat text-white mb-3 group-hover:text-marigold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 font-inter mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan" />
                      <span className="font-inter text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-terracotta" />
                      <span className="font-inter text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-4 h-4 text-marigold" />
                      <span className="font-inter text-sm">{event.attendees} attendees</span>
                    </div>
                  </div>
                  {event.status === 'upcoming' && (
                    <button className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Map */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              PROJECT MAP
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Discover the communities and projects where we're making a difference across Kenya.
            </p>
          </div>
          
          {/* Simplified Map Representation */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 min-h-96">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-marigold via-cyan to-terracotta rounded-xl"></div>
              </div>
              
              {/* Project Pins */}
              <div className="relative z-10 space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-start gap-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-2 ${
                      project.status === 'active' 
                        ? 'bg-marigold animate-pulse' 
                        : project.status === 'ongoing'
                        ? 'bg-cyan'
                        : 'bg-gray-500'
                    }`}></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white mb-1">{project.title}</h4>
                      <p className="text-gray-400 font-inter text-sm mb-2">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-terracotta font-inter text-sm font-semibold">{project.impact}</span>
                        <span className="text-gray-500 font-inter text-xs">{project.location.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12">
            MOVEMENT IMPACT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold font-montserrat text-marigold mb-2">15+</div>
              <p className="text-gray-400 font-inter">Active Communities</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold font-montserrat text-cyan mb-2">50+</div>
              <p className="text-gray-400 font-inter">Events Hosted</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold font-montserrat text-terracotta mb-2">1K+</div>
              <p className="text-gray-400 font-inter">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheMovement;