import React, { useEffect } from 'react';
import { X, Globe, Sparkles, Users, Camera, Heart, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mainNavLinks: Array<{ path: string; label: string }>;
  dropdownLinks: Array<{ path: string; label: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  mainNavLinks,
  dropdownLinks
}) => {
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div 
      className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Content */}
      <div 
        className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-slate-900/95 to-charcoal/95 backdrop-blur-xl border-l border-slate-700/50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
            <h2 className="text-xl font-bold font-montserrat text-white">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800/50 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-marigold/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Main
              </h3>
              <nav className="space-y-2">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`block py-3 px-4 rounded-xl font-inter font-medium text-base transition-all duration-300 relative overflow-hidden ${
                      location.pathname === link.path 
                        ? 'text-marigold bg-gradient-to-r from-marigold/10 to-terracotta/10 border border-marigold/20' 
                        : 'text-slate-200 hover:text-marigold hover:bg-slate-700/30'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-marigold to-terracotta"></div>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Secondary Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-cyan/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" /> More
              </h3>
              <nav className="space-y-2">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`block py-3 px-4 rounded-xl font-inter font-medium text-base transition-all duration-300 relative overflow-hidden ${
                      location.pathname === link.path 
                        ? 'text-cyan bg-gradient-to-r from-cyan/10 to-slate-blue/10 border border-cyan/20' 
                        : 'text-slate-200 hover:text-cyan hover:bg-slate-700/30'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan to-slate-blue"></div>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700/50 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-marigold to-terracotta rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">Join Our Community</p>
                  <p className="text-sm font-bold font-montserrat text-white">2.5K+ Members</p>
                </div>
              </div>
            </div>
            
            <Link
              to="/get-involved"
              className="w-full bg-gradient-to-r from-marigold to-terracotta text-charcoal py-4 rounded-xl font-inter font-bold text-center block"
            >
              Join The Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;