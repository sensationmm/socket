import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import EnergyPage from '@somo/pda-pages-energy/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'energy',
  description: 'energy page description',
  siteLanguage: 'en_GB',
};

const Energy: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query EnergyQuery {
      allFile(filter: { relativeDirectory: { eq: "energy" } }) {
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
      <EnergyPage imagery={imagery} />
    </>
  );
};

export default Energy;
