import React, { useState } from 'react';
import { Settings, Type, Eye, Zap, X } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    reducedMotion, 
    highContrast, 
    fontSize, 
    toggleReducedMotion, 
    toggleHighContrast, 
    setFontSize 
  } = useAccessibility();

  return (
    <>
      {/* Accessibility Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-40 focus:outline-none focus:ring-4 focus:ring-marigold/50"
        aria-label="Open accessibility menu"
      >
        <Settings className="w-6 h-6 text-charcoal" />
      </button>

      {/* Accessibility Menu Panel */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accessibility-menu-title"
        >
          <div className="bg-slate-900 rounded-2xl p-6 max-w-md w-full border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 id="accessibility-menu-title" className="text-xl font-bold font-montserrat text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close accessibility menu"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Font Size Control */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Type className="w-5 h-5 text-marigold" />
                  <h3 className="font-inter font-semibold text-white">Font Size</h3>
                </div>
                <div className="flex gap-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-4 py-2 rounded-lg font-inter font-semibold transition-all duration-300 ${
                        fontSize === size
                          ? 'bg-marigold text-charcoal'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-cyan" />
                    <div>
                      <h3 className="font-inter font-semibold text-white">High Contrast</h3>
                      <p className="text-sm text-gray-400">Improve text readability</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      highContrast ? 'bg-cyan' : 'bg-slate-700'
                    }`}
                    aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      highContrast ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Reduced Motion Toggle */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-terracotta" />
                    <div>
                      <h3 className="font-inter font-semibold text-white">Reduced Motion</h3>
                      <p className="text-sm text-gray-400">Minimize animations</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleReducedMotion}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      reducedMotion ? 'bg-terracotta' : 'bg-slate-700'
                    }`}
                    aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      reducedMotion ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-xs text-gray-500 text-center">
                These settings are saved to your device and will persist across visits.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;