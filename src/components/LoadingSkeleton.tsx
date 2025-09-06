import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded w-5/6"></div>
        </div>
      </div>
      
      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;