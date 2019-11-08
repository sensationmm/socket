import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AccountSection from '@somo/pda-components-account-section/src';
import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '@somo/pda-components-avatar/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import Field, { BorderStyles } from './field.component';

import * as styles from '../account.module.css';

export interface IPersonalDetailsProps {
  userId: string;
  token: string;
  tokenType: string;
}

export const GET_USER_QUERY = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
      accountNumber
      correspondenceAddress
      supplyAddress
    }
  }
`;

interface IUserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    accountNumber: string;
    correspondenceAddress: string;
    supplyAddress: string;
  };
}

interface IQueryVars {
  id: string;
}

const PersonalDetails: React.FC<IPersonalDetailsProps> = ({ userId, token, tokenType }) => {
  const { loading, error, data } = useQuery<IUserResponse, IQueryVars>(GET_USER_QUERY, {
    variables: { id: userId },
    context: {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  });

  const [t] = useTranslation();

  return (
    <AccountSection
      className={styles.personalDetails}
      title={t('site.account.personal.title')}
      subtitle={t('site.account.personal.subtitle')}
      hasGap={true}
    >
      {loading && (
        <div className={styles.messageContainer}>
          <Text element="p" type={TextStyles.body} color={ColorStyles.primary}>
            Loading...
          </Text>
        </div>
      )}
      {error && (
        <div className={styles.messageContainer}>
          <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
            Something happened on our end. Please try again later.
          </Text>
        </div>
      )}
      {data && (
        <>
          <div className={styles.personalDetailsFirstRow}>
            <FlexRow layout={[35, 65]}>
              <div className={styles.avatarWrapper}>
                <Avatar
                  size={AvatarSizes.Large}
                  style={AvatarStyles.Secondary}
                  svgType={SvgTypes.Logo}
                  isResponsive={true}
                />
              </div>
              <div>
                <FlexRowGrid
                  component={Field}
                  content={[
                    {
                      label: t('site.account.personal.nameLabel'),
                      value: data.user.name,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: t('site.account.personal.accountNumberLabel'),
                      value: data.user.accountNumber,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: t('site.account.personal.supplyAddressLabel'),
                      value: data.user.supplyAddress,
                      borderStyle: BorderStyles.dark,
                    },
                  ]}
                  cols={1}
                />
              </div>
            </FlexRow>
          </div>
          <div className={styles.personalDetailsSecondRow}>
            <FlexRowGrid
              component={Field}
              content={[
                { label: t('site.account.personal.emailLabel'), value: data.user.email },
                { label: t('site.account.personal.phoneLabel'), value: data.user.phone },
                { label: t('site.account.personal.passwordLabel'), value: '*******' },
                {
                  label: t('site.account.personal.correspondenceAddressLabel'),
                  value: data.user.correspondenceAddress,
                },
              ]}
              cols={2}
            />
          </div>
        </>
      )}
    </AccountSection>
  );
};

export default PersonalDetails;
