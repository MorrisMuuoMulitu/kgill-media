import React from 'react';
import { AccessibilityProvider as BaseAccessibilityProvider } from '../providers/AccessibilityProvider';

const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BaseAccessibilityProvider>{children}</BaseAccessibilityProvider>;
};

export default AccessibilityProvider;