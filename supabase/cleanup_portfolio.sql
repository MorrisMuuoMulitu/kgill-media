-- CRITICAL: Remove ALL non-ImageKit images from portfolio
-- This script removes images from Pexels, Unsplash, and other external sources
-- Date: January 14, 2026

-- Step 1: Identify and DELETE all non-ImageKit portfolio items
DELETE FROM portfolio_items 
WHERE image NOT LIKE '%ik.imagekit.io%'
AND image NOT LIKE '%imagekit.io%';

-- Step 2: Find and remove duplicate images (same image URL used multiple times)
-- Keep only the first occurrence of each unique image
DELETE FROM portfolio_items
WHERE id NOT IN (
  SELECT MIN(id)
  FROM portfolio_items
  GROUP BY image
);

-- Step 3: Verify remaining items are all ImageKit
SELECT 
  COUNT(*) as total_items,
  COUNT(CASE WHEN image LIKE '%imagekit.io%' THEN 1 END) as imagekit_items,
  COUNT(CASE WHEN image NOT LIKE '%imagekit.io%' THEN 1 END) as non_imagekit_items
FROM portfolio_items;

-- Step 4: Show remaining items by category
SELECT category, COUNT(*) as count
FROM portfolio_items
GROUP BY category
ORDER BY category;
