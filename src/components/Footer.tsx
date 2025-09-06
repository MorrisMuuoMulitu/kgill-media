import React from 'react';
import { Camera, Linkedin, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-marigold to-terracotta rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-charcoal" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold font-montserrat text-white">
                  KGILL+ MEDIA
                </h2>
                <p className="text-xs text-slate-blue font-inter">Creative & Innovation Hub</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter leading-relaxed mb-6 max-w-md">
              Empowering youth voices through innovative storytelling and media production 
              that drives meaningful social change across Kenya and beyond.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/kgill-media"
                className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-marigold hover:to-terracotta rounded-lg flex items-center justify-center transition-all duration-300 group tilt-3d focus:outline-none focus:ring-2 focus:ring-marigold/50"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-charcoal" />
              </a>
              <a 
                href="mailto:hello@kgillmedia.co.ke"
                className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-cyan hover:to-slate-blue rounded-lg flex items-center justify-center transition-all duration-300 group tilt-3d focus:outline-none focus:ring-2 focus:ring-cyan/50"
                aria-label="Send us an email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter font-semibold text-white mb-6">Quick Links</h3>
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
                    className="text-gray-400 hover:text-marigold transition-colors font-inter tilt-3d focus:outline-none focus:text-marigold focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-terracotta mt-0.5" />
                <div>
                  <p className="text-gray-400 font-inter text-sm">Email</p>
                  <a 
                    href="mailto:hello@kgillmedia.co.ke"
                    className="text-white hover:text-marigold transition-colors font-inter tilt-3d focus:outline-none focus:text-marigold focus:underline"
                  >
                    hello@kgillmedia.co.ke
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan mt-0.5" />
                <div>
                  <p className="text-gray-400 font-inter text-sm">Location</p>
                  <p className="text-white font-inter">
                    Nairobi Innovation Hub<br />
                    Ngong Road, Nairobi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-inter text-sm">
            © 2024 Kgill+ Media Creative & Innovation Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-inter">
            Made with <Heart className="w-4 h-4 text-terracotta" /> in Kenya
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;