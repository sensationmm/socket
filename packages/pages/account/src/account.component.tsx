import * as React from 'react';

import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '@somo/oxd-components-avatar/src';
import AccountSection from '@somo/pda-components-account-section/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import AccountLayout from '@somo/pda-layouts-account/src';
import Field, { BorderStyles } from './field.component';

import * as styles from './account.module.css';

interface IAccountPageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'account'>;
  values: {
    name: string;
    accountNumber: string;
    supplyAddress: string;
    email: string;
    phone: string;
    password: string;
    correspondenceAddress: string;
  };
}

const AccountPage: React.FC<IAccountPageProps> = ({ i18n, values }) => {
  const { account, footer } = i18n;

  return (
    <AccountLayout footer={footer}>
      <PageSection>
        <Text element="h1" type={TextStyles.h1}>
          {account.title}
        </Text>
        <AccountSection
          className={styles.personalDetails}
          title={account.personal.title}
          subtitle={account.personal.subtitle}
        >
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
                      label: account.personal.nameLabel,
                      value: values.name,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: account.personal.accountNumberLabel,
                      value: values.accountNumber,
                      disabled: true,
                      borderStyle: BorderStyles.dark,
                    },
                    {
                      label: account.personal.supplyAddressLabel,
                      value: values.supplyAddress,
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
                { label: account.personal.emailLabel, value: values.email },
                { label: account.personal.phoneLabel, value: values.phone },
                { label: account.personal.passwordLabel, value: values.password },
                { label: account.personal.correspondenceAddressLabel, value: values.correspondenceAddress },
              ]}
              cols={2}
            />
          </div>
        </AccountSection>
      </PageSection>
    </AccountLayout>
  );
};

export default AccountPage;
