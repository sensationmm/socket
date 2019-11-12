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
import * as styles from './account.module.css';
import Goal from './components/goal.component';
import NoDirectDebit from './components/no-direct-debit.component';
import PaymentDetails from './components/payment-details.component';
import PersonalDetails from './components/personal-details.component';
import QuerySection from './components/query-section.component';

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
        supplyAddress
      }
      paymentDetails {
        accountName
        accountNumber
        sortCode
        monthlyPaymentDate
      }
    }
  }
`;

interface IUserResponse {
  user: {
    id: string;
    personalDetails: {
      name: string;
      email: string;
      phone: string;
      accountNumber: string;
      correspondenceAddress: string;
      supplyAddress: string;
    };
    paymentDetails: {
      accountName: string;
      accountNumber: string;
      sortCode: string;
      monthlyPaymentDate: string;
    };
  };
}

interface IQueryVars {
  id: string;
}

export const AccountPage: React.FC<IAccountPageProps> = ({ userId, token, tokenType }) => {
  const [t] = useTranslation();

  const { loading, error, data } = useQuery<IUserResponse, IQueryVars>(GET_USER_QUERY, {
    variables: { id: userId },
    context: {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  });

  const { personalDetails, paymentDetails } = (data || {}).user || {};

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
