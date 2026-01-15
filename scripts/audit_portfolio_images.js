/**
 * Portfolio Image Audit Script
 * 
 * This script checks:
 * 1. Broken image links (404s, network errors)
 * 2. Images from non-ImageKit sources (Unsplash, Pexels, etc.)
 * 3. Image accessibility and load times
 */

import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase credentials in .env file');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

async function checkImageUrl(url, title, id) {
    try {
        const startTime = Date.now();
        const response = await fetch(url, {
            method: 'HEAD',
            timeout: 10000
        });
        const loadTime = Date.now() - startTime;

        return {
            id,
            title,
            url,
            status: response.status,
            ok: response.ok,
            loadTime,
            contentType: response.headers.get('content-type'),
        };
    } catch (error) {
        return {
            id,
            title,
            url,
            status: 'ERROR',
            ok: false,
            error: error.message,
        };
    }
}

function categorizeImageSource(url) {
    if (url.includes('ik.imagekit.io')) return 'ImageKit';
    if (url.includes('unsplash.com')) return 'Unsplash';
    if (url.includes('pexels.com')) return 'Pexels';
    if (url.includes('images.pexels.com')) return 'Pexels';
    if (url.includes('pixabay.com')) return 'Pixabay';
    if (url.includes('cloudinary.com')) return 'Cloudinary';
    return 'Other/Unknown';
}

async function auditPortfolioImages() {
    console.log(`\n${colors.cyan}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║        PORTFOLIO IMAGE AUDIT - KGILL+ MEDIA HUB           ║${colors.reset}`);
    console.log(`${colors.cyan}╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);

    // Fetch all portfolio items
    const { data: portfolioItems, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('category');

    if (error) {
        console.error(`${colors.red}❌ Error fetching portfolio items:${colors.reset}`, error);
        return;
    }

    console.log(`${colors.blue}📊 Total Portfolio Items: ${portfolioItems.length}${colors.reset}\n`);

    // Check each image
    const results = [];
    const brokenLinks = [];
    const nonImageKitSources = [];
    const slowLoaders = [];

    console.log(`${colors.yellow}🔍 Checking image URLs...${colors.reset}\n`);

    for (const item of portfolioItems) {
        const result = await checkImageUrl(item.image, item.title, item.id);
        results.push(result);

        // Check for broken links
        if (!result.ok) {
            brokenLinks.push({
                id: item.id,
                title: item.title,
                category: item.category,
                url: item.image,
                status: result.status,
                error: result.error,
            });
            console.log(`${colors.red}❌ BROKEN: [${item.category}] ${item.title}${colors.reset}`);
            console.log(`   URL: ${item.image}`);
            console.log(`   Status: ${result.status} ${result.error ? `(${result.error})` : ''}\n`);
        } else {
            console.log(`${colors.green}✓${colors.reset} [${item.category}] ${item.title} (${result.loadTime}ms)`);
        }

        // Check for non-ImageKit sources
        const source = categorizeImageSource(item.image);
        if (source !== 'ImageKit') {
            nonImageKitSources.push({
                id: item.id,
                title: item.title,
                category: item.category,
                url: item.image,
                source,
            });
        }

        // Check for slow loaders (>3 seconds)
        if (result.loadTime && result.loadTime > 3000) {
            slowLoaders.push({
                id: item.id,
                title: item.title,
                url: item.image,
                loadTime: result.loadTime,
            });
        }
    }

    // Print Summary Report
    console.log(`\n${colors.cyan}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║                      AUDIT SUMMARY                         ║${colors.reset}`);
    console.log(`${colors.cyan}╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);

    // Broken Links Report
    console.log(`${colors.red}🔴 BROKEN LINKS (${brokenLinks.length}):${colors.reset}`);
    if (brokenLinks.length === 0) {
        console.log(`${colors.green}   ✓ No broken links found!${colors.reset}\n`);
    } else {
        brokenLinks.forEach((item, index) => {
            console.log(`\n   ${index + 1}. ID: ${item.id}`);
            console.log(`      Title: ${item.title}`);
            console.log(`      Category: ${item.category}`);
            console.log(`      URL: ${item.url}`);
            console.log(`      Status: ${item.status}`);
            if (item.error) console.log(`      Error: ${item.error}`);
        });
        console.log('');
    }

    // Non-ImageKit Sources Report
    console.log(`${colors.yellow}⚠️  NON-IMAGEKIT SOURCES (${nonImageKitSources.length}):${colors.reset}`);
    if (nonImageKitSources.length === 0) {
        console.log(`${colors.green}   ✓ All images are from ImageKit!${colors.reset}\n`);
    } else {
        const sourceBreakdown = {};
        nonImageKitSources.forEach(item => {
            if (!sourceBreakdown[item.source]) {
                sourceBreakdown[item.source] = [];
            }
            sourceBreakdown[item.source].push(item);
        });

        Object.keys(sourceBreakdown).forEach(source => {
            console.log(`\n   ${colors.magenta}${source} (${sourceBreakdown[source].length} items):${colors.reset}`);
            sourceBreakdown[source].forEach((item, index) => {
                console.log(`      ${index + 1}. [${item.category}] ${item.title}`);
                console.log(`         URL: ${item.url}`);
            });
        });
        console.log('');
    }

    // Slow Loaders Report
    console.log(`${colors.yellow}🐌 SLOW LOADING IMAGES (>3s) (${slowLoaders.length}):${colors.reset}`);
    if (slowLoaders.length === 0) {
        console.log(`${colors.green}   ✓ All images load quickly!${colors.reset}\n`);
    } else {
        slowLoaders.forEach((item, index) => {
            console.log(`\n   ${index + 1}. ${item.title}`);
            console.log(`      Load Time: ${item.loadTime}ms`);
            console.log(`      URL: ${item.url}`);
        });
        console.log('');
    }

    // Statistics
    const workingLinks = results.filter(r => r.ok).length;
    const avgLoadTime = results
        .filter(r => r.loadTime)
        .reduce((sum, r) => sum + r.loadTime, 0) / results.length;

    console.log(`${colors.cyan}📈 STATISTICS:${colors.reset}`);
    console.log(`   Total Images: ${results.length}`);
    console.log(`   Working Links: ${colors.green}${workingLinks}${colors.reset}`);
    console.log(`   Broken Links: ${colors.red}${brokenLinks.length}${colors.reset}`);
    console.log(`   Average Load Time: ${avgLoadTime.toFixed(0)}ms`);
    console.log(`   ImageKit Sources: ${results.length - nonImageKitSources.length}`);
    console.log(`   Non-ImageKit Sources: ${nonImageKitSources.length}\n`);

    // Export results to JSON
    const report = {
        timestamp: new Date().toISOString(),
        totalItems: results.length,
        brokenLinks,
        nonImageKitSources,
        slowLoaders,
        statistics: {
            workingLinks,
            brokenLinks: brokenLinks.length,
            avgLoadTime: avgLoadTime.toFixed(0),
            imageKitCount: results.length - nonImageKitSources.length,
            nonImageKitCount: nonImageKitSources.length,
        },
    };

    const fs = await import('fs');
    fs.writeFileSync(
        './portfolio_audit_report.json',
        JSON.stringify(report, null, 2)
    );

    console.log(`${colors.green}✓ Full report saved to: portfolio_audit_report.json${colors.reset}\n`);
}

// Run the audit
auditPortfolioImages().catch(console.error);
