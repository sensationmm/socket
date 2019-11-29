import { navigate } from 'gatsby';
import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation, HeaderNavigation } from './navigation';

import * as styles from './regular.module.css';

interface IHeroI18nProps {
  title: string;
  subTitle?: string;
  cta?: string;
}

interface IRegularLayoutProps {
  hero: IHeroI18nProps;
}

const RegularLayout: React.FC<IRegularLayoutProps> = ({ hero, children }) => {
  return (
    <AppTemplate>
      <PageSection className={styles.navSection} style={PageSectionStyle.PrimaryPattern}>
        <NavBar menu={HeaderNavigation} />

        <PageHero heading={hero.title} text={hero.subTitle} cta={hero.cta} onClick={() => navigate('/page')} />
      </PageSection>
      <main>{children}</main>
      <Footer menu={FooterNavigation} />
    </AppTemplate>
  );
};

export default RegularLayout;
