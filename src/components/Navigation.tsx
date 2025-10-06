import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, ChevronDown, Sparkles, Globe, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownButtonRef = React.useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();
  // Keyboard navigation for dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showDropdown && (e.key === 'Escape' || e.key === 'Tab')) {
        setShowDropdown(false);
        dropdownButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showDropdown]);

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
    { path: '/photography-videography', label: 'Kgill+ Studio' },
    { path: '/kgill-tv', label: 'KGILL TV' }
  ];

  const dropdownLinks = [
    { path: '/our-leaders', label: 'Our Leaders' },
    { path: '/the-feed', label: 'The Feed' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/the-movement', label: 'The Movement' },
    { path: '/contact', label: 'Contact Us' }
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
            <Logo size="md" showText={false} />
            <div className="relative">
              <h1 className="text-xl md:text-2xl font-bold font-montserrat text-white group-hover:text-marigold transition-colors">
                KGILL+ MEDIA
              </h1>
              <p className="text-xs md:text-sm text-slate-blue font-inter flex items-center gap-1">
                <Globe className="w-3 h-3" /> Creative & Innovation Hub
              </p>
              <div className="absolute -bottom-1 left-0 w-2 h-2 bg-marigold rounded-full animate-pulse"></div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-semibold text-base transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-marigold' : 'text-white hover:text-marigold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-marigold to-terracotta rounded-full transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative dropdown-container" role="menu">
              <button
                ref={dropdownButtonRef}
                onClick={() => setShowDropdown(!showDropdown)}
                className={`font-inter font-semibold text-base transition-all duration-300 relative group flex items-center gap-1 focus:outline focus:outline-2 focus:outline-marigold ${
                  dropdownLinks.some(link => location.pathname === link.path) ? 'text-marigold' : 'text-white hover:text-marigold'
                }`}
                aria-expanded={showDropdown}
                aria-haspopup="true"
                aria-controls="main-dropdown-menu"
                tabIndex={0}
              >
                <div className="flex items-center gap-1">
                  More
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </div>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-marigold to-terracotta rounded-full transition-all duration-300 ${showDropdown ? 'w-full' : 'group-hover:w-full'}`}></span>
              </button>
              <div
                id="main-dropdown-menu"
                className={`absolute right-0 mt-3 w-56 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 transition-all duration-300 z-50 ${
                  showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                role="menu"
                aria-label="More navigation links"
              >
                <div className="py-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-6 py-3 font-inter font-medium transition-all duration-300 hover:bg-slate-700/50 hover:text-marigold focus:outline focus:outline-2 focus:outline-marigold rounded-lg mx-2 my-1 ${
                        location.pathname === link.path ? 'text-marigold bg-slate-700/30' : 'text-slate-200 hover:bg-slate-700/30'
                      }`}
                      onClick={() => setShowDropdown(false)}
                      tabIndex={showDropdown ? 0 : -1}
                      role="menuitem"
                      aria-label={link.label}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-marigold/30 relative overflow-hidden group"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {darkMode ? <Sun className="w-5 h-5 text-marigold z-10 relative" /> : <Moon className="w-5 h-5 text-cyan z-10 relative" />}
            </button>
            
            <button className="group relative overflow-hidden bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join The Hub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-marigold/20 to-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button with improved accessibility */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isOpen ? <X className="w-6 h-6 text-white z-10 relative" /> : <Menu className="w-6 h-6 text-white z-10 relative" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mainNavLinks={mainNavLinks}
          dropdownLinks={dropdownLinks}
        />
      </div>
    </nav>
  );
};

export default Navigation;