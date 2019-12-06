import * as React from 'react';

import Page from '@somo/pda-pages-registration-success/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Registration successful',
  description: 'Registration successful',
  siteLanguage: 'en',
  noindex: true,
};

const RegistrationSuccessPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <Page />
    </>
  );
};

export default RegistrationSuccessPage;
