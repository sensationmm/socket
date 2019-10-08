import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Page from '@somo/pda-pages-404/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: '404',
  description: '404 error',
  siteLanguage: 'en_GB',
  noindex: true,
};

const ErrorPage: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query fourOhFourQuery {
      allTranslations {
        edges {
          node {
            fourOhFour {
              hero {
                title
              }
              body
            }
          }
        }
      }
    }
  `);
  const i18n = data.allTranslations.edges[0].node.fourOhFour;

  return (
    <>
      <SEO {...SEOprops} />
      <Page i18n={i18n} />
    </>
  );
};

export default ErrorPage;
