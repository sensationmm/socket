import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import AboutPage from '@somo/pda-pages-about/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'About us',
  description: 'About Socket Energy',
  siteLanguage: 'en',
};

const About: React.FC = () => {
  const siteMetadata = useSiteMetadata();
  const data: any = useStaticQuery(graphql`
    query AboutQuery {
      allFile(filter: { relativeDirectory: { eq: "about" } }) {
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
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <AboutPage imagery={imagery} />
    </SiteMetadataContext.Provider>
  );
};

export default About;
