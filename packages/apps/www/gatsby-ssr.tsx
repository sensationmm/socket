import * as React from 'react';

import { Env } from '@somo/pda-utils-env/src';

import wrapWithProviderSSR from './bootstrap/wrap-with-provider-ssr';

export const wrapRootElement = wrapWithProviderSSR;

export function onRenderBody({ setPreBodyComponents }) {
  const env = {
    [Env.BrandLong]: process.env.BRAND_NAME_LONG || '',
    [Env.BrandShort]: process.env.BRAND_NAME_SHORT || '',
    [Env.BuildId]: process.env.BUILD_ID || '',
    [Env.SiteUrl]: process.env.SITE_URL || '',
    [Env.ApiBaseUrl]: process.env.API_BASE_URL || '',
    [Env.AuthorisationHeader]: process.env.AUTHORISATION_HEADER || '',
    [Env.GraphqlUrl]: process.env.GRAPHQL_URL || '',
  };

  setPreBodyComponents([
    <script key="env" dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(env)};` }} />,
  ]);
}
