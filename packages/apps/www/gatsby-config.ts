import { config } from 'dotenv';

const activeEnvironment = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'production';

// tslint:disable-next-line:no-console
console.info(`Using environment config: '${activeEnvironment}'`);

config({ path: `.env.${activeEnvironment}` });

import postCssPlugins from '@somo/pda-utils-postcss-plugins/src';
import tokens from '@somo/pda-utils-tokens/src';

const requiredEnvironmentVars = [
  'GTM_ID',
  'BRAND_NAME_LONG',
  'BRAND_NAME_SHORT',
  'SITE_URL',
  'API_BASE_URL',
  'AUTHORISATION_HEADER',
];

const getMissingEnvironmentVars = (requiredVars: string[]): string => {
  return requiredVars.filter((v) => !process.env[v]).join(', ');
};

const missingEnvironmentVars = getMissingEnvironmentVars(requiredEnvironmentVars);

if (missingEnvironmentVars) {
  throw new Error(`${activeEnvironment} is missing env vars for ${missingEnvironmentVars}`);
}

const plugins = [
  `gatsby-plugin-sitemap`,
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-KPSGWRH',
      includeInDevelopment: false,
      defaultDataLayer: { platform: 'gatsby' },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blogs`,
      path: `${__dirname}/src/content/blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/content/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `authors`,
      path: `${__dirname}/src/content/authors`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
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
      display: 'standalone',
      orientation: 'portrait',
      icon: 'src/images/manifest-icon.png',
      include_favicon: true,
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
      isTSX: true,
      allExtensions: true,
    },
  },
  {
    resolve: `gatsby-plugin-polyfill-io`,
    options: {
      features: ['IntersectionObserver', 'NodeList.prototype.forEach', 'Array.prototype.forEach'],
    },
  },
  'gatsby-plugin-netlify-cms',
  'gatsby-transformer-json',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-react-axe',
    options: {
      axeOptions: {
        rules: [
          {
            id: 'document-title',
            enabled: false,
          },
          {
            id: 'landmark-one-main',
            enabled: false,
          },
          {
            id: 'html-has-lang',
            enabled: false,
          },
          {
            id: 'html-lang-valid',
            enabled: false,
          },
          {
            id: 'page-has-heading-one',
            enabled: false,
          },
        ],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: process.env.SITE_URL,
      sitemap: [`${process.env.SITE_URL}/sitemap.xml`],
      env: {
        development: {
          policy: [{ userAgent: '*', disallow: '/' }],
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
  },
  {
    resolve: `gatsby-plugin-archives`,
    options: {
      exclude:
        activeEnvironment === 'production'
          ? [/(login|login-success|form-example|account|register|registration-success|smart-tariff)/i]
          : [],
      productionOnly: true,
    },
  },
];

const mapping = {
  'MarkdownRemark.frontmatter.author': `MarkdownRemark.frontmatter.fullName`,
};

const siteMetadata = {
  siteUrl: process.env.SITE_URL,
};

export { siteMetadata, plugins, mapping };
