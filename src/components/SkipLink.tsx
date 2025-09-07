import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-marigold text-charcoal px-4 py-2 rounded-lg font-inter font-bold z-50 focus:outline-none focus:ring-2 focus:ring-marigold/50"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;