import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  title: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  title?: string;
  columnCount?: number; // Number of columns (default: 3)
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ 
  images, 
  title = "Gallery",
  columnCount = 3 
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageHeights, setImageHeights] = useState<number[]>([]);
  const [columns, setColumns] = useState<GalleryImage[][]>([]);

  // Calculate column layout based on image aspect ratios
  useEffect(() => {
    if (images.length === 0) return;

    // Create empty arrays for each column
    const newColumns: GalleryImage[][] = Array.from({ length: columnCount }, () => []);
    const heights: number[] = new Array(columnCount).fill(0);

    // Distribute images to columns based on current heights
    images.forEach((image, index) => {
      // For demo purposes, we'll assume a default height
      // In a real scenario, we might want to calculate based on actual image dimensions
      const shortestColumnIndex = heights.indexOf(Math.min(...heights));
      newColumns[shortestColumnIndex].push(image);
      // Simulate height as 300px for all images initially
      heights[shortestColumnIndex] += 300;
    });

    setColumns(newColumns);
    setImageHeights(heights);
  }, [images, columnCount]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
    <div className="relative">
      {/* Gallery Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-2 text-center">{title}</h3>
        <p className="text-gray-400 font-inter text-center">{images.length} stunning photos</p>
      </div>

      {/* Masonry Grid - Ultra Compact Layout */}
      <div className="gallery-masonry">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="break-inside-avoid">
            {column.map((image, indexInColumn) => {
              // Calculate the actual index in the full images array
              let actualIndex = 0;
              for (let i = 0; i < colIndex; i++) {
                actualIndex += columns[i].length;
              }
              actualIndex += indexInColumn;

              return (
                <div
                  key={actualIndex}
                  className="gallery-item group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-lg hover:shadow-gold-gradient-start/20 transition-all duration-300 transform hover:scale-[1.01]"
                  onClick={() => openLightbox(actualIndex)}
                >
                  <div className="relative overflow-hidden bg-slate-900 rounded-sm">
                    <OptimizedImage
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-1">
                        <h4 className="text-xs font-bold text-white font-montserrat truncate">{image.title}</h4>
                      </div>
                    </div>
                    
                    {/* Zoom icon */}
                    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-4 h-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-sm">
                        <Maximize2 className="w-2 h-2 text-charcoal" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50"
            aria-label="Close image"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform stroke-[3]" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50 shadow-xl hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-charcoal group-hover:-translate-x-1 transition-all font-bold" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 flex items-center justify-center transition-all group z-50 shadow-xl hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-charcoal group-hover:translate-x-1 transition-all font-bold" />
          </button>

          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={images[selectedImage]?.src}
              alt={images[selectedImage]?.title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat mb-1">
                {images[selectedImage]?.title}
              </h3>
              <p className="text-gray-400 font-inter">
                {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;