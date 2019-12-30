import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import HomePage from '@somo/pda-pages-home/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Welcome',
  description: 'Welcome to Socket energy.',
  siteLanguage: 'en',
};

const Home: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query HomeQuery {
      allFile(filter: { relativeDirectory: { eq: "homepage" } }) {
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
      <HomePage imagery={imagery} />
    </SiteMetadataContext.Provider>
  );
};

export default Home;
