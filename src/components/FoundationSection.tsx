import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Users, Award, Heart } from 'lucide-react';

const FoundationSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden premium-bg">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFD700' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 premium-staggered animate">
          <h2 className="display-2 font-montserrat mb-6 epic-text">
            THE FOUNDATION
          </h2>
          <p className="text-2xl text-gray-400 font-inter max-w-3xl mx-auto">
            Trust and connection - essential information that builds credibility and opens doors
          </p>
          <div className="epic-divider mx-auto mt-8 max-w-md"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="premium-card premium-hover-gold animate-fade-in-up">
            <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-3 epic-text">
              <Mail className="w-6 h-6" />
              Contact Us
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 premium-staggered animate" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-xl bg-gold-gradient/20 flex items-center justify-center flex-shrink-0 premium-icon">
                  <MapPin className="w-6 h-6 text-gold-gradient-start" />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat mb-1">Our Location</h4>
                  <p className="text-gray-400 font-inter">
                    Nairobi Innovation Hub, Ngong Road<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 premium-staggered animate" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-xl bg-blue-gradient/20 flex items-center justify-center flex-shrink-0 premium-icon">
                  <Phone className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat mb-1">Phone</h4>
                  <p className="text-gray-400 font-inter">+254-712-345-678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 premium-staggered animate" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-gradient/20 flex items-center justify-center flex-shrink-0 premium-icon">
                  <Mail className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat mb-1">Email</h4>
                  <p className="text-gray-400 font-inter">hello@kgillmedia.co.ke</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Clients */}
          <div className="premium-card premium-hover-purple animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-3 epic-text-2">
              <Users className="w-6 h-6" />
              Our Clients
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "UNICEF Kenya",
                "World Bank",
                "Safaricom",
                "Equity Bank",
                "KQ Airline",
                "NAIROBI FEST"
              ].map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors premium-hover premium-staggered animate"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="font-bold font-montserrat text-gray-300">{client}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gold-gradient/10 rounded-xl border border-gold-gradient/20 premium-staggered animate" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-gold-gradient-start" />
                <h4 className="font-bold font-montserrat">Awards & Recognition</h4>
              </div>
              <p className="text-sm text-gray-400 font-inter">
                Winner of the 2023 African Youth Innovation Award for Media & Storytelling
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="premium-card premium-hover-blue animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-3 epic-text-3">
              <Heart className="w-6 h-6" />
              Connect With Us
            </h3>
            
            <p className="text-gray-400 font-inter mb-8">
              Join our community of changemakers and stay updated with our latest projects
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", color: "hover:text-blue-400", gradient: "bg-blue-gradient" },
                { icon: <Twitter className="w-5 h-5" />, name: "Twitter", color: "hover:text-cyan", gradient: "bg-cyan" },
                { icon: <Instagram className="w-5 h-5" />, name: "Instagram", color: "hover:text-pink-500", gradient: "bg-purple-gradient" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors font-bold premium-hover premium-staggered animate ${social.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${social.gradient} w-8 h-8 rounded-lg flex items-center justify-center`}>
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="p-4 bg-blue-gradient/10 rounded-xl border border-blue-gradient/20 premium-staggered animate" style={{ animationDelay: '400ms' }}>
              <h4 className="font-bold font-montserrat mb-3">Newsletter</h4>
              <p className="text-sm text-gray-400 font-inter mb-4">
                Get the latest stories and updates delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-gradient-start"
                />
                <button className="px-6 py-3 bg-gold-gradient text-charcoal rounded-lg text-sm font-bold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;