import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { navigate } from 'gatsby-link';
import gql from 'graphql-tag';
import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import PageSection from '@somo/pda-components-page-section/src';
import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { isProduction } from '@somo/pda-utils-environment/src';
import { IPropsFromDispatch, IPropsFromReduxState } from './login.container';

import './login.component.ciam.css';

export interface ILoginPageProps extends IPropsFromDispatch, IPropsFromReduxState {}

type LoginWindow = typeof window & {
  onLogin: (identity: any) => void;
  onLogout: () => void;
  SFIDWidget: {
    logout: () => void;
    init: () => void;
  };
};

interface IQueryVars {
  identity: {};
}

const VALIDATE_IDENTITY = gql`
  query validateIdentity($identity: IdentityValidation!) {
    validateIdentity(identity: $identity) {
      socketAuthentication
      sogSignature
      username
    }
  }
`;

const LoginPage: React.FC<ILoginPageProps> = ({ actions, isAuthenticated = false }) => {
  if (isAuthenticated) {
    navigate('/');
  }
  const siteMetadata = useContext(SiteMetadataContext);
  const [t] = useTranslation();
  const client = useApolloClient();
  const { ciamCommunityUrl } = useContext(SiteMetadataContext);

  const params = new URLSearchParams((typeof window !== 'undefined' && window.location.search) || '');
  const id = params.get('id');
  const token = params.get('token');

  const authReady = id !== null && token !== null;

  const { validateIdentitySuccess, logout } = actions;

  const clearCacheAndLogout = () =>
    client.clearStore().then(() => {
      logout(ciamCommunityUrl);

      setTimeout(() => {
        (window as LoginWindow).SFIDWidget.logout();
      }, 1000);
    });

  if (authReady && !isAuthenticated) {
    const { error, data } = useQuery<EON.IValidateIdentityResponse, IQueryVars>(VALIDATE_IDENTITY, {
      variables: { identity: { id, token } },
    });

    if (error) {
      clearCacheAndLogout();
    }

    if (data) {
      const { validateIdentity } = data;
      validateIdentitySuccess({ socketAuthentication: validateIdentity.socketAuthentication });

      if (typeof window !== 'undefined') {
        const url = isProduction(siteMetadata.siteUrl || '')
          ? `https://sog-socket:fBAnLuH89v3VUkWy@socket.test.standingongiants.com/sog_api.php?do=login&email=${validateIdentity.username}&signature=${validateIdentity.sogSignature}`
          : `${siteMetadata.sogUrl}/sog_api.php?do=login&email=${validateIdentity.username}&signature=${validateIdentity.sogSignature}`;
        window.location.href = url;
      }
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as LoginWindow).onLogin = (ciamIdentity) => {
        if (!authReady) {
          window.location.search = `token=${ciamIdentity.access_token}&id=${ciamIdentity.id}`;
        }
      };

      (window as LoginWindow).onLogout = () => {
        (window as LoginWindow).SFIDWidget.init();
        navigate('/login');
      };
    }
  }, []);

  return (
    <>
      <Helmet title={'Login'}>
        <meta name="salesforce-community" content={siteMetadata.ciamCommunityUrl} />
        <meta name="salesforce-client-id" content={siteMetadata.ciamClientId} />
        <meta name="salesforce-redirect-uri" content={`${siteMetadata.siteUrl}/login-callback.html`} />
        <meta name="salesforce-mode" content="inline" />
        <meta name="salesforce-target" content="#sign-in-link" />
        <meta name="salesforce-login-handler" content="onLogin" />
        <meta name="salesforce-logout-handler" content="onLogout" />
        <meta name="salesforce-forgot-password-enabled" content="true" />
        <meta name="salesforce-self-register-enabled" content="true" />
        <script src={`${siteMetadata.ciamCommunityUrl}/servlet/servlet.loginwidgetcontroller?type=javascript_widget`} />
      </Helmet>
      <RegularLayout hero={t('site.login.hero', { returnObjects: true })}>
        <PageSection>
          <div id="sign-in-link" />
        </PageSection>
      </RegularLayout>
    </>
  );
};

export default LoginPage;
