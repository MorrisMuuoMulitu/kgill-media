import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Heart, Camera, Moon, Sun } from 'lucide-react';
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

  const navLinks = [
    { path: '/our-story', label: 'Our Story' },
    { path: '/our-leaders', label: 'Our Leaders' },
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/the-movement', label: 'The Movement' },
    { path: '/the-feed', label: 'The Feed' },
    { path: '/get-involved', label: 'Get Involved' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-marigold to-terracotta rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Camera className="w-6 h-6 text-charcoal" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-montserrat text-white group-hover:text-marigold transition-colors">
                KGILL+ MEDIA
              </h1>
              <p className="text-xs text-slate-blue font-inter">Creative & Innovation Hub</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium transition-all duration-300 hover:text-marigold relative group ${
                  location.pathname === link.path ? 'text-marigold' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-marigold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-2 rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Join The Hub
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-charcoal/95 backdrop-blur-lg`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 font-inter font-medium transition-colors ${
                location.pathname === link.path ? 'text-marigold' : 'text-white hover:text-marigold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal py-3 rounded-full font-inter font-semibold mt-4">
            Join The Hub
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;