import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import LoginPage from '@somo/pda-pages-login/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Login',
  description: 'Login to use our community',
  siteLanguage: 'en',
};

const Login: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <LoginPage />
    </SiteMetadataContext.Provider>
  );
};

export default Login;
