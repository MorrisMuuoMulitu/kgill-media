import React, { useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Video Info */}
        <div className="p-6 bg-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 font-inter text-sm">
                Playing from <span className="text-marigold font-semibold">KGILL TV</span> YouTube Channel
              </p>
            </div>
            <a 
              href={`https://www.youtube.com/watch?v=${videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-inter font-semibold text-sm transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayerModal;