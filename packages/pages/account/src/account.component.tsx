import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';

import GutterLayout from '@somo/pda-components-gutter-layout/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import UserSwitch from '@somo/pda-components-user-switch/src';
import AccountLayout from '@somo/pda-layouts-account/src';
import { withAuthentication } from '@somo/pda-pages-login/src';
import { useTranslation } from 'react-i18next';
import Goal from './components/goal/goal.component';
import NoDirectDebit from './components/no-direct-debit/no-direct-debit.component';
import PaymentDetails from './components/payment-details/payment-details.component';
import PersonalDetails from './components/personal-details/personal-details.component';
import ProductDetails from './components/product-details/product-details.component';
import QuerySection from './components/query-section/query-section.component';

import * as styles from './account.module.css';

export interface IAccountPageProps {
  userId: string;
  token: string;
  tokenType: string;
}

export const GET_USER_QUERY = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      personalDetails {
        name
        email
        phone
        accountNumber
        correspondenceAddress
        detailedCorrespondenceAddress {
          address1
          address2
          address4
          address5
          postcode
        }
        supplyAddress
      }
      paymentDetails {
        accountName
        accountNumber
        sortCode
        monthlyPaymentDate
      }
      productDetails {
        electricity {
          __typename
          ...productInfo
        }
        gas {
          __typename
          ...productInfo
        }
      }
    }
  }

  fragment productInfo on ProductInformation {
    __typename
    name
    endDate
    TIL {
      tariff {
        itemValue
        inclVAT
      }
      contractType {
        itemValue
        inclVAT
      }
      paymentMethod {
        itemValue
        inclVAT
      }
      unitRate {
        itemValue
        inclVAT
      }
      standingChargeDd {
        itemValue
        inclVAT
      }
      billingFrequency {
        itemValue
        inclVAT
      }
    }
  }
`;

interface IQueryVars {
  id: string;
}

export const AccountPage: React.FC<IAccountPageProps> = ({ userId, token, tokenType }) => {
  const [t] = useTranslation();

  const { loading, error, data } = useQuery<EON.IUserResponse, IQueryVars>(GET_USER_QUERY, {
    variables: { id: userId },
    context: {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  });

  const { personalDetails, paymentDetails, productDetails } = (data || {}).user || {};

  return (
    <AccountLayout>
      <PageSection>
        <UserSwitch />
        <Text element="h1" type={TextStyles.h1}>
          {t('site.account.title')}
        </Text>
        <GutterLayout>
          <QuerySection
            className={styles.personalDetailsSection}
            title={t('site.account.personal.title')}
            subtitle={t('site.account.personal.subtitle')}
            hasGap={true}
            loading={loading}
            error={!!error}
            Component={PersonalDetails}
            values={personalDetails}
          />
          <QuerySection
            title={t('site.account.product.title')}
            subtitle={t('site.account.product.subtitle')}
            loading={loading}
            error={!!error}
            Component={ProductDetails}
            values={productDetails}
          />
          <QuerySection
            title={t('site.account.payment.title')}
            subtitle={t('site.account.payment.subtitle')}
            loading={loading}
            error={!!error}
            Component={PaymentDetails}
            ErrorComponent={NoDirectDebit}
            values={paymentDetails}
          />
          <Goal />
        </GutterLayout>
      </PageSection>
    </AccountLayout>
  );
};

export default withAuthentication(AccountPage);
