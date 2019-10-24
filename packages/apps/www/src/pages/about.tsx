import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import AboutPage from '@somo/pda-pages-about/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'about',
  description: 'about page description',
  siteLanguage: 'en_GB',
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
      allTranslations {
        edges {
          node {
            site {
              footer {
                title
                subTitle
                copyright
              }
              about {
                hero {
                  title
                }
                energyMarket {
                  title
                  content
                }
                goodBunch {
                  title
                  content {
                    text
                    list
                  }
                  cta
                }
                realPeople {
                  title
                  content {
                    text
                    image
                  }
                  cta
                }
              }
            }
          }
        }
      }
    }
  `);
  const i18n = data.allTranslations.edges[0].node.site;
  const imagery = data.allFile.edges;

  return (
    <>
      <SEO {...SEOprops} />
      <AboutPage i18n={i18n} imagery={imagery} />
    </>
  );
};

export default About;
