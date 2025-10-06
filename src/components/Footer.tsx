import React from 'react';
import { Camera, Linkedin, Mail, MapPin, Heart, Globe, Sparkles, Users, Target, Menu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-charcoal border-t border-slate-700/50" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Camera className="w-6 h-6 text-charcoal z-10" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan rounded-full animate-pulse shadow-lg"></div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-white">
                  KGILL+ MEDIA
                </h2>
                <p className="text-xs sm:text-sm text-slate-blue font-inter flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Creative & Innovation Hub
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              Empowering youth voices through innovative storytelling and media production 
              that drives meaningful social change across Kenya and beyond.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="https://linkedin.com/company/kgill-media"
                className="group relative w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-marigold hover:to-terracotta rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-marigold/50 backdrop-blur-sm border border-slate-700/50 hover:border-marigold/30 overflow-hidden"
                aria-label="Visit our LinkedIn page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-charcoal z-10 relative" />
              </a>
              <a 
                href="mailto:hello@kgillmedia.co.ke"
                className="group relative w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-cyan hover:to-slate-blue rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-cyan/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan/30 overflow-hidden"
                aria-label="Send us an email"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white z-10 relative" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-marigold" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/our-story' },
                { label: 'Our Leaders', href: '/our-leaders' },
                { label: 'What We Do', href: '/what-we-do' },
                { label: 'The Movement', href: '/the-movement' },
                { label: 'The Feed', href: '/the-feed' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-marigold transition-colors font-inter focus:outline-none focus:text-marigold focus:underline text-sm sm:text-base block py-1 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-marigold to-terracotta rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan" />
              Get In Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-inter text-xs sm:text-sm">Email</p>
                  <a 
                    href="mailto:hello@kgillmedia.co.ke"
                    className="text-gray-300 hover:text-marigold transition-colors font-inter focus:outline-none focus:text-marigold focus:underline text-sm sm:text-base"
                  >
                    hello@kgillmedia.co.ke
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-inter text-xs sm:text-sm">Location</p>
                  <address className="text-gray-300 font-inter text-sm sm:text-base not-italic">
                    Nairobi Innovation Hub<br />
                    Ngong Road, Nairobi
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-inter text-xs sm:text-sm text-center sm:text-left">
            © 2025 Kgill+ Media Creative & Innovation Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-inter">
            Made with <Heart className="w-4 h-4 text-terracotta animate-pulse" /> in Kenya
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;