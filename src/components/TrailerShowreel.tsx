import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const TrailerShowreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const [trailerChange, setTrailerChange] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample trailer data - in a real app, this would come from an API
  const trailers = [
    {
      id: 1,
      title: "The Digital Griot",
      description: "A cinematic journey through African storytelling traditions in the digital age",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Voices of the Youth",
      description: "Empowering young creatives across Kenya through media production",
      thumbnail: "https://images.pexels.com/photos/9324350/pexels-photo-9324350.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      duration: "5:22"
    },
    {
      id: 3,
      title: "Sinema Mtaani",
      description: "Bringing cinema to the streets - community film projects across Nairobi",
      thumbnail: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      duration: "4:18"
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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

  // Auto-advance trailers every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        nextTrailer();
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [isPlaying, nextTrailer]);

  const current = trailers[currentTrailer];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-bg pt-20 md:pt-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={current.videoUrl}
          muted={isMuted}
          loop
          onEnded={nextTrailer}
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
              <span className="inline-block px-4 py-2 bg-gold-gradient text-charcoal rounded-full text-sm font-bold tracking-wider">
                FEATURED REEL
              </span>
            </div>
            
            <h1 className="display-1 font-montserrat mb-6 leading-tight">
              <span className="block">{current.title.split(' ').slice(0, -1).join(' ')}</span>
              <span className="block epic-text animate-pulse">{current.title.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8 max-w-2xl">
              {current.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={togglePlay}
                className="btn-primary flex items-center gap-3 premium-hover-gold"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Pause Reel</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Play Reel</span>
                  </>
                )}
              </button>
              
              <button className="btn-secondary flex items-center gap-3">
                <span>View All Showreels</span>
              </button>
            </div>
          </div>
          
          {/* Trailer selector */}
          <div className="glass-premium rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
            <h2 className="display-3 font-montserrat mb-6 epic-text-2">Our Cinematic Portfolio</h2>
            
            <div className="space-y-4">
              {trailers.map((trailer, index) => (
                <div 
                  key={trailer.id}
                  className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 premium-hover ${
                    index === currentTrailer 
                      ? 'bg-gold-gradient/20 border border-gold-gradient/30 scale-[1.02]' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => {
                    setTrailerChange(true);
                    setTimeout(() => {
                      setCurrentTrailer(index);
                      setTrailerChange(false);
                    }, 300);
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={trailer.thumbnail} 
                      alt={trailer.title}
                      className="w-24 h-16 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                      {index === currentTrailer && isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <span className="absolute bottom-1 right-1 text-xs bg-black/80 text-white px-2 py-1 rounded-full font-bold">
                      {trailer.duration}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-montserrat text-lg truncate">{trailer.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mt-1">{trailer.description}</p>
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

      {/* Volume control */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-10 p-4 rounded-full bg-charcoal/70 backdrop-blur-lg border border-white/20 hover:bg-charcoal/90 transition-all premium-hover epic-glow"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </section>
  );
};

export default TrailerShowreel;