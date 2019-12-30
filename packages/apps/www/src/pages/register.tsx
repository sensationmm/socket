import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import RegisterPage from '@somo/pda-pages-register/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Register',
  description: 'User registration',
  siteLanguage: 'en',
  noindex: true,
};

const Register: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <RegisterPage />
    </SiteMetadataContext.Provider>
  );
};

export default Register;
