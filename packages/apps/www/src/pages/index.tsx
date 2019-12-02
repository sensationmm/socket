import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'home',
  description: 'homepage description',
  siteLanguage: 'en_GB',
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

  return (
    <>
      <SEO {...SEOProps} />
      <HomePage imagery={imagery} />
    </>
  );
};

export default Home;
