import React, { useState } from 'react';
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* View More Overlay for last image */}
                {index === previewImages.length - 1 && hasMore && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-gradient-start via-gold-gradient-end to-terracotta group-hover:scale-105 transition-all flex flex-col items-center justify-center shadow-2xl">
                    <div className="bg-charcoal/20 backdrop-blur-sm rounded-full p-4 mb-3 group-hover:scale-110 transition-transform">
                      <Grid3x3 className="w-10 h-10 md:w-14 md:h-14 text-charcoal drop-shadow-lg" />
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-charcoal font-montserrat drop-shadow-lg mb-1">View All</div>
                    <div className="text-charcoal font-inter font-bold text-base md:text-lg drop-shadow-md">
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
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold-gradient hover:bg-gradient-to-br hover:from-gold-gradient-end hover:to-gold-gradient-start flex items-center justify-center transition-all group shadow-2xl hover:scale-110"
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8 text-charcoal font-bold group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>
          </div>

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
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <OptimizedImage
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold-gradient hover:bg-gradient-to-br hover:from-gold-gradient-end hover:to-gold-gradient-start flex items-center justify-center transition-all group z-50 shadow-2xl hover:scale-110"
            aria-label="Close image"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-charcoal font-bold group-hover:rotate-90 transition-transform" />
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
