import React, { useState } from 'react';
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
}

const ImmersiveGallery: React.FC<ImmersiveGalleryProps> = ({ images, title = "Gallery" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const previewImages = images.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
      <div className="relative">
        {/* Preview Grid */}
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
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-xl">
                <ZoomIn className="w-6 h-6 text-charcoal" />
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
            className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gold-gradient-start via-terracotta to-purple-gradient-start"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group-hover:scale-105 transition-transform">
              <Grid3x3 className="w-12 h-12 text-charcoal mb-3" />
              <div className="text-2xl font-black text-charcoal font-montserrat">View All</div>
              <div className="text-charcoal font-inter font-semibold">{images.length} Photos</div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-4 left-6 px-5 py-2.5 bg-slate-900/90 backdrop-blur-xl rounded-full border border-gold-gradient-start/30 shadow-2xl">
          <span className="text-gold-gradient-start font-bold text-sm tracking-wider">{title.toUpperCase()}</span>
        </div>
      </div>

      {/* Full-Screen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-charcoal/98 backdrop-blur-sm">
          <div className="absolute inset-0 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-xl border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black font-montserrat text-white mb-2">{title}</h2>
                    <p className="text-gray-400 font-inter">{filteredImages.length} stunning moments</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 flex items-center justify-center transition-all group"
                  >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                {/* Category Filters */}
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2.5 rounded-xl font-bold font-inter text-sm whitespace-nowrap transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gold-gradient text-charcoal shadow-xl shadow-gold-gradient-start/30 scale-105'
                          : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-gold-gradient-start/50 hover:scale-105'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Masonry Gallery Grid - Ultra Compact */}
            <div className="max-w-7xl mx-auto px-2 md:px-4 py-6">
              <div className="gallery-masonry-compact">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="gallery-item group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-lg hover:shadow-gold-gradient-start/30 transition-all duration-300 transform hover:scale-[1.01]"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-sm">
                      <OptimizedImage
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-1.5">
                          <h3 className="text-xs font-bold text-white font-montserrat truncate">{image.title}</h3>
                          <p className="text-gray-300 text-xs font-inter truncate">{image.category}</p>
                        </div>
                      </div>
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-4 h-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-sm">
                          <ZoomIn className="w-2 h-2 text-charcoal" />
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
            <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="max-w-6xl max-h-[90vh] relative">
                <img
                  src={filteredImages[selectedImage]?.src}
                  alt={filteredImages[selectedImage]?.title}
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
