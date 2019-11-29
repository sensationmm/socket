import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import ActionPaneBtn, { IconTypes } from '@somo/pda-components-action-pane-button/src';
import GutterLayout from '@somo/pda-components-gutter-layout/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import UserSwitch from '@somo/pda-components-user-switch/src';
import useEditTray from '@somo/pda-hooks-edit/src';
import AccountLayout from '@somo/pda-layouts-account/src';
import { withAuthentication } from '@somo/pda-pages-login/src';
import ContactPreferences from './components/contact-preferences/contact-preferences.component';
import EditForm from './components/forms';
import Goal from './components/goal/goal.component';
import NoDirectDebit from './components/no-direct-debit/no-direct-debit.component';
import PaymentDetails from './components/payment-details/payment-details.component';
import PersonalDetails from './components/personal-details/personal-details.component';
import ProductDetails from './components/product-details/product-details.component';
import QuerySection from './components/query-section/query-section.component';

import * as styles from './account.module.css';

export interface IAccountPageProps {
  userId: string;
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
      contactPreferences {
        contactId
        email
        sms
        post
        phone
        carrierpigeon
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

export const AccountPage: React.FC<IAccountPageProps> = ({ userId }) => {
  const [t] = useTranslation();
  const [editContactPrefs, setEditContactPrefs] = React.useState<boolean>(false);
  const { clearEditForm, handleEditTray, editForm } = useEditTray();
  const { formType, formValues } = editForm;

  const { loading, error, data } = useQuery<EON.IUserResponse, IQueryVars>(GET_USER_QUERY, {
    variables: { id: userId },
  });

  const { personalDetails, paymentDetails, productDetails, contactPreferences } = (data || {}).user || {};

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
            onEdit={handleEditTray}
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
          <QuerySection
            title={t('site.account.contactPreferences.title')}
            loading={loading}
            error={!!error}
            Component={ContactPreferences}
            values={contactPreferences}
            editMode={editContactPrefs}
            onCancelEdit={() => setEditContactPrefs(false)}
            actionPane={
              <ActionPaneBtn
                icon={IconTypes.edit}
                text={t('actions.edit')}
                onClick={() => !editContactPrefs && setEditContactPrefs(!editContactPrefs)}
              />
            }
          />
          <Goal />
        </GutterLayout>
      </PageSection>
      {formType && <EditForm formType={formType} formValues={formValues} onClose={clearEditForm} />}
    </AccountLayout>
  );
};

export default withAuthentication(AccountPage);
