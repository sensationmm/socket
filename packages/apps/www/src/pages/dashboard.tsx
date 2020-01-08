import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import PreSupply from '@somo/pda-pages-pre-supply/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Your Socket Dashboard',
  description: 'Dashboard for your account',
  siteLanguage: 'en',
};

const Dashboard: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <PreSupply />
    </SiteMetadataContext.Provider>
  );
};

export default Dashboard;
