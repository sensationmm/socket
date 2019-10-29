import { navigate } from 'gatsby';
import * as React from 'react';

import { Primary } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IPropsFromDispatch, IPropsFromReduxState } from './login.container';

// import * as styles from './login.module.css';

export interface ILoginPageProps extends IPropsFromDispatch, IPropsFromReduxState {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'login'>;
}

const LoginPage: React.FC<ILoginPageProps> = ({ i18n, handleLogin, isAuthenticated }) => {
  if (isAuthenticated) {
    navigate('/account');
  }

  const { login, footer } = i18n;
  const { hero } = login;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>
        <Primary onClick={handleLogin}>Login</Primary>
      </PageSection>
    </RegularLayout>
  );
};

export default LoginPage;
