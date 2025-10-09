import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Zap, Circle } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = [
    { path: '/our-story', label: 'Story', icon: Sparkles },
    { path: '/what-we-do', label: 'Services', icon: Zap },
    { path: '/photography-videography', label: 'Studio', icon: Circle },
    { path: '/kgill-tv', label: 'TV', icon: Circle },
    { path: '/our-leaders', label: 'Team', icon: Circle }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Hide logo on TV page
  const isKGILLTVPage = location.pathname === '/kgill-tv';

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-charcoal/80 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
            {/* Logo - Hidden on TV page */}
            {!isKGILLTVPage && (
              <Link 
                to="/" 
                className="group relative"
              >
                <Logo size="lg" showText={false} />
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative px-4 py-2 rounded-lg font-inter font-semibold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-gold-gradient-start' : 'text-gray-400 group-hover:text-gold-gradient-start'
                      }`} />
                      <span>{link.label}</span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-gold-gradient-start to-terracotta rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mainNavLinks={mainNavLinks}
      />
    </>
  );
};

export default Navigation;
