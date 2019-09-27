import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

import SEO from '../components/seo.component';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <HomePage />
    </>
  );
};

export default Home;
