import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import SmartTariffPage from '@somo/pda-pages-smart-tariff/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Smart tariff',
  description: 'Our tariff is smart',
  siteLanguage: 'en',
};

const SmartTariff: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query SmartTariffQuery {
      allFile(filter: { relativeDirectory: { eq: "smart-tariff" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const imagery = data.allFile.edges;
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <SmartTariffPage imagery={imagery} />
    </SiteMetadataContext.Provider>
  );
};

export default SmartTariff;
