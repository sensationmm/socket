import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import AboutPage from '@somo/pda-pages-about/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'About us',
  description: 'About Socket Energy',
  siteLanguage: 'en',
};

const About: React.FC = () => {
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
    <>
      <SEO {...SEOProps} />
      <AboutPage imagery={imagery} />
    </>
  );
};

export default About;
