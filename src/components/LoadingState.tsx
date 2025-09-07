import React from 'react';
import SkeletonLoader from './SkeletonLoader';

const LoadingState = ({ type = 'page' }) => {
  const renderLoadingState = () => {
    switch (type) {
      case 'page':
        return (
          <div className="min-h-screen bg-charcoal py-12">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header skeleton */}
              <div className="mb-12">
                <SkeletonLoader type="text" count={1} />
              </div>
              
              {/* Hero section skeleton */}
              <div className="mb-16">
                <div className="h-96 bg-slate-800 rounded-2xl mb-8"></div>
                <SkeletonLoader type="text" count={3} />
              </div>
              
              {/* Content sections skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <SkeletonLoader type="card" count={6} />
              </div>
              
              {/* Footer skeleton */}
              <div className="mt-16">
                <SkeletonLoader type="text" count={2} />
              </div>
            </div>
          </div>
        );
      
      case 'section':
        return (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <SkeletonLoader type="text" count={1} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkeletonLoader type="card" count={3} />
              </div>
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div className="py-8">
            <div className="max-w-4xl mx-auto px-4">
              <SkeletonLoader type="list" count={1} />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="flex items-center justify-center min-h-screen bg-charcoal">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold-gradient-start border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400 font-inter">Loading...</p>
            </div>
          </div>
        );
    }
  };

  return renderLoadingState();
};

export default LoadingState;