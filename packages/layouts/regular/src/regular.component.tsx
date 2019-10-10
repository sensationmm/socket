import { navigate } from 'gatsby';
import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation, HeaderNavigation } from './navigation';

interface IHeroI18nProps {
  title: string;
  subTitle?: string;
  cta?: string;
}

interface IFooterI18nProps {
  title: string;
  subTitle: string;
  copyright: string;
}

interface IRegularLayoutProps {
  hero: IHeroI18nProps;
  footer: IFooterI18nProps;
}

const RegularLayout: React.FC<IRegularLayoutProps> = ({ hero, footer, children }) => {
  return (
    <AppTemplate>
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <NavBar menu={HeaderNavigation} />

        <PageHero
          i18n={{
            heading: hero.title,
            text: hero.subTitle,
            cta: hero.cta,
          }}
          onClick={() => navigate('/page')}
        />
      </PageSection>
      {children}
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Footer i18n={footer} menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default RegularLayout;
