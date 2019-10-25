import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import LoginPage from '@somo/pda-pages-login/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'Login',
  description: 'homepage description',
  siteLanguage: 'en_GB',
};

const Login: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query LoginQuery {
      allTranslations {
        edges {
          node {
            site {
              footer {
                title
                subTitle
                copyright
              }
              login {
                hero {
                  title
                }
                form {
                  username
                  password
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
      <LoginPage i18n={i18n} />
    </>
  );
};

export default Login;
