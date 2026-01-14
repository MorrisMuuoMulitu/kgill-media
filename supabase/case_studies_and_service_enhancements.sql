-- Add Case Studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  challenge TEXT,
  solution TEXT,
  impact TEXT,
  image TEXT,
  video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add enhancements to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS gradient TEXT;
ALTER TABLE services ADD COLUMN IF NOT EXISTS stats TEXT;

-- Enable RLS for case_studies
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Create Policies for case_studies
CREATE POLICY "Allow public read-only access to case_studies" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to case_studies" ON case_studies FOR ALL USING (auth.role() = 'authenticated');

-- Update Services with original gradients and stats
UPDATE services SET gradient = 'from-marigold to-terracotta', stats = '500+ Events Covered' WHERE id = 'studio';
UPDATE services SET gradient = 'from-cyan to-slate-blue', stats = '150+ Productions' WHERE id = 'wedding';
UPDATE services SET gradient = 'from-terracotta to-marigold', stats = '250+ Workshops' WHERE id = 'events';

-- Insert original Case Study
INSERT INTO case_studies (title, client, challenge, solution, impact, image, video_url)
VALUES (
  'The Real People Talk Show',
  'KGILL TV',
  'Creating a platform where conversations are pure, honest and authentic',
  'Weekly talk show featuring real people discussing real issues that matter to Kenyan communities',
  'Growing audience engagement and community participation in social discourse',
  'https://img.youtube.com/vi/Z6BPF8gbquY/maxresdefault.jpg',
  '/kgill-tv'
);

-- Add missing services to services table
INSERT INTO services (id, category, title, icon, description, details, features, gradient, stats)
VALUES 
('consultancy', 'Strategy', 'Content Strategy & Consultancy', 'Monitor', 'Offering strategic guidance for brands, NGOs, and organizations on how to use storytelling and media for impact and visibility.', 'We provide brand strategy, media planning, and impact measurement.', ARRAY['Brand Strategy', 'Media Planning', 'Impact Measurement', 'Visibility Enhancement'], 'from-slate-blue to-cyan', '75+ Organizations Served'),
('shows', 'Media', 'Shows & Podcasts', 'Tv', 'Development and hosting of lifestyle shows, talk series, and podcasts that spotlight culture, creativity, and social issues.', 'We develop talk shows, lifestyle series, and provide podcast hosting.', ARRAY['Talk Shows', 'Lifestyle Series', 'Podcast Hosting', 'Cultural Spotlight'], 'from-purple to-pink', '75+ Episodes'),
('advocacy', 'Advocacy', 'Advocacy & Awareness Campaigns', 'Megaphone', 'Leveraging art, media, and innovation to raise awareness on pressing issues.', 'Focusing on climate action, education, gender equality, and youth empowerment.', ARRAY['Climate Action Campaigns', 'Education Advocacy', 'Gender Equality', 'Youth Empowerment'], 'from-green to-teal', '50+ Campaigns');
