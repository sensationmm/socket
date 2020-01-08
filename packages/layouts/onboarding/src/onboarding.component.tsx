import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

import * as styles from './onboarding.module.css';

interface IOnboardingProps {
  hero: {
    title: string;
    subtitle: string;
  };
}

const OnboardingLayout: React.FC<IOnboardingProps> = ({ hero: { title, subtitle }, children }) => {
  return (
    <AppTemplate>
      <PageSection element="header" style={PageSectionStyle.PrimaryPattern}>
        <NavBar />
      </PageSection>

      <div className={styles.header} data-test="onboarding-header">
        <div className={styles.inner}>
          <Text type={TextStyles.h2} element="h1" color={ColorStyles.secondary} className={styles.title}>
            {title}
          </Text>

          <Text type={TextStyles.body} element="h2" color={ColorStyles.secondary}>
            {subtitle}
          </Text>
        </div>
      </div>

      <main className={styles.main}>{children}</main>
      <Footer menu={FooterNavigation} />
    </AppTemplate>
  );
};

export default OnboardingLayout;
