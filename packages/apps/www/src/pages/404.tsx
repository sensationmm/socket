import * as React from 'react';

import Page from '@somo/pda-pages-404/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: '404',
  description: '404 error',
  siteLanguage: 'en',
  noindex: true,
};

const ErrorPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <Page />
    </>
  );
};

export default ErrorPage;
