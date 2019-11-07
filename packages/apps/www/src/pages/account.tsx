import * as React from 'react';

import AccountPage from '@somo/pda-pages-account/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'my account',
  description: 'account page description',
  siteLanguage: 'en_GB',
};

const Account: React.FC = () => {
  return (
    <>
      <SEO {...SEOprops} />
      <AccountPage />
    </>
  );
};

export default Account;
