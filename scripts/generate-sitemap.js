const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://severin.io';

// Static pages
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/projects', priority: '0.8', changefreq: 'monthly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/posts', priority: '0.7', changefreq: 'weekly' },
];

// Get all post files
function getPostFiles() {
  const postsDirectory = path.join(process.cwd(), 'pages', 'posts');
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
      .filter(file => file !== 'index.md')
      .map(file => ({
        url: `/posts/${file.replace(/\.(mdx|md)$/, '')}`,
        priority: '0.6',
        changefreq: 'monthly'
      }));
  } catch (error) {
    console.log('No posts directory found');
    return [];
  }
}

// Generate sitemap XML
function generateSitemap() {
  const posts = getPostFiles();
  const allPages = [...staticPages, ...posts];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${DOMAIN}${page.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${page.url}" />
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
