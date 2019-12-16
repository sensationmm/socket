import * as React from 'react';

import Page from '@somo/pda-pages-logout/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Logout',
  description: 'Logout',
  siteLanguage: 'en',
  noindex: true,
};

const LogoutPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <Page />
    </>
  );
};

export default LogoutPage;
