import React, { useEffect, useState } from 'react';
import { X, Play, ExternalLink, AlertCircle, Loader } from 'lucide-react';

interface YouTubePlayerModalProps {
  videoId: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const YouTubePlayerModal: React.FC<YouTubePlayerModalProps> = ({ 
  videoId, 
  title, 
  isOpen, 
  onClose 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      // Reset states when modal opens
      setIsLoading(true);
      setHasError(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      {/* Backdrop */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-slate-900/80 border-b border-white/10">
          <h2 className="text-white font-bold font-montserrat text-lg truncate mr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Video Player */}
        <div className="relative pt-[56.25%] bg-black">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
              <Loader className="w-12 h-12 text-gold-gradient-start animate-spin mb-4" />
              <p className="text-white font-inter text-lg">Loading video...</p>
              <p className="text-gray-400 font-inter text-sm mt-2">Please wait while we connect to YouTube</p>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 p-8">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-white font-bold font-montserrat text-xl mb-2">Connection Error</h3>
              <p className="text-gray-400 font-inter text-center mb-6 max-w-md">
                Unable to load the video. This might be a network issue or YouTube might be temporarily unavailable.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setHasError(false);
                    setIsLoading(true);
                  }}
                  className="px-6 py-3 bg-gold-gradient text-white rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Try Again
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open on YouTube
                </a>
              </div>
            </div>
          )}

          {/* YouTube iframe */}
          {!hasError && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&enablejsapi=1`}
              title={title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
        
        {/* Video Info */}
        <div className="p-6 bg-slate-900/50 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-400 font-inter text-sm mb-1">
                Playing from <span className="text-marigold font-semibold">KGILL TV</span> YouTube Channel
              </p>
              <p className="text-gray-500 font-inter text-xs">
                Subscribe to our channel for more amazing content
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.youtube.com/@kgilltv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-inter font-semibold text-sm transition-colors border border-slate-700"
              >
                <ExternalLink className="w-4 h-4" />
                Channel
              </a>
              <a 
                href={`https://www.youtube.com/watch?v=${videoId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-inter font-semibold text-sm transition-colors"
              >
                <Play className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayerModal;