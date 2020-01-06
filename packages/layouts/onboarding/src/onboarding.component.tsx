import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

import * as styles from './onboarding.module.css';

const OnboardingLayout: React.FC = ({ children }) => {
  const [t] = useTranslation();

  return (
    <AppTemplate>
      <PageSection element="header" style={PageSectionStyle.PrimaryPattern}>
        <NavBar />
      </PageSection>

      <div className={styles.header} data-test="onboarding-header">
        <div className={styles.inner}>
          <Text type={TextStyles.h2} element="h1" color={ColorStyles.secondary} className={styles.title}>
            {t('site.onboarding.journey.title', { name: 'Kevin' })}
          </Text>

          <Text type={TextStyles.body} element="h2" color={ColorStyles.secondary}>
            {t('site.onboarding.journey.subTitle')}
          </Text>
        </div>
      </div>

      <main className={styles.main}>{children}</main>
      <Footer menu={FooterNavigation} />
    </AppTemplate>
  );
};

export default OnboardingLayout;
