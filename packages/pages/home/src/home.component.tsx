import { navigate } from 'gatsby';
import * as React from 'react';

// import PageSection from '@somo/pda';
import AppTemplate from '@somo/pda-components-app-template/src';
import FlexRow from '@somo/pda-components-flex-row/src';
// import Footer from '@somo/pda-components-footer/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';

// @ts-ignore
import * as styles from './home.module.css';

interface IHomepageProps {
  i18n: EON.IWebAppTranslations['homepage'];
}

const Homepage: React.FC<IHomepageProps> = ({ i18n }) => {
  // const { hero, mainFeatures, understandEnergy, companyFeatures, goodBunch, footer } = i18n;
  const { hero } = i18n;

  return (
    <AppTemplate>
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <PageHero
          i18n={{
            heading: hero.title,
            text: hero.subTitle,
            cta: hero.cta.text,
          }}
          onClick={() => navigate('/page')}
        />
      </PageSection>

      <PageSection>CompanyFeatures</PageSection>

      <PageSection style={PageSectionStyle.Primary}>Youre on track</PageSection>

      <PageSection style={PageSectionStyle.Secondary}>Switching is quick and painless</PageSection>

      <PageSection>
        <FlexRow>
          <div>Things we dont do</div>
          <div>Things we do do</div>
        </FlexRow>
      </PageSection>

      <PageSection style={PageSectionStyle.Secondary}>A really good bunch</PageSection>

      <PageSection style={PageSectionStyle.PrimaryPattern}>Footer</PageSection>
    </AppTemplate>
  );
};

export default Homepage;
