-- Create movies table for big MP4 files with streaming support
CREATE TABLE IF NOT EXISTS public.movies (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    duration TEXT, -- e.g. "1h 45m"
    file_url TEXT NOT NULL, -- The URL to the MP4 file in Supabase Storage or external CDN
    thumbnail_url TEXT,
    category TEXT DEFAULT 'Feature Film',
    release_year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    featured BOOLEAN DEFAULT false,
    quality TEXT DEFAULT 'HD', -- e.g. "4K", "HD"
    views BIGINT DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to movies" ON public.movies
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated service role to manage movies" ON public.movies
    FOR ALL USING (auth.role() = 'service_role');

-- Create storage bucket for movies if it doesn't exist (this must be done in Supabase UI or via API)
-- Bucket name should be 'movies'
