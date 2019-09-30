import * as React from 'react';

import Page from '@somo/pda-pages-404/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: '404',
  description: '404 error',
  siteLanguage: 'en_GB',
  noindex: true,
};

const ErrorPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOprops} />
      <Page />
    </>
  );
};

export default ErrorPage;
