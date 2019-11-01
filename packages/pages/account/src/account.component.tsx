import * as React from 'react';

import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import AccountLayout from '@somo/pda-layouts-account/src';
import PersonalDetails from './personal-details.container';

export interface IAccountPageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'account'>;
}

const AccountPage: React.FC<IAccountPageProps> = ({ i18n }) => {
  const { account, footer } = i18n;

  return (
    <AccountLayout footer={footer}>
      <PageSection>
        <Text element="h1" type={TextStyles.h1}>
          {account.title}
        </Text>
        <PersonalDetails i18n={i18n.account.personal} />
      </PageSection>
    </AccountLayout>
  );
};

export default AccountPage;
