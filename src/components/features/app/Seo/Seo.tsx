import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ROOT_URL } from '@/config/app';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const { basePath } = useRouter();
  const imageURL = joinPath(ROOT_URL, '/assets/author.png');
  const withBasePath = (path: string) => `${basePath}${path}`;

  return (
    <>
      <DefaultSeo
        defaultTitle="ZAGARO-TechBlog"
        description="ZAGARO-TechBlog"
        openGraph={{
          type: 'website',
          title: 'ZAGARO-TechBlog',
          description: 'ZAGARO-TechBlog',
          site_name: 'ZAGARO-TechBlog',
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          { rel: 'icon', href: withBasePath('/favicon.ico') },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: withBasePath('/favicons/favicon-16x16.png'),
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: withBasePath('/favicons/favicon-32x32.png'),
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: withBasePath('/favicons/apple-touch-icon-180x180.png'),
          },
          {
            rel: 'mask-icon',
            href: withBasePath('/favicons/safari-pinned-tab.svg'),
            color: '#5bbad5',
          },
        ]}
      />
    </>
  );
};
