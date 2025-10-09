import React, { useState, useMemo, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3x3, Maximize2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description?: string;
}

interface ImmersiveGalleryProps {
  images: GalleryImage[];
  title?: string;
  accentColor?: string;
}

const ImmersiveGallery: React.FC<ImmersiveGalleryProps> = ({ 
  images, 
  title = "Gallery",
  accentColor = "from-gold-gradient-start to-terracotta"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Simulate loading for skeleton effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => ['all', ...Array.from(new Set(images.map(img => img.category)))], [images]);
  const filteredImages = useMemo(() => 
    activeCategory === 'all' 
      ? images 
      : images.filter(img => img.category === activeCategory), 
    [images, activeCategory]
  );

  const previewImages = images.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setActiveCategory('all');
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <>
      {/* Compact Preview Section - Bento Box Style */}
      <div className="relative group">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-gradient-start/10 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Preview Grid */}
        {isLoading ? (
          // Skeleton Loading State
          <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[400px] md:h-[500px]">
            <div className="col-span-4 row-span-2 rounded-3xl bg-slate-800 animate-pulse"></div>
            <div className="col-span-2 row-span-1 rounded-2xl bg-slate-800 animate-pulse"></div>
            <div className="col-span-2 row-span-1 rounded-2xl bg-slate-800 animate-pulse"></div>
          </div>
        ) : (
          <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[400px] md:h-[500px]">
          {/* Large featured image */}
          <div className="col-span-4 row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl" onClick={() => setIsOpen(true)}>
            <OptimizedImage 
              src={previewImages[0]?.src}
              alt={previewImages[0]?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-2">{previewImages[0]?.title}</h3>
              <p className="text-gray-300 font-inter">{previewImages[0]?.category}</p>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-xl animate-bounce-slow`}>
                <ZoomIn className="w-6 h-6 text-charcoal group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Top right images */}
          <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl" onClick={() => setIsOpen(true)}>
            <OptimizedImage 
              src={previewImages[1]?.src}
              alt={previewImages[1]?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-all flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom right - View All button */}
          <div 
            className={`col-span-2 row-span-1 relative cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${accentColor} hover:shadow-2xl hover:shadow-gold-gradient-start/50 transition-all duration-300`}
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group-hover:scale-105 transition-transform">
              <Grid3x3 className="w-12 h-12 text-charcoal mb-3 animate-bounce-slow" />
              <div className="text-2xl font-black text-charcoal font-montserrat">View All</div>
              <div className="text-charcoal font-inter font-semibold">{images.length} Photos</div>
            </div>
          </div>
        </div>
        )}

        {/* Floating badge with glassmorphism */}
        <div className={`absolute -top-4 left-6 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border-2 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 border-[${accentColor}]`}>
          <span className={`bg-gradient-to-r ${accentColor} bg-clip-text text-transparent font-bold text-sm tracking-wider`}>
            {title.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Full-Screen Gallery Modal - ISOLATED */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md" aria-modal="true" role="dialog">
          {/* Fixed Close Button - Always Visible */}
          <button
            onClick={closeGallery}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[10000] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-110 active:scale-95 flex items-center justify-center transition-all shadow-2xl border-4 border-white/30 group animate-pulse-slow"
            aria-label="Close gallery"
            style={{ boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10 text-white font-bold group-hover:rotate-90 transition-transform duration-300 drop-shadow-2xl stroke-[3]" />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-sm font-bold bg-black/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
              Press ESC or Click to Close
            </span>
          </button>
          
          {/* Close background overlay */}
          <div 
            className="absolute inset-0" 
            onClick={closeGallery}
            aria-label="Close gallery overlay"
          />
          
          {/* Scrollable content container - ISOLATED from body */}
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* Header - Glassmorphism */}
            <div className="sticky top-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 relative">
                {/* Accent color bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor}`}></div>
                
                <div className="flex items-center">
                  <div className="pr-20">
                    <h2 className={`text-2xl md:text-4xl font-black font-montserrat mb-2 bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
                      {title}
                    </h2>
                    <p className="text-gray-400 font-inter flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentColor} animate-pulse`}></span>
                      {filteredImages.length} stunning moments
                    </p>
                  </div>
                </div>

                {/* Category Filters - Glassmorphism */}
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2.5 rounded-xl font-bold font-inter text-sm whitespace-nowrap transition-all duration-300 active:scale-95 ${
                        activeCategory === category
                          ? `bg-gradient-to-r ${accentColor} text-white shadow-xl scale-105`
                          : 'bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 border border-white/10 hover:border-white/30 hover:scale-105'
                      }`}
                      aria-pressed={activeCategory === category}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Masonry Gallery Grid - ONLY SHOWS THIS GALLERY'S IMAGES */}
            <div className="max-w-7xl mx-auto px-2 md:px-4 py-6 relative">
              {/* Parallax background effect */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className={`w-full h-full bg-gradient-to-br ${accentColor} blur-3xl`}></div>
              </div>
              
              <div className="gallery-masonry-compact relative z-10">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`gallery-item group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 active:scale-95`}
                    style={{
                      boxShadow: 'hover:0 20px 40px rgba(0,0,0,0.3)'
                    }}
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openLightbox(index);
                      }
                    }}
                    aria-label={`View image: ${image.title}`}
                  >
                    <div className="relative overflow-hidden rounded-sm">
                      <OptimizedImage
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-2 backdrop-blur-sm">
                          <h3 className="text-sm font-bold text-white font-montserrat truncate">{image.title}</h3>
                          <p className="text-gray-300 text-xs font-inter truncate">{image.category}</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg animate-bounce-slow`}>
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                  prevImage();
                } else if (e.key === 'ArrowRight') {
                  nextImage();
                }
              }}
              tabIndex={-1}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="max-w-6xl max-h-[90vh] relative">
                <img
                  src={filteredImages[selectedImage]?.src}
                  alt={filteredImages[selectedImage]?.title || 'Gallery image'}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
                  <h3 className="text-2xl font-bold text-white font-montserrat mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-gray-300 font-inter">{filteredImages[selectedImage]?.category}</p>
                  {filteredImages[selectedImage]?.description && (
                    <p className="text-gray-400 font-inter mt-2">{filteredImages[selectedImage]?.description}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImmersiveGallery;
