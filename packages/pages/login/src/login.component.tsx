import * as React from 'react';

import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

// import * as styles from './login.module.css';

interface IHomePageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'login'>;
}

const HomePage: React.FC<IHomePageProps> = ({ i18n }) => {
  const { login, footer } = i18n;
  const { hero } = login;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>Login</PageSection>
    </RegularLayout>
  );
};

export default HomePage;
