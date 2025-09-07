import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = [
    { path: '/', label: 'Home' },
    { path: '/#trailers', label: 'Trailers' },
    { path: '/#duality', label: 'Duality' },
    { path: '/#hive', label: 'Hive' },
    { path: '/#foundation', label: 'Foundation' }
  ];

  const secondaryNavLinks = [
    { path: '/kgill-tv', label: 'KGILL TV' },
    { path: '/photography-videography', label: 'Services' },
    { path: '/workshops', label: 'Workshops' },
    { path: '/blog', label: 'Blog' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/get-involved', label: 'Get Involved' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 premium-hover-gold">
                <Camera className="w-7 h-7 text-charcoal" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-montserrat text-white group-hover:text-gold-gradient-start transition-colors">
                KGILL+ MEDIA
              </h1>
              <p className="text-xs text-slate-blue font-inter">Creative & Innovation Hub</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {mainNavLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <a
                  key={link.path}
                  href={link.path}
                  className={`font-inter font-bold transition-all duration-300 hover:text-gold-gradient-start relative group ${
                    location.pathname === '/' && window.location.hash === link.path.split('#')[1] 
                      ? 'text-gold-gradient-start' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient-start transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-inter font-bold transition-all duration-300 hover:text-gold-gradient-start relative group ${
                    location.pathname === link.path ? 'text-gold-gradient-start' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient-start transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
            
            <div className="relative group">
              <button className="font-inter font-bold text-white hover:text-gold-gradient-start transition-colors flex items-center gap-1">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-charcoal/90 backdrop-blur-xl rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-white/10">
                <div className="py-2">
                  {secondaryNavLinks.map((link) => (
                    link.path.startsWith('/#') ? (
                      <a
                        key={link.path}
                        href={link.path}
                        className={`block px-6 py-3 font-inter transition-colors hover:bg-white/10 ${
                          location.pathname === '/' && window.location.hash === link.path.split('#')[1] 
                            ? 'text-gold-gradient-start bg-white/5' : 'text-white hover:text-gold-gradient-start'
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-6 py-3 font-inter transition-colors hover:bg-white/10 ${
                          location.pathname === link.path 
                            ? 'text-gold-gradient-start bg-white/5' : 'text-white hover:text-gold-gradient-start'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors premium-hover-gold"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-gold-gradient-start" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            <button className="btn-primary px-6 py-2 premium-hover-gold">
              Join The Hub
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-gold-gradient-start" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center premium-hover-gold"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-charcoal/95 backdrop-blur-xl`}>
        <div className="px-4 py-6 space-y-4">
          {mainNavLinks.map((link) => (
            link.path.startsWith('/#') ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-inter font-bold transition-colors ${
                  location.pathname === '/' && window.location.hash === link.path.split('#')[1] 
                    ? 'text-gold-gradient-start' : 'text-white hover:text-gold-gradient-start'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-inter font-bold transition-colors ${
                  location.pathname === link.path ? 'text-gold-gradient-start' : 'text-white hover:text-gold-gradient-start'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Secondary Links */}
          {secondaryNavLinks.map((link) => (
            link.path.startsWith('/#') ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-inter font-bold transition-colors ${
                  location.pathname === '/' && window.location.hash === link.path.split('#')[1] 
                    ? 'text-gold-gradient-start' : 'text-white hover:text-gold-gradient-start'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-inter font-bold transition-colors ${
                  location.pathname === link.path ? 'text-gold-gradient-start' : 'text-white hover:text-gold-gradient-start'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          <button className="w-full btn-primary py-3 premium-hover-gold mt-4">
            Join The Hub
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;