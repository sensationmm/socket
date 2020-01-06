import { useApolloClient } from '@apollo/react-hooks';
import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { ButtonTypes, Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IPropsFromReduxActions, withSession } from '@somo/pda-pages-login/src';

export interface ILogoutPageProps extends IPropsFromReduxActions {}

export const LogoutPage: React.FC<ILogoutPageProps> = ({ actions }) => {
  const [t] = useTranslation();
  const client = useApolloClient();
  const { ciamCommunityUrl } = useContext(SiteMetadataContext);

  React.useEffect(() => {
    client.clearStore().then(() => {
      actions.logout(ciamCommunityUrl);
    });
  }, []);

  return (
    <SiteMetadataContext.Consumer>
      {(siteMetadata) => (
        <>
          <Helmet title={'Login'}>
            <meta name="salesforce-community" content={siteMetadata.ciamCommunityUrl} />
            <meta name="salesforce-client-id" content={siteMetadata.ciamClientId} />
            <meta name="salesforce-redirect-uri" content={`${siteMetadata.siteUrl}/login-callback.html`} />
            <meta name="salesforce-mode" content="inline" />
            <meta name="salesforce-target" content="#sign-in-link" />
            <meta name="salesforce-login-handler" content="onLogin" />
            <meta name="salesforce-logout-handler" content="onLogout" />
            <script>
              {`
                window.onLogin = function() {
                  SFIDWidget.logout();
                }
                window.onLogout = function() {}
              `}
            </script>
            <script
              src={`${siteMetadata.ciamCommunityUrl}/servlet/servlet.loginwidgetcontroller?type=javascript_widget`}
              async={true}
              defer={true}
            />
          </Helmet>
          <RegularLayout hero={t('site.logout.hero', { returnObjects: true })}>
            <PageSection>
              <div id="sign-in-link" style={{ display: 'none' }} />
              <SecondaryBtn
                type={ButtonTypes.internalLink}
                onClick={() => {
                  if (typeof window !== undefined) {
                    window.location.href = '/login';
                  }
                }}
              >
                {t('site.logout.cta')}
              </SecondaryBtn>
            </PageSection>
          </RegularLayout>
        </>
      )}
    </SiteMetadataContext.Consumer>
  );
};

export default withSession(LogoutPage);
