import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';

import AccountSection from '@somo/pda-components-account-section/src';
import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '@somo/pda-components-avatar/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import Field, { BorderStyles } from './field.component';

import * as styles from './account.module.css';

export interface IPersonalDetailsProps {
  i18n: EON.IAccountPersonal;
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

const PersonalDetails: React.FC<IPersonalDetailsProps> = ({ i18n, userId, token, tokenType }) => {
  const { loading, error, data } = useQuery<IUserResponse, IQueryVars>(GET_USER_QUERY, {
    variables: { id: userId },
    context: {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  });

  return (
    <AccountSection className={styles.personalDetails} title={i18n.title} subtitle={i18n.subtitle} hasGap={true}>
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
                      label: i18n.nameLabel,
                      value: data.user.name,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: i18n.accountNumberLabel,
                      value: data.user.accountNumber,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: i18n.supplyAddressLabel,
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
                { label: i18n.emailLabel, value: data.user.email },
                { label: i18n.phoneLabel, value: data.user.phone },
                { label: i18n.passwordLabel, value: '*******' },
                { label: i18n.correspondenceAddressLabel, value: data.user.correspondenceAddress },
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
