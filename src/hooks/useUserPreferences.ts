import { useState, useEffect } from 'react';

interface UserPreferences {
  theme: 'light' | 'dark';
  intent: 'creative' | 'partner' | 'client' | null;
  animations: boolean;
  notifications: boolean;
}

export const useUserPreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'dark',
    intent: null,
    animations: true,
    notifications: true
  });

  useEffect(() => {
    // Load preferences from localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedIntent = localStorage.getItem('user_intent');
    const savedAnimations = localStorage.getItem('animations');
    const savedNotifications = localStorage.getItem('notifications');
    
    setPreferences({
      theme: savedTheme === 'light' ? 'light' : 'dark',
      intent: savedIntent as 'creative' | 'partner' | 'client' | null,
      animations: savedAnimations !== 'false',
      notifications: savedNotifications !== 'false'
    });
  }, []);

  const updatePreference = (key: keyof UserPreferences, value: string | boolean) => {
    setPreferences(prev => {
      const updated = { ...prev, [key]: value };
      localStorage.setItem(key, String(value));
      return updated;
    });
  };

  const toggleTheme = () => {
    const newTheme = preferences.theme === 'dark' ? 'light' : 'dark';
    updatePreference('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const setIntent = (intent: 'creative' | 'partner' | 'client') => {
    updatePreference('intent', intent);
  };

  const toggleAnimations = () => {
    updatePreference('animations', !preferences.animations);
  };

  const toggleNotifications = () => {
    updatePreference('notifications', !preferences.notifications);
  };

  return {
    preferences,
    updatePreference,
    toggleTheme,
    setIntent,
    toggleAnimations,
    toggleNotifications
  };
};