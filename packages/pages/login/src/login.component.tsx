import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Primary } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import UserSwitch from '@somo/pda-components-user-switch/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IPropsFromDispatch, IPropsFromReduxState } from './login.container';

export interface ILoginPageProps extends IPropsFromDispatch, IPropsFromReduxState {}

const LoginPage: React.FC<ILoginPageProps> = ({ handleLogin, isAuthenticated = false }) => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.login.hero', { returnObjects: true })}>
      <PageSection>
        <Primary onClick={handleLogin}>Login</Primary>
        {isAuthenticated && <UserSwitch />}
      </PageSection>
    </RegularLayout>
  );
};

export default LoginPage;
