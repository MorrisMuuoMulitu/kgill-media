import React from 'react';
import { Camera, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DualitySection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden premium-bg">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFD700' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 premium-staggered animate">
          <h2 className="display-2 font-montserrat mb-6 epic-text">
            THE DUALITY OF CREATION
          </h2>
          <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
            Our creative empire - a two-headed dragon of storytelling and service
          </p>
          <div className="epic-divider mx-auto mt-8 max-w-md"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* KGILL TV */}
          <div className="premium-card premium-hover-gold animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center premium-icon epic-float">
                <Monitor className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-montserrat epic-text">KGILL TV</h3>
                <p className="text-gold-gradient-start font-bold">Creative Home</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-inter mb-8">
              Our streaming destination - a curated world of original films and documentaries. 
              This isn't just a platform; it's a destination. A direct line to our original films 
              and a showcase of our creative vision.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Original Documentary Series",
                "Behind-the-Scenes Content",
                "Exclusive Interviews",
                "Community Stories"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 premium-staggered animate" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <div className="w-3 h-3 rounded-full bg-gold-gradient"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <Link to="/kgill-tv" className="btn-primary flex items-center justify-center gap-3 w-full">
              <span>Visit KGILL TV</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Photography & Videography Services */}
          <div className="premium-card premium-hover-blue animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-gradient flex items-center justify-center premium-icon epic-float">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-montserrat epic-text-3">PROFESSIONAL SERVICES</h3>
                <p className="text-cyan font-bold">Craft for Hire</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-inter mb-8">
              Our professional arm - capturing moments and creating visual legacies. 
              From single shots to full-scale productions, we deliver high-quality 
              visual storytelling for clients who want a piece of our creative prowess.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { service: "Film Production", projects: "25+ Projects" },
                { service: "Photography", projects: "150+ Sessions" },
                { service: "Event Coverage", projects: "50+ Events" },
                { service: "Corporate Media", projects: "40+ Clients" }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 premium-hover" style={{ animationDelay: `${index * 100}ms` }}>
                  <h4 className="font-bold font-montserrat">{item.service}</h4>
                  <p className="text-sm text-gray-400 mt-1">{item.projects}</p>
                </div>
              ))}
            </div>
            
            <Link to="/photography-videography" className="btn-secondary flex items-center justify-center gap-3 w-full">
              <span>Hire Our Creatives</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualitySection;