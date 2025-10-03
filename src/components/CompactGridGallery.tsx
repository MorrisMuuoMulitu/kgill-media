import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Grid3x3, Maximize2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  title: string;
}

interface CompactGridGalleryProps {
  images: GalleryImage[];
  title?: string;
  previewCount?: number;
}

const CompactGridGallery: React.FC<CompactGridGalleryProps> = ({ 
  images, 
  title = "Gallery",
  previewCount = 6 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const previewImages = images.slice(0, previewCount);
  const hasMore = images.length > previewCount;

  // Lock body scroll when gallery or lightbox is open
  useEffect(() => {
    if (isOpen || selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedImage]);

  const openGallery = () => {
    setIsOpen(true);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Compact Preview Grid - 3x2 layout */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === previewImages.length - 1 && hasMore ? 'col-span-2 md:col-span-1' : ''
              }`}
              onClick={() => index === previewImages.length - 1 && hasMore ? openGallery() : openLightbox(index)}
            >
              <div className="relative min-h-[300px] max-h-[500px] overflow-hidden bg-slate-900 flex items-center justify-center">
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* View More Overlay for last image */}
                {index === previewImages.length - 1 && hasMore && (
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate-900 to-charcoal group-hover:from-slate-900 group-hover:via-charcoal group-hover:to-slate-900 transition-all flex flex-col items-center justify-center shadow-2xl border-2 border-gold-gradient-start">
                    <div className="bg-gold-gradient rounded-full p-5 mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                      <Grid3x3 className="w-12 h-12 md:w-16 md:h-16 text-charcoal" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white font-montserrat mb-2 tracking-wide">VIEW ALL</div>
                    <div className="text-gold-gradient-start font-inter font-black text-xl md:text-2xl">
                      {images.length} Photos
                    </div>
                  </div>
                )}
                
                {/* Zoom icon for other images */}
                {!(index === previewImages.length - 1 && hasMore) && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-xl">
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-charcoal" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-charcoal overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 z-50 bg-charcoal/98 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-black font-montserrat text-white mb-1 md:mb-2">{title}</h2>
                  <p className="text-sm md:text-base text-gray-400 font-inter">{images.length} stunning photos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Close Button - middle right with blink animation */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold-gradient hover:bg-gradient-to-br hover:from-gold-gradient-end hover:to-gold-gradient-start flex items-center justify-center transition-all group shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-110 z-[9999] border-4 border-charcoal animate-pulse-slow"
            aria-label="Close gallery"
            style={{
              animation: 'pulse-blink 2s ease-in-out infinite'
            }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10 text-charcoal font-bold group-hover:rotate-90 transition-transform stroke-[3]" />
          </button>
          
          <style>{`
            @keyframes pulse-blink {
              0%, 100% {
                opacity: 1;
                transform: translateY(-50%) scale(1);
              }
              50% {
                opacity: 0.6;
                transform: translateY(-50%) scale(1.05);
              }
            }
          `}</style>

          {/* Grid Gallery */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gold-gradient-start/20 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="relative min-h-[300px] max-h-[500px] overflow-hidden bg-slate-900 flex items-center justify-center">
                      <OptimizedImage
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <h3 className="text-sm md:text-base font-bold text-white font-montserrat">{image.title}</h3>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-charcoal" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold-gradient hover:bg-gradient-to-br hover:from-gold-gradient-end hover:to-gold-gradient-start flex items-center justify-center transition-all group shadow-2xl hover:shadow-gold-gradient-start/50 hover:scale-110 z-50 border-4 border-black"
            aria-label="Close image"
            style={{
              animation: 'pulse-blink 2s ease-in-out infinite'
            }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10 text-charcoal font-bold group-hover:rotate-90 transition-transform stroke-[3]" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-gold-gradient border-2 border-white/20 hover:border-gold-gradient-start flex items-center justify-center transition-all group z-50 shadow-xl hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-charcoal group-hover:-translate-x-1 transition-all font-bold" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-gold-gradient border-2 border-white/20 hover:border-gold-gradient-start flex items-center justify-center transition-all group z-50 shadow-xl hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-charcoal group-hover:translate-x-1 transition-all font-bold" />
          </button>

          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={images[selectedImage]?.src}
              alt={images[selectedImage]?.title}
              className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-8 rounded-b-xl md:rounded-b-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat mb-1">
                {images[selectedImage]?.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-inter">
                {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompactGridGallery;
