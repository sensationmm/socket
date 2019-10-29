import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import AccountPage from '@somo/pda-pages-account/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'my account',
  description: 'account page description',
  siteLanguage: 'en_GB',
};

const Account: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query AccountQuery {
      allTranslations {
        edges {
          node {
            site {
              footer {
                title
                subTitle
                copyright
              }
              account {
                title
                personal {
                  title
                  subtitle
                  nameLabel
                  accountNumberLabel
                  supplyAddressLabel
                  emailLabel
                  phoneLabel
                  passwordLabel
                  correspondenceAddressLabel
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
      <AccountPage i18n={i18n} />
    </>
  );
};

export default Account;
