import * as React from 'react';

import AccountPage from '@somo/pda-pages-account/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'My account',
  description: 'my account',
  siteLanguage: 'en_GB',
};

const Account: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <AccountPage />
    </>
  );
};

export default Account;
