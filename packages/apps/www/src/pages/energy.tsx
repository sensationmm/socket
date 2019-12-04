import * as React from 'react';

import EnergyPage from '@somo/pda-pages-energy/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'energy',
  description: 'energy page description',
  siteLanguage: 'en_GB',
};

const Energy: React.FC = () => {
  return (
    <>
      <SEO {...SEOProps} />
      <EnergyPage />
    </>
  );
};

export default Energy;
