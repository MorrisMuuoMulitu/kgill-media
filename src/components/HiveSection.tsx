import React from 'react';
import { Calendar, Users, MapPin, Clock, ArrowRight } from 'lucide-react';

const HiveSection = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Sinema Mtaani Workshop",
      description: "Community filmmaking workshop bringing cinema to the streets of Nairobi",
      date: "2023-06-15",
      time: "10:00 AM",
      location: "Nairobi Innovation Hub",
      attendees: 35,
      type: "Workshop"
    },
    {
      id: 2,
      title: "Youth Media Summit",
      description: "Annual gathering of young African storytellers and media professionals",
      date: "2023-07-22",
      time: "9:00 AM",
      location: "KICC, Nairobi",
      attendees: 200,
      type: "Conference"
    },
    {
      id: 3,
      title: "Documentary Filmmaking Bootcamp",
      description: "Intensive 5-day program on documentary storytelling techniques",
      date: "2023-08-05",
      time: "8:00 AM",
      location: "iHub, Nairobi",
      attendees: 25,
      type: "Bootcamp"
    }
  ];

  return (
    <section className="py-24 bg-charcoal texture-subtle relative overflow-hidden premium-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 premium-staggered animate">
          <h2 className="display-2 font-montserrat mb-6 epic-text-2">
            THE CREATIVE HIVE
          </h2>
          <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
            Where creative energy goes from consumption to creation - building a movement, nurturing talent
          </p>
          <div className="epic-divider mx-auto mt-8 max-w-md"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Workshops",
              description: "Skill-building sessions empowering the next generation of African storytellers",
              count: "25+",
              color: "bg-gold-gradient"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Projects",
              description: "Community-driven initiatives that reshape narratives and create impact",
              count: "30+",
              color: "bg-purple-gradient"
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Events",
              description: "Gatherings that connect creatives and foster collaboration",
              count: "15+",
              color: "bg-blue-gradient"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="premium-card premium-hover-gold animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 premium-icon epic-float`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">{item.title}</h3>
              <p className="text-gray-400 font-inter mb-6">{item.description}</p>
              <div className="text-3xl font-bold font-montserrat epic-text">{item.count}</div>
            </div>
          ))}
        </div>
        
        <div className="premium-card animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="display-3 font-montserrat mb-2">Upcoming Events</h3>
              <p className="text-gray-400 font-inter">Join our community in creating the new narrative</p>
            </div>
            <button className="btn-secondary flex items-center gap-2 mt-4 md:mt-0">
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-charcoal/50 rounded-2xl p-6 border border-white/10 premium-hover-gold"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-gold-gradient text-charcoal rounded-full text-sm font-bold">
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-xl font-bold font-montserrat">
                      {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold font-montserrat mb-3">{event.title}</h4>
                <p className="text-gray-400 font-inter mb-6 line-clamp-2">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 btn-accent">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiveSection;