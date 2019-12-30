import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import ComingSoonPage from '@somo/pda-pages-coming-soon/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Coming soon',
  description: 'Coming soon',
  siteLanguage: 'en',
  noindex: true,
};

const ComingSoon: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <ComingSoonPage />
    </SiteMetadataContext.Provider>
  );
};

export default ComingSoon;
