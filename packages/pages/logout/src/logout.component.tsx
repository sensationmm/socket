import { useApolloClient } from '@apollo/react-hooks';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonTypes, Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IPropsFromReduxActions, withSession } from '@somo/pda-pages-login/src';

export const LogoutPage: React.FC<IPropsFromReduxActions> = ({ actions }) => {
  const [t] = useTranslation();
  const client = useApolloClient();

  React.useEffect(() => {
    client.clearStore().then(() => {
      actions.logout();
    });
  }, []);

  return (
    <RegularLayout hero={t('site.logout.hero', { returnObjects: true })}>
      <PageSection>
        <SecondaryBtn type={ButtonTypes.internalLink} link="/">
          {t('site.logout.cta')}
        </SecondaryBtn>
      </PageSection>
    </RegularLayout>
  );
};

export default withSession(LogoutPage);
