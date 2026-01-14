-- Comprehensive Seed Data for KGILL Media (v2)
-- Copy and paste this into your Supabase SQL Editor.

-- Clear existing data to avoid duplicates (optional but recommended for a clean start)
TRUNCATE youtube_videos, portfolio_items, packages, services CASCADE;

-- 1. Insert YouTube Videos
INSERT INTO youtube_videos (title, description, thumbnail, category, duration, views, video_id, featured, year)
VALUES 
('Kick Off S02 Ep 1 (We are back ~ the reunion)', 'The game is back — and so is the drama. Papa, Candy, Kevo, and Coco return for a brand-new season filled with football fever, messy relationships, and ghetto hustle.', 'https://img.youtube.com/vi/Z6BPF8gbquY/maxresdefault.jpg', 'Web Series', '14:15', '1.2K', 'Z6BPF8gbquY', true, '2025'),
('Our Journey & Vision', 'Experience the story of KGILL+ Media Hub and our mission to transform communities through storytelling.', 'https://img.youtube.com/vi/scdj1xKxDqs/maxresdefault.jpg', 'Documentary', '05:30', '800', 'scdj1xKxDqs', true, '2024'),
('Kick Off season 2 Trailer', 'The game is back — and so is the drama. Childhood friends return with bigger secrets, louder arguments, and football fever.', 'https://img.youtube.com/vi/UX8p6XwZxbA/maxresdefault.jpg', 'Web Series', 'Short', '61', 'UX8p6XwZxbA', false, '2025'),
('A Sinema Mtaani | AUMA Short film', 'Story of a 12-year-old girl in Kibera experiencing her first period. Addresses menstrual health, dignity.', 'https://img.youtube.com/vi/bp_BnrK-hOo/maxresdefault.jpg', 'Short Film', '12:54', '2.7K', 'bp_BnrK-hOo', true, '2025'),
('A Sinema Mtaani | Wishes Short Film', 'Short film addressing relationship dynamics and domestic violence themes.', 'https://img.youtube.com/vi/MzMwB13sWWQ/maxresdefault.jpg', 'Short Film', '16:23', '15K', 'MzMwB13sWWQ', false, '2025'),
('A Sinema Mtaani | Dark Valentine Short Film', 'A haunting tale inspired by real femicide cases', 'https://img.youtube.com/vi/NWPQemVFUXQ/maxresdefault.jpg', 'Short Film', '16:23', 'Unknown', 'NWPQemVFUXQ', true, '2025');

-- 2. Insert Services
INSERT INTO services (id, category, title, icon, description, details, features)
VALUES 
('studio', 'Production', 'Media Production', 'Camera', 'Professional photography and videography for events, organizations, and brands.', 'High-quality promotional videos, adverts, and corporate content catered to your needs.', ARRAY['Event Photography', 'Videography Services', 'Promotional Videos', 'Corporate Content']),
('wedding', 'Film', 'Documentary & Film Production', 'Video', 'Creation of short films, feature projects, and documentaries.', 'Authentic African stories that drive social conversations.', ARRAY['Short Films', 'Feature Documentaries', 'Social Issue Films', 'Storytelling Workshops']),
('events', 'Community', 'Community Programs & Workshops', 'Users', 'Initiatives like Sinema Mtaani and Future Storytellers.', 'Empowering youth through mentorship, training, and storytelling platforms.', ARRAY['Sinema Mtaani', 'Creative Workshops', 'Training Sessions', 'Networking Events']);

-- 3. Insert Portfolio Items (Comprehensive)
INSERT INTO portfolio_items (title, category, image, type, year, width, height)
VALUES 
-- Studio Sessions
('Midnight Bass', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions1.jpg?updatedAt=1757778687521', 'Studio Session', '2024', 800, 1200),
('Vocal Layers', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions2.jpg?updatedAt=1757778686276', 'Studio Session', '2024', 800, 1200),
('Synth Dreams', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions3.jpg?updatedAt=1757778686459', 'Studio Session', '2024', 800, 1200),
('Drum Mastery', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions4.jpg?updatedAt=1757778688452', 'Studio Session', '2024', 800, 1200),
('Acoustic Soul', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions5.jpg?updatedAt=1757778687035', 'Studio Session', '2024', 800, 1200),
('Mixing Magic', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Studio_Sessions/Sessions6.jpg?updatedAt=1757778689476', 'Studio Session', '2024', 800, 1200),

-- Headshots
('Professional Headshot', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/HeadShot1.jpg?updatedAt=1757781883110', 'Headshot', '2024', 800, 1000),
('Corporate Headshot', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot10.jpg?updatedAt=1757781887276', 'Headshot', '2024', 800, 1000),
('Business Headshot', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot2.jpg?updatedAt=1757781880859', 'Headshot', '2024', 800, 1000),
('Executive Headshot', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot3.jpg?updatedAt=1757781886251', 'Headshot', '2024', 800, 1000),
('Professional Portrait', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot4.jpg?updatedAt=1757781885300', 'Headshot', '2024', 800, 1000),
('Headshot Session', 'studio', 'https://ik.imagekit.io/5zp8ovb7c/Kgill/Headshots/Headshot5.jpg?updatedAt=1757781884664', 'Headshot', '2024', 800, 1000);

-- 4. Insert Packages
INSERT INTO packages (service_id, name, price, features)
VALUES 
('studio', 'Basic Session', 'KSh 15,000', ARRAY['1 hour session', '10 edited photos', 'Online gallery']),
('studio', 'Premium Session', 'KSh 35,000', ARRAY['3 hour session', '30 edited photos', '1 min highlight', 'Online gallery']),
('wedding', 'Standard Coverage', 'KSh 150,000', ARRAY['Full day coverage', 'Edited highlight film', 'Raw footage', 'Digital delivery']);
