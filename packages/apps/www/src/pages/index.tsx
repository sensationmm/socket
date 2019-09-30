import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'home',
  description: 'homepage description',
  siteLanguage: 'en_GB',
};

const Home: React.FC = () => {
  return (
    <>
      <SEO {...SEOprops} />
      <HomePage />
    </>
  );
};

export default Home;
