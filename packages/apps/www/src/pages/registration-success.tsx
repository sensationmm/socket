import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import RegistrationSuccessPage from '@somo/pda-pages-registration-success/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Registration successful',
  description: 'Registration successful',
  siteLanguage: 'en',
  noindex: true,
};

const RegistrationSuccess: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <RegistrationSuccessPage />
    </SiteMetadataContext.Provider>
  );
};

export default RegistrationSuccess;
