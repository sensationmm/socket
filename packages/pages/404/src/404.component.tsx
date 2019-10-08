import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './404.module.css';

interface IFourOhFourProps {
  i18n: EON.IWebAppTranslations['fourOhFour'];
}

const navigation = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Community',
    link: '/community',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'Moving In',
    link: '/moving-in',
  },
  {
    label: 'Waiting List',
    link: '/waiting-list',
  },
];

const ErrorPage: React.FC<IFourOhFourProps> = ({ i18n }) => {
  const { hero, body } = i18n;

  return (
    <AppTemplate>
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <NavBar menu={navigation} />

        <PageHero
          i18n={{
            heading: hero.title,
          }}
        />
      </PageSection>

      <PageSection>
        <Text element="h2">{body}</Text>
      </PageSection>
    </AppTemplate>
  );
};

export default ErrorPage;
