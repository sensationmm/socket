import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import Page from '@somo/pda-pages-404/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: '404',
  description: '404 error',
  siteLanguage: 'en',
  noindex: true,
};

const ErrorPage: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <Page />
    </SiteMetadataContext.Provider>
  );
};

export default ErrorPage;
