-- SQL Script to Fix Broken Portfolio Images
-- Run this in Supabase SQL Editor
-- Date: January 14, 2026

-- Fix Event12.jpg (Birthday Party) - Already attempted but verify
UPDATE portfolio_items 
SET image = 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200'
WHERE id IN (207, 349);

-- Fix Commercial - Brand Campaign (3 items)
-- Replace with working commercial/product photography
UPDATE portfolio_items 
SET image = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE id IN (609, 467, 325);

-- Fix Fashion - Street Style (4 items)
-- Replace with working street fashion image
UPDATE portfolio_items 
SET image = 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE id IN (600, 316, 174, 458);

-- Fix Fashion - Cultural Wear (4 items)
-- Replace with working cultural fashion image
UPDATE portfolio_items 
SET image = 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE id IN (599, 315, 173, 457);

-- Fix Wedding - Traditional Wedding (3 items)
-- Replace with working traditional wedding image
UPDATE portfolio_items 
SET image = 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE id IN (596, 312, 454);

-- Verify the fixes
SELECT id, title, category, image 
FROM portfolio_items 
WHERE id IN (609, 467, 325, 207, 349, 600, 599, 315, 316, 457, 173, 174, 458, 596, 312, 454)
ORDER BY category, id;
