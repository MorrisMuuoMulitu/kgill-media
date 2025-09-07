import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
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
    { path: '/our-story', label: 'Our Story' },
    { path: '/what-we-do', label: 'What We Do' },
    { path: '/the-movement', label: 'The Movement' }
  ];

  const dropdownLinks = [
    { path: '/our-leaders', label: 'Our Leaders' },
    { path: '/the-feed', label: 'The Feed' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/studio', label: 'KGILL+ Studio' }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-charcoal/95 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-marigold to-terracotta rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Camera className="w-7 h-7 text-charcoal" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-montserrat text-white group-hover:text-marigold transition-colors">
                KGILL+ MEDIA
              </h1>
              <p className="text-xs md:text-sm text-slate-blue font-inter">Creative & Innovation Hub</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-semibold text-base transition-all duration-300 hover:text-marigold relative group ${
                  location.pathname === link.path ? 'text-marigold' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-marigold to-terracotta rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`font-inter font-semibold text-base transition-all duration-300 hover:text-marigold relative group flex items-center gap-1 ${
                  dropdownLinks.some(link => location.pathname === link.path) ? 'text-marigold' : 'text-white'
                }`}
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-marigold to-terracotta rounded-full transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              <div className={`absolute right-0 mt-2 w-56 bg-charcoal/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 transition-all duration-300 ${
                showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}>
                <div className="py-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-6 py-3 font-inter font-medium transition-colors hover:bg-white/10 hover:text-marigold ${
                        location.pathname === link.path ? 'text-marigold bg-white/5' : 'text-white'
                      }`}
                      onClick={() => setShowDropdown(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-marigold/30"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
            </button>
            
            <button className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-bold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              Join The Hub
            </button>
          </div>

          {/* Mobile menu button with improved accessibility */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-charcoal/95 backdrop-blur-xl border-b border-white/10`}>
        <div className="px-4 py-6 space-y-6">
          {/* Mobile brand section */}
          <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
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
          
          <div className="space-y-8">
            {/* Main navigation */}
            <div>
              <h3 className="text-sm font-semibold text-marigold uppercase tracking-wider mb-3">Main</h3>
              <div className="space-y-2">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'text-marigold bg-marigold/10 border border-marigold/30' 
                        : 'text-white hover:text-marigold hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Secondary navigation */}
            <div>
              <h3 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-3">More</h3>
              <div className="space-y-2">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-inter font-semibold text-base transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'text-cyan bg-cyan/10 border border-cyan/30' 
                        : 'text-white hover:text-cyan hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile theme toggle */}
          <div className="pt-4 border-t border-white/10">
            <button 
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-white font-inter font-semibold"
            >
              {darkMode ? <Sun className="w-5 h-5 text-marigold" /> : <Moon className="w-5 h-5 text-cyan" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          
          <button className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal py-4 rounded-xl font-inter font-bold text-lg shadow-lg">
            Join The Hub
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;