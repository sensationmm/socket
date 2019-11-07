import * as React from 'react';

import LoginPage from '@somo/pda-pages-login/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'Login',
  description: 'homepage description',
  siteLanguage: 'en_GB',
};

const Login: React.FC = () => {
  return (
    <>
      <SEO {...SEOprops} />
      <LoginPage />
    </>
  );
};

export default Login;
