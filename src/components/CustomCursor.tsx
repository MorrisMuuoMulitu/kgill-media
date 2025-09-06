import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

const CustomCursor: React.FC = () => {
  const { position, isVisible } = useCustomCursor();

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-marigold/30 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-marigold/50 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;