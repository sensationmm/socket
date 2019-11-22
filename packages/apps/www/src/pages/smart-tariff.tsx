import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import SmartTariffPage from '@somo/pda-pages-smart-tariff/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'smart tariff',
  description: 'smart tariff page description',
  siteLanguage: 'en_GB',
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

  return (
    <>
      <SEO {...SEOprops} />
      <SmartTariffPage imagery={imagery} />
    </>
  );
};

export default SmartTariff;