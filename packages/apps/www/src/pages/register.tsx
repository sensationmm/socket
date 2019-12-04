import * as React from 'react';

import Page from '@somo/pda-pages-register/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Register',
  description: 'User registration',
  siteLanguage: 'en_GB',
  noindex: true,
};

const RegisterPage: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <Page />
    </>
  );
};

export default RegisterPage;
