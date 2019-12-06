import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import MovingInPage from '@somo/pda-pages-moving-in/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'Moving in',
  description: 'Moving in',
  siteLanguage: 'en_GB',
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

  return (
    <>
      <SEO {...SEOProps} />
      <MovingInPage imagery={imagery} />
    </>
  );
};

export default MovingIn;
