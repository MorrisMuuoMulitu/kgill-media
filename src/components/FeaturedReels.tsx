import React, { useState } from 'react';
import { Play, Clock, Eye, Star, ChevronRight, ChevronLeft, Tv, ExternalLink } from 'lucide-react';
import YouTubePlayerModal from './YouTubePlayerModal';

interface Reel {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  views: string;
  date: string;
  videoId?: string;
  video_id?: string;
  featured?: boolean;
  year: string;
}

interface FeaturedReelsProps {
  reels: Reel[];
}

const FeaturedReels: React.FC<FeaturedReelsProps> = ({ reels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Reel | null>(null);

  const featuredReels = reels.filter(reel => reel.featured);
  const currentReel = featuredReels[currentIndex];

  const getRandomReels = () => {
    const nonCarouselReels = reels.filter(reel => !reel.featured);
    const availableReels = nonCarouselReels.length >= 3 ? nonCarouselReels : reels;
    const shuffled = [...availableReels].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  const randomReels = getRandomReels();

  const nextReel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredReels.length);
  };

  const prevReel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredReels.length) % featuredReels.length);
  };

  const openVideo = (reel: Reel) => {
    setSelectedVideo(reel);
    setIsModalOpen(true);
  };

  if (featuredReels.length === 0) return null;

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-charcoal via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-gradient/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-full border border-gold-gradient-start/30">
              <Tv className="w-5 h-5 text-gold-gradient-start" />
              <span className="text-gold-gradient-start font-bold text-sm tracking-wider">FEATURED REELS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat mb-6 epic-text">KGILL TV Highlights</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-inter max-w-3xl mx-auto leading-relaxed">Curated selection of our most engaging video content</p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-gold-gradient-start/50 transition-all duration-500 mb-12">
              <div className="aspect-video bg-gradient-to-br from-marigold/20 to-terracotta/20 rounded-3xl flex items-center justify-center">
                <img src={currentReel?.thumbnail} alt={currentReel?.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-60 hover:opacity-80 transition-opacity"></div>
                <button onClick={() => openVideo(currentReel)} className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-charcoal ml-2" />
                  </div>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1.5 bg-gold-gradient text-charcoal rounded-full text-xs font-bold">{currentReel?.category}</span>
                    <span className="px-3 py-1.5 bg-slate-900/80 text-gray-300 rounded-full text-xs font-semibold border border-slate-700/50">{currentReel?.duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-2 truncate">{currentReel?.title}</h3>
                  <p className="text-gray-300 font-inter line-clamp-2">{currentReel?.description}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={prevReel} className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-gold-gradient-start/50 rounded-xl text-white font-bold text-sm transition-all duration-300 group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous</span>
              </button>
              <div className="flex gap-2">
                {featuredReels.map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold-gradient scale-125' : 'bg-white/30 hover:bg-white/50'}`} />
                ))}
              </div>
              <button onClick={nextReel} className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-gold-gradient-start/50 rounded-xl text-white font-bold text-sm transition-all duration-300 group">
                <span>Next</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white">All Featured Reels</h3>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gold-gradient/20 hover:bg-gold-gradient/30 border border-gold-gradient-start/50 hover:border-gold-gradient-start rounded-lg text-gold-gradient-start font-bold text-sm transition-all duration-300 group">
                <span>View All</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {randomReels.map((reel) => (
                <div key={reel.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-white/10 hover:border-cyan/50 transition-all duration-300 cursor-pointer" onClick={() => openVideo(reel)}>
                  <div className="relative aspect-video">
                    <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-charcoal ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-bold">{reel.duration}</div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold font-montserrat text-white truncate">{reel.title}</h4>
                      <span className="flex-shrink-0 px-2 py-1 bg-gold-gradient/20 text-gold-gradient-start rounded-lg text-xs font-bold ml-2">{reel.category}</span>
                    </div>
                    <p className="text-gray-400 font-inter text-sm line-clamp-2 mb-3">{reel.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 font-inter">
                      <div className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /><span>{reel.views}</span></div>
                      <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>{reel.date}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <YouTubePlayerModal
        videoId={selectedVideo?.video_id || selectedVideo?.videoId || ''}
        title={selectedVideo?.title || ''}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FeaturedReels;