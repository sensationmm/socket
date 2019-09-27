import { config } from 'dotenv';

const envPath = `.env.${process.env.NODE_ENV}`;

config({ path: envPath });

import postCssPlugins from '@somo/pda-utils-postcss-plugins/src';
import tokens from '@somo/pda-utils-tokens/src';

const requiredEnv = ['GTM_ID', 'BRAND_NAME_LONG', 'BRAND_NAME_SHORT', 'SITE_URL']
  .filter((v) => !process.env[v])
  .join(', ');

if (requiredEnv) {
  throw new Error(`${envPath} is missing env vars for ${requiredEnv}`);
}

const plugins = [
  {
    resolve: 'gatsby-plugin-postcss',
    options: {
      postCssPlugins,
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /icons/,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: process.env.BRAND_NAME_LONG,
      short_name: process.env.BRAND_NAME_SHORT,
      start_url: '/?utm_source=a2hs',
      background_color: tokens.customProperties.color.brand.main,
      theme_color: tokens.customProperties.color.brand.main,
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: 'standalone',
      orientation: 'portrait',
      icon: 'src/images/manifest-icon.png', // This path is relative to the root of the site.
      include_favicon: true, // Include favicon
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: process.env.SITE_URL,
    },
  },
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
      isTSX: true, // defaults to false
      allExtensions: true, // defaults to false
    },
  },
  {
    resolve: `gatsby-plugin-polyfill-io`,
    options: {
      features: ['IntersectionObserver'],
    },
  },
  'gatsby-transformer-json',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-remove-trailing-slashes',
  {
    resolve: 'gatsby-plugin-advanced-sitemap',
    options: {
      exclude: ['/404', '/404.html', '/preview'],
      createLinkInHead: true,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: process.env.SITE_URL,
      sitemap: [`${process.env.SITE_URL}/sitemap.xml`, `${process.env.SITE_URL}/sitemap-pages.xml`],
      env: {
        development: {
          policy: [{ userAgent: '*', disallow: '/' }],
        },
        production: {
          policy: [{ userAgent: '*' }],
        },
      },
    },
  },
];

export { plugins };
