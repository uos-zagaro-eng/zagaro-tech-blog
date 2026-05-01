import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { ROOT_URL } from '../src/config/app';

const POSTS_DIR = path.resolve(process.cwd(), '_posts');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const PAGINATION_OFFSET = 8;

const rootUrl = ROOT_URL.replace(/\/+$/, '');

const toUrl = (routePath: string) => `${rootUrl}${routePath}`;

const withTrailingSlash = (routePath: string) => {
  if (routePath === '/') return '/';
  return routePath.endsWith('/') ? routePath : `${routePath}/`;
};

type PostMeta = {
  slug: string;
  tags: string[];
  lastModified: string;
};

const readPosts = (): PostMeta[] => {
  const filenames = fs.readdirSync(POSTS_DIR).filter((name) => name.endsWith('.md'));

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

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const buildSitemapXml = (entries: Array<{ loc: string; lastmod: string }>) => {
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
  const tags = Array.from(
    new Set(posts.reduce<string[]>((acc, post) => acc.concat(post.tags), [])),
  ).sort();
  const maxPage = Math.max(1, Math.ceil(posts.length / PAGINATION_OFFSET));

  const staticRoutes = ['/', '/about', '/tags'];
  const pageRoutes = Array.from(
    { length: maxPage },
    (_, idx) => `/posts/page/${idx + 1}`,
  );
  const postRoutes = posts.map((post) => `/posts/${encodeURIComponent(post.slug)}`);
  const tagRoutes = tags.map((tag) => `/tags/${encodeURIComponent(tag)}`);

  const now = new Date().toISOString();
  const postLastmodMap = new Map(posts.map((post) => [post.slug, post.lastModified]));

  const allRoutes = [...staticRoutes, ...pageRoutes, ...postRoutes, ...tagRoutes];
  const uniqueRoutes = Array.from(new Set(allRoutes.map(withTrailingSlash)));

  const entries = uniqueRoutes.map((route) => {
    const postSlug =
      route.startsWith('/posts/') && !route.startsWith('/posts/page/')
        ? route.split('/')[2]
        : null;
    const decodedSlug = postSlug ? decodeURIComponent(postSlug) : null;
    const lastmod =
      decodedSlug && postLastmodMap.get(decodedSlug)
        ? postLastmodMap.get(decodedSlug)!
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
