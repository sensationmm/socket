import { navigate } from 'gatsby';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Primary } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IPropsFromDispatch, IPropsFromReduxState } from './login.container';

export interface ILoginPageProps extends IPropsFromDispatch, IPropsFromReduxState {}

const LoginPage: React.FC<ILoginPageProps> = ({ handleLogin, isAuthenticated = false }) => {
  if (isAuthenticated) {
    navigate('/account');
  }

  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.login.hero', { returnObjects: true })}>
      <PageSection>
        <Primary onClick={handleLogin}>Login</Primary>
      </PageSection>
    </RegularLayout>
  );
};

export default LoginPage;
