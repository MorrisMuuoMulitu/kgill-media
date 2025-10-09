import React, { useEffect } from 'react';
import { X, Sparkles, ChevronRight, Circle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mainNavLinks: Array<{ path: string; label: string; icon?: any }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  mainNavLinks
}) => {
  const location = useLocation();

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
      className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-sm bg-slate-900/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-gradient-start to-terracotta flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-charcoal" />
              </div>
              <span className="font-black font-montserrat text-white text-lg">MENU</span>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div className="space-y-2">
              {mainNavLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`group flex items-center justify-between p-4 rounded-xl font-inter font-semibold text-base transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-gold-gradient-start/20 to-terracotta/20 text-white border border-gold-gradient-start/30' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-gold-gradient-start' : 'bg-gray-600 group-hover:bg-gold-gradient-start'
                      }`}></div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-gold-gradient-start translate-x-1' : 'text-gray-600 group-hover:translate-x-1 group-hover:text-gold-gradient-start'
                    }`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-xs text-gray-500 font-inter">
                © 2025 KGILL+ Media
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
