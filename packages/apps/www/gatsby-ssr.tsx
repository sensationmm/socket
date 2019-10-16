import * as React from 'react';

import { Env } from '@somo/pda-utils-env/src';

export function onRenderBody({ setHeadComponents, setPreBodyComponents }) {
  /**
   * Netlify CMS
   * @link https://www.netlifycms.org/docs/add-to-your-site/
   */
  setHeadComponents([<script key="netlify-cms" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />]);

  /**
   * Setup window ENV
   */
  // ADD ENV
  const env = {
    [Env.BrandLong]: process.env.BRAND_NAME_LONG || '',
    [Env.BrandShort]: process.env.BRAND_NAME_SHORT || '',
    [Env.BuildId]: process.env.BUILD_ID || '',
    [Env.Env]: process.env.NODE_ENV || '',
    [Env.SiteUrl]: process.env.SITE_URL || '',
  };

  setPreBodyComponents([
    <script key="env" dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(env)};` }} />,
  ]);
}
