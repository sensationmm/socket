import * as React from 'react';

import LoginPage from '@somo/pda-pages-login/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Login',
  description: 'Login to use our community',
  siteLanguage: 'en_GB',
};

const Login: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <LoginPage />
    </>
  );
};

export default Login;
