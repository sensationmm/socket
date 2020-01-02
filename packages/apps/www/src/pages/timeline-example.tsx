import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import TimelineExample from '@somo/pda-pages-timeline/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Form example',
  description: 'Example form implementation',
  siteLanguage: 'en',
};

const Timeline: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <TimelineExample />
    </SiteMetadataContext.Provider>
  );
};

export default Timeline;
