import * as React from 'react';

import Page from '@somo/pda-pages-coming-soon/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Coming soon',
  description: 'Coming soon',
  siteLanguage: 'en',
  noindex: true,
};

const ComingSoonPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <Page />
    </>
  );
};

export default ComingSoonPage;
