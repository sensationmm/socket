import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import UserSwitch from '@somo/pda-components-user-switch/src';
import AccountLayout from '@somo/pda-layouts-account/src';
import PersonalDetails from './personal-details.container';

const AccountPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <AccountLayout>
      <PageSection>
        <UserSwitch />
        <Text element="h1" type={TextStyles.h1}>
          {t('site.account.title')}
        </Text>
        <PersonalDetails />
      </PageSection>
    </AccountLayout>
  );
};

export default AccountPage;
