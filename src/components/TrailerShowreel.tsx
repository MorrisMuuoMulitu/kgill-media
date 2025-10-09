import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Tv, Camera, Mic, ExternalLink } from 'lucide-react';
import YouTubePlayerModal from './YouTubePlayerModal';

interface Trailer {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  category: string;
  views: string;
}

interface TrailerShowreelProps {
  videos?: Trailer[];
}

const TrailerShowreel: React.FC<TrailerShowreelProps> = ({ videos }) => {
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const [trailerChange, setTrailerChange] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Trailer | null>(null);

  // Default trailers with real YouTube videos from KGILL TV
  const defaultTrailers: Trailer[] = [
    {
      id: 1,
      title: "Kick Off S02 Ep 1 (We are back ~ the reunion)",
      description: "The game is back — and so is the drama. Papa, Candy, Kevo, and Coco return for a brand-new season filled with football fever, messy relationships, and ghetto hustle.",
      thumbnail: "https://img.youtube.com/vi/Z6BPF8gbquY/maxresdefault.jpg",
      videoId: "Z6BPF8gbquY",
      duration: "14:15",
      category: "Web Series",
      views: "1.2K"
    },
    {
      id: 2,
      title: "A Sinema Mtaani | AUMA Short film",
      description: "Story of a 12-year-old girl in Kibera experiencing her first period. Addresses menstrual health, dignity, and the 65% of Kenyan females who cannot afford sanitary pads.",
      thumbnail: "https://img.youtube.com/vi/bp_BnrK-hOo/maxresdefault.jpg",
      videoId: "bp_BnrK-hOo",
      duration: "12:54",
      category: "Short Film",
      views: "2.7K"
    },
    {
      id: 3,
      title: "A Sinema Mtaani | Dark Valentine Short Film",
      description: "A haunting tale inspired by real femicide cases - bringing awareness to critical social issues through powerful storytelling.",
      thumbnail: "https://img.youtube.com/vi/NWPQemVFUXQ/maxresdefault.jpg",
      videoId: "NWPQemVFUXQ",
      duration: "16:23",
      category: "Short Film",
      views: "8K"
    }
  ];
  
  const trailers = videos || defaultTrailers;

  const openVideo = (trailer: Trailer) => {
    setSelectedVideo(trailer);
    setIsModalOpen(true);
  };

  const nextTrailer = useCallback(() => {
    setTrailerChange(true);
    setTimeout(() => {
      setCurrentTrailer((prev) => (prev + 1) % trailers.length);
      setTrailerChange(false);
    }, 300);
  }, [trailers.length]);

  const prevTrailer = useCallback(() => {
    setTrailerChange(true);
    setTimeout(() => {
      setCurrentTrailer((prev) => (prev - 1 + trailers.length) % trailers.length);
      setTrailerChange(false);
    }, 300);
  }, [trailers.length]);

  // Auto-advance trailers every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTrailer();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextTrailer]);

  const current = trailers[currentTrailer];

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-bg pt-32 md:pt-40 lg:pt-44">
      {/* Background image from YouTube thumbnail */}
      <div className="absolute inset-0 z-0">
        <img
          src={current.thumbnail}
          alt={current.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-transparent to-transparent"></div>
        {/* Premium overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Trailer info */}
          <div className={`text-left ${trailerChange ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-500`}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                  KGILL+ MEDIA HUB
                </span>
                <span className="inline-block px-3 py-1 bg-slate-blue/20 text-cyan rounded-full text-xs font-bold tracking-wider border border-slate-blue/30">
                  {current.category}
                </span>
              </div>
              
              <h1 className="display-1 font-montserrat mb-6 leading-tight">
                <span className="block">FOR PEOPLE</span>
                <span className="block epic-text animate-pulse">LIKE YOU</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8 max-w-2xl">
              {current.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => openVideo(current)}
                className="btn-primary flex items-center gap-3 premium-hover-gold"
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
              
              <a 
                href="/kgill-tv"
                className="btn-secondary flex items-center gap-3"
              >
                <span>View All Videos</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Camera className="w-4 h-4 text-marigold" />
                  <span className="text-lg font-bold font-montserrat">150+</span>
                </div>
                <p className="text-xs text-gray-400 font-inter">Stories Told</p>
              </div>
              <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Tv className="w-4 h-4 text-cyan" />
                  <span className="text-lg font-bold font-montserrat">75+</span>
                </div>
                <p className="text-xs text-gray-400 font-inter">Episodes</p>
              </div>
              <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Mic className="w-4 h-4 text-terracotta" />
                  <span className="text-lg font-bold font-montserrat">250+</span>
                </div>
                <p className="text-xs text-gray-400 font-inter">Workshops</p>
              </div>
            </div>
          </div>
          
          {/* Trailer selector */}
          <div className="glass-premium rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="display-3 font-montserrat epic-text-2">KGILL+ PROJECTS</h2>
              <div className="w-8 h-8 bg-gradient-to-br from-marigold to-terracotta rounded-full flex items-center justify-center">
                <Tv className="w-4 h-4 text-charcoal" />
              </div>
            </div>
            
            <div className="space-y-4">
              {trailers.map((trailer, index) => (
                <div 
                  key={trailer.id}
                  className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 premium-hover ${
                    index === currentTrailer 
                      ? 'bg-gold-gradient/20 border border-gold-gradient/30 scale-[1.02]' 
                      : 'hover:bg-slate-800/50 hover:border-slate-700/50 border border-transparent'
                  }`}
                  onClick={() => openVideo(trailer)}
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={trailer.thumbnail} 
                      alt={trailer.title}
                      className="w-24 h-16 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute bottom-1 right-1 text-xs bg-black/80 text-white px-2 py-1 rounded-full font-bold">
                      {trailer.duration}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-montserrat text-lg truncate">{trailer.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mt-1">{trailer.description}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full font-inter">
                      {trailer.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevTrailer}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-bold premium-hover"
              >
                Previous
              </button>
              <button 
                onClick={nextTrailer}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-bold premium-hover"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Watch CTA badge */}
      <button 
        onClick={() => openVideo(current)}
        className="absolute bottom-8 right-8 z-10 px-6 py-3 rounded-full bg-gold-gradient text-white backdrop-blur-lg border border-gold-gradient-start/30 hover:scale-105 transition-all premium-hover epic-glow font-bold flex items-center gap-2"
      >
        <Play className="w-5 h-5" />
        <span>Watch Now</span>
      </button>
    </section>

    {/* YouTube Player Modal */}
    <YouTubePlayerModal
      videoId={selectedVideo?.videoId || ''}
      title={selectedVideo?.title || ''}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  );
};

export default TrailerShowreel;