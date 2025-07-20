import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Environment variables - you'll need to set these
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const siteUrl = process.env.VITE_SITE_URL || 'https://maaraamhaque.com';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Static pages with their priorities and change frequencies
const staticPages = [
  { 
    url: '/', 
    priority: '1.0', 
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/about', 
    priority: '0.9', 
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/services', 
    priority: '0.9', 
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/faq', 
    priority: '0.8', 
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/blog', 
    priority: '0.8', 
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/contact', 
    priority: '0.7', 
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

async function generateSitemap() {
  try {
    console.log('Generating sitemap...');
    
    // Fetch all published blog posts
    const { data: posts, error } = await supabase
      .from('posts')
      .select('slug, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      process.exit(1);
    }

    // Create sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add blog posts
    if (posts && posts.length > 0) {
      posts.forEach(post => {
        const postDate = new Date(post.created_at).toISOString().split('T')[0];
        sitemap += `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      });
    }

    sitemap += `
</urlset>`;

    // Write sitemap to public directory
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
    console.log(`📄 Total URLs: ${staticPages.length + (posts?.length || 0)}`);
    console.log(`🏠 Static pages: ${staticPages.length}`);
    console.log(`📝 Blog posts: ${posts?.length || 0}`);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();