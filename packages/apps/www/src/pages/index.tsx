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
            site {
              footer {
                title
                subTitle
                copyright
              }
              homepage {
                hero {
                  title
                  subTitle
                  cta
                }
                mainFeatures {
                  content {
                    icon
                    header
                    body
                  }
                }
                understandEnergy {
                  title
                  subTitle
                  cta
                  image
                }
                switchingSteps {
                  header
                  content {
                    step1 {
                      header
                      body
                    }
                    step2 {
                      header
                      body
                    }
                    step3 {
                      cta
                    }
                  }
                }
                companyFeatures {
                  thingsWeDontDo {
                    header
                    content {
                      icon
                      header
                      body
                    }
                  }
                  thingsWeDoDo {
                    header
                    content {
                      icon
                      header
                      body
                    }
                  }
                }
                goodBunch {
                  title
                  body
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

  return (
    <>
      <SEO {...SEOprops} />
      <HomePage i18n={i18n} />
    </>
  );
};

export default Home;
