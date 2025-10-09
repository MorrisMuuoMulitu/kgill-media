const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = ['public/images/placeholders', 'public/images/icons'];
dirs.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Generate simple SVG placeholders
const placeholders = [
  { name: 'default', width: 800, height: 600, color: '#111112' },
  { name: 'studio', width: 800, height: 600, color: '#232336' },
  { name: 'wedding', width: 800, height: 600, color: '#FFB347' },
  { name: 'corporate', width: 800, height: 600, color: '#3B82F6' },
  { name: 'events', width: 800, height: 600, color: '#FF5E62' },
  { name: 'fashion', width: 800, height: 600, color: '#A78BFA' },
  { name: 'real-estate', width: 800, height: 600, color: '#10B981' },
  { name: 'headshots', width: 400, height: 600, color: '#FBBF24' },
  { name: 'product', width: 600, height: 600, color: '#8B5CF6' },
  { name: 'graduation', width: 800, height: 600, color: '#06B6D4' },
  { name: 'africanism', width: 800, height: 600, color: '#F59E0B' }
];

// Generate SVG placeholder files
placeholders.forEach(placeholder => {
  const svgContent = `
<svg width="${placeholder.width}" height="${placeholder.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${placeholder.color}" />
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">
    ${placeholder.name.charAt(0).toUpperCase() + placeholder.name.slice(1)} Placeholder
  </text>
</svg>
`;

  const fileName = `${placeholder.name}-placeholder.svg`;
  const filePath = path.join(__dirname, '..', 'public', 'images', 'placeholders', fileName);
  
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Generated ${fileName}`);
});

console.log('All placeholder images generated successfully!');