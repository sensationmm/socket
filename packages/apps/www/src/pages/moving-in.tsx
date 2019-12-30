import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import MovingInPage from '@somo/pda-pages-moving-in/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Moving in',
  description: 'Moving in',
  siteLanguage: 'en',
};

const MovingIn: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query MovingInQuery {
      allFile(filter: { relativeDirectory: { eq: "moving-in" } }) {
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
      <MovingInPage imagery={imagery} />
    </SiteMetadataContext.Provider>
  );
};

export default MovingIn;
