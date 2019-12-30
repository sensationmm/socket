import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import AccountPage from '@somo/pda-pages-account/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'My account',
  description: 'my account',
  siteLanguage: 'en',
};

const Account: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <AccountPage />
    </SiteMetadataContext.Provider>
  );
};

export default Account;
