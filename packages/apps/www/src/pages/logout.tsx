import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import LogoutPage from '@somo/pda-pages-logout/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Logout',
  description: 'Logout',
  siteLanguage: 'en',
  noindex: true,
};

const Logout: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <LogoutPage />
    </SiteMetadataContext.Provider>
  );
};

export default Logout;
