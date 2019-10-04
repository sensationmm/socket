import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'home',
  description: 'homepage description',
  siteLanguage: 'en_GB',
};

const Home: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query HomeQuery {
      allTranslations {
        edges {
          node {
            homepage {
              hero {
                title
                subTitle
                cta {
                  text
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const i18n = data.allTranslations.edges[0].node.homepage;

  return (
    <>
      <SEO {...SEOprops} />
      <HomePage i18n={i18n} />
    </>
  );
};

export default Home;