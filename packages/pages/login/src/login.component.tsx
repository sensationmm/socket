import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { navigate } from 'gatsby-link';
import gql from 'graphql-tag';
import * as React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Primary } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import UserSwitch from '@somo/pda-components-user-switch/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { Env, getEnv } from '@somo/pda-utils-env/src';
import { IPropsFromDispatch, IPropsFromReduxState } from './login.container';

export interface ILoginPageProps extends IPropsFromDispatch, IPropsFromReduxState {}

type LoginWindow = typeof window & {
  onLogin: (identity: any) => void;
};

interface IQueryVars {
  identity: string | null;
}

const VALIDATE_IDENTITY = gql`
  query validateIdentity($identity: IdentityValidation!) {
    validateIdentity(identity: $identity) {
      username
      hash
      token
      juniferCustomerIds
    }
  }
`;

const LoginPage: React.FC<ILoginPageProps> = ({ actions, isAuthenticated = false }) => {
  const [t] = useTranslation();
  const client = useApolloClient();

  const { handleLogin, validateIdentitySuccess, logout } = actions;

  const validateLogin = (identity) => {
    const { error, data } = useQuery<EON.IValidateIdentityResponse, IQueryVars>(VALIDATE_IDENTITY, {
      variables: { identity },
    });

    if (error) {
      clearCacheAndLogout().then(() => navigate('/login'));

      return null;
    }

    if (data) {
      const { validateIdentity } = data;

      const identityStore = {
        username: validateIdentity.username,
        token: validateIdentity.token,
        juniferCustomerIds: validateIdentity.juniferCustomerIds,
      };

      validateIdentitySuccess(identityStore);

      const url = `https://socket.test.standingongiants.com/sog_api.php?do=login&email=${validateIdentity.username}&signature=${validateIdentity.hash}`;
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    }
  };

  const clearCacheAndLogout = () =>
    client.clearStore().then(() => {
      logout();
    });

  if (typeof window !== 'undefined') {
    (window as LoginWindow).onLogin = (identity) => {
      const validateIdentity = {
        id: identity.id,
        token: decodeURI(identity.access_token),
        juniferCustomerIds: identity.custom_attributes.CustomerID,
        username: identity.custom_attributes.Username,
      };

      validateLogin(validateIdentity);
    };
  }

  return (
    <>
      <Helmet title={'Login'}>
        <meta name="salesforce-community" content="https://sitciam-eciam.cs106.force.com/SocketEnergy" />
        <meta
          name="salesforce-client-id"
          content="3MVG9qQjGkWUbcrGuliW88sLR8gbSHLUZ38k5BcfKDJBZ5g.ZeYngM6bHwQEFd98rSPzjIjTNA.k47GrpMg1Z"
        />
        <meta name="salesforce-redirect-uri" content={`${getEnv(Env.SiteUrl)}/login-callback`} />
        <meta name="salesforce-mode" content="inline" />
        <meta name="salesforce-target" content="#sign-in-link" />
        <meta name="salesforce-login-handler" content="onLogin" />
        <meta name="salesforce-logout-handler" content="onLogout" />
        <meta name="salesforce-forgot-password-enabled" content="true" />
        <meta name="salesforce-self-register-enabled" content="true" />
        <link
          href="https://sitciam-eciam.cs106.force.com/SocketEnergy/servlet/servlet.loginwidgetcontroller?type=css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          src="https://sitciam-eciam.cs106.force.com/SocketEnergy/servlet/servlet.loginwidgetcontroller?type=javascript_widget"
          async={true}
          defer={true}
        />
      </Helmet>
      <RegularLayout hero={t('site.login.hero', { returnObjects: true })}>
        <PageSection>
          <div id="sign-in-link" />
          <Primary onClick={handleLogin}>Login</Primary>
          {isAuthenticated && <UserSwitch />}
        </PageSection>
      </RegularLayout>
    </>
  );
};

export default LoginPage;
