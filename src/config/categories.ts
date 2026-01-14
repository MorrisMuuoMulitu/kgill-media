// Category configuration for Photography & Videography page
// This ensures consistent category display and prevents duplicates

export const PORTFOLIO_CATEGORIES = [
    { id: 'all', label: 'All Work', icon: 'Camera' },
    { id: 'studio', label: 'Studio Sessions', icon: 'Aperture' },
    { id: 'wedding', label: 'Weddings', icon: 'HeartHandshake' },
    { id: 'events', label: 'Events', icon: 'CalendarDays' },
    { id: 'corporate', label: 'Corporate', icon: 'Building2' },
    { id: 'fashion', label: 'Fashion', icon: 'Shirt' },
    { id: 'graduation', label: 'Graduation', icon: 'Award' },
    { id: 'headshots', label: 'Headshots', icon: 'User' },
    { id: 'products', label: 'Products', icon: 'Package' },
    { id: 'real-estate', label: 'Real Estate', icon: 'Home' },
    { id: 'sports', label: 'Sports', icon: 'Bike' },
    { id: 'africanism', label: 'African Culture', icon: 'Sparkles' }
] as const;

export type CategoryId = typeof PORTFOLIO_CATEGORIES[number]['id'];
