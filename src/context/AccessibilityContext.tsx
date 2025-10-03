import { createContext, useContext } from 'react';

interface AccessibilityContextType {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

// Separate the provider into its own file to fix the fast refresh warning
export default AccessibilityContext;