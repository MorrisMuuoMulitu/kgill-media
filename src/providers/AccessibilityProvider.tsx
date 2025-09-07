import React, { useState, useEffect, ReactNode } from 'react';
import AccessibilityContext from '../context/AccessibilityContext';

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSizeState] = useState<'small' | 'medium' | 'large'>('medium');

  useEffect(() => {
    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Load saved preferences
    const savedReducedMotion = localStorage.getItem('reduced_motion');
    const savedHighContrast = localStorage.getItem('high_contrast');
    const savedFontSize = localStorage.getItem('font_size') as 'small' | 'medium' | 'large';
    
    setReducedMotion(savedReducedMotion ? savedReducedMotion === 'true' : prefersReducedMotion);
    setHighContrast(savedHighContrast ? savedHighContrast === 'true' : prefersHighContrast);
    setFontSizeState(savedFontSize || 'medium');
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
    document.documentElement.classList.add(`font-${fontSize}`);
    
    // Save preferences
    localStorage.setItem('reduced_motion', reducedMotion.toString());
    localStorage.setItem('high_contrast', highContrast.toString());
    localStorage.setItem('font_size', fontSize);
  }, [reducedMotion, highContrast, fontSize]);

  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const setFontSize = (size: 'small' | 'medium' | 'large') => setFontSizeState(size);

  return (
    <AccessibilityContext.Provider value={{
      reducedMotion,
      highContrast,
      fontSize,
      toggleReducedMotion,
      toggleHighContrast,
      setFontSize
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};