# KGILL+ Media Hub - Admin Upload Guide

Welcome to the KGILL+ Media Hub administration guide. This document provides instructions on how to manage content effectively across the platform.

## 1. Movies & Productions
The Movies section supports full cinematic streaming. To add a new production:

### Recommended Video Specifications:
- **Format:** MP4 (H.264/AAC)
- **Resolution:** 1080p (HD) or 4K
- **File Size:** Max 50MB (Supabase Free limit). Use **GitHub Releases** for larger files.
- **Thumbnail:** 16:9 ratio (1920x1080 recommended)

---

## High-Performance Video Hosting (FREE)

### Option A: GitHub Releases (Best for Large Files)
Use this method for high-quality cinematic movies up to **2GB**:

1. **Go to GitHub**: Open your repository in the browser.
2. **Releases**: Click **"Create a new release"** on the right sidebar.
3. **Upload**: Scroll to the bottom to the **"Attach binaries"** area and drop your movie there.
4. **Publish**: Save/Publish the release.
5. **Copy Link**: Right-click the uploaded asset in the release list and select **"Copy Link Address"**.
6. **Admin Panel**: Paste this link into the **Movie File URL** field.

### Option B: Cloudinary (Best for Smooth Streaming)
[Cloudinary](https://cloudinary.com/) is the luxury standard for video hosting. 

**Advantages:**
- **Auto-Optimization:** Automatically compresses video for faster loading.
- **High-Speed CDN:** Content delivered from the server closest to the viewer.
- **Direct Links:** Provides clean `.mp4` links that work perfectly with our cinematic player.
- **Free Tier:** Very generous storage and bandwidth limits.

**How to use:**
1. Upload your video to the Cloudinary Media Library.
2. Click the **"Link" icon** or copy the **URL** from the file details.
3. Paste the URL into the **Movie File URL** field in the Admin Panel.

---

### Step-by-Step Upload:
1. **Upload to Storage:** Go to your Supabase Dashboard -> Storage and upload the MP4 to the `movies` bucket.
2. **Get URL:** Copy the public URL of the uploaded file.
3. **Add Entry:** In the Admin Panel -> Movies Manager, click "Add Single Movie" and paste the URL.
4. **Thumbnail:** Host your thumbnail on ImageKit or Supabase and provide the link.

---

## 2. Portfolio (Photography & Videography)
Managed via the Portfolio Manager.

### Step-by-Step:
- **Bulk Upload:** Use the "Bulk Upload" button to drag and drop multiple images at once.
- **CSV Metadata:** To avoid manual typing, download the CSV template, fill in the filenames and titles, and upload the CSV to automatch metadata.
- **Aspect Ratios:** Supports all ratios, but 4:5 or 2:3 works best for portraits.

---

## 3. KG TV (YouTube Content)
KG TV uses YouTube video IDs for seamless integration.

### Step-by-Step:
1. Upload your video to YouTube.
2. Copy the Video ID (the string after `v=` in the URL).
3. In KG TV Manager, add the ID and select a category.
4. The system will automatically fetch thumbnails from YouTube.

---

## 4. Bulk Upload Tips
- **Filenames:** Match your CSV filenames EXACTLY to the actual file names (e.g., `wedding-01.jpg`).
- **Processing:** Wait for the "Completed" checkmark before closing the upload modal.
- **Categories:** Stick to existing categories for consistent filtering on the public site.

---

## 5. Security & Deletion
- All deletions require confirmation via a secure dialog.
- Deleted items are permanently removed from the database but may still exist in Storage. Manually clean the Supabase Storage if you need to recover space.
