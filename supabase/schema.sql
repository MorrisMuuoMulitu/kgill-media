-- KG TV Videos Table
CREATE TABLE youtube_videos (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail TEXT,
  category TEXT,
  duration TEXT,
  views TEXT,
  date TEXT,
  video_id TEXT NOT NULL UNIQUE,
  featured BOOLEAN DEFAULT FALSE,
  year TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Portfolio Items Table
CREATE TABLE portfolio_items (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  type TEXT,
  year TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Services Table
CREATE TABLE services (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  icon TEXT, -- Lucide icon name
  description TEXT,
  features TEXT[], -- Array of strings
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Service Packages Table
CREATE TABLE packages (
  id BIGSERIAL PRIMARY KEY,
  service_id TEXT REFERENCES services(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  features TEXT[], -- Array of strings
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Contact Submissions Table (optional extra)
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT,
  message TEXT,
  status TEXT DEFAULT 'new', -- e.g., 'new', 'replied', 'archived'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE youtube_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create Policies (Read-only for public, all for authenticated admin)
-- Public access
CREATE POLICY "Allow public read-only access to youtube_videos" ON youtube_videos FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to portfolio_items" ON portfolio_items FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to packages" ON packages FOR SELECT USING (true);

-- Admin access (requires authentication)
CREATE POLICY "Allow authenticated full access to youtube_videos" ON youtube_videos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access to portfolio_items" ON portfolio_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access to services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access to packages" ON packages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated full access to contact_submissions" ON contact_submissions FOR ALL USING (auth.role() = 'authenticated');

-- Public submission for contacts
CREATE POLICY "Allow public to insert contact submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
