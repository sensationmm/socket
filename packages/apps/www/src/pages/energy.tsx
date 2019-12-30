import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import EnergyPage from '@somo/pda-pages-energy/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Energy',
  description: 'All about our energy',
  siteLanguage: 'en',
};

const Energy: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <EnergyPage />
    </SiteMetadataContext.Provider>
  );
};

export default Energy;
