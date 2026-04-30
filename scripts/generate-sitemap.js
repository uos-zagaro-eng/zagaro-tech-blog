const fs = require('fs');
const path = require('path');
const { loadEnvConfig } = require('@next/env');
const matter = require('gray-matter');

loadEnvConfig(process.cwd());

const POSTS_DIR = path.resolve(process.cwd(), '_posts');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const PAGINATION_OFFSET = 8;

const rootUrl = (
  process.env.NEXT_PUBLIC_ROOT_URL ||
  process.env.ROOT_URL ||
  'http://localhost:3000'
).replace(/\/+$/, '');

const toUrl = (routePath) => `${rootUrl}${routePath}`;

const withTrailingSlash = (routePath) => {
  if (routePath === '/') return '/';
  return routePath.endsWith('/') ? routePath : `${routePath}/`;
};

const readPosts = () => {
  const filenames = fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith('.md'));

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(POSTS_DIR, filename);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(source);
    const stat = fs.statSync(fullPath);

    return {
      slug,
      tags: Array.isArray(data.tags) ? data.tags : [],
      lastModified: stat.mtime.toISOString(),
    };
  });
};

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const buildSitemapXml = (entries) => {
  const urls = entries
    .map(
      ({ loc, lastmod }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const main = () => {
  const posts = readPosts();
  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort();
  const maxPage = Math.max(1, Math.ceil(posts.length / PAGINATION_OFFSET));

  const staticRoutes = ['/', '/about', '/tags'];
  const pageRoutes = Array.from(
    { length: maxPage },
    (_, idx) => `/posts/page/${idx + 1}`,
  );
  const postRoutes = posts.map(
    (post) => `/posts/${encodeURIComponent(post.slug)}`,
  );
  const tagRoutes = tags.map((tag) => `/tags/${encodeURIComponent(tag)}`);

  const now = new Date().toISOString();
  const postLastmodMap = new Map(
    posts.map((post) => [post.slug, post.lastModified]),
  );

  const allRoutes = [
    ...staticRoutes,
    ...pageRoutes,
    ...postRoutes,
    ...tagRoutes,
  ];
  const uniqueRoutes = [...new Set(allRoutes.map(withTrailingSlash))];

  const entries = uniqueRoutes.map((route) => {
    const postSlug =
      route.startsWith('/posts/') && !route.startsWith('/posts/page/')
        ? route.split('/')[2]
        : null;
    const decodedSlug = postSlug ? decodeURIComponent(postSlug) : null;
    const lastmod =
      decodedSlug && postLastmodMap.get(decodedSlug)
        ? postLastmodMap.get(decodedSlug)
        : now;

    return {
      loc: toUrl(route),
      lastmod,
    };
  });

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, buildSitemapXml(entries), 'utf8');
  console.log(`Sitemap generated: ${SITEMAP_PATH}`);
};

main();
