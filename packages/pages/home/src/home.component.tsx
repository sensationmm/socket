import { navigate } from 'gatsby';
import * as React from 'react';

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

const ContentCard = ({ icon, header, body }) => {
  return (
    <div>
      <p>{icon}</p>
      <h2>{header}</h2>
      <p>{body}</p>
    </div>
  );
};

const Homepage: React.FC<IHomepageProps> = ({ i18n }) => {
  const { hero, mainFeatures, companyFeatures } = i18n;

  return (
    <AppTemplate>
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <PageHero
          i18n={{
            heading: hero.title,
            text: hero.subTitle,
            cta: hero.cta,
          }}
          onClick={() => navigate('/page')}
        />
      </PageSection>

      <PageSection>
        <FlexRow>
          {mainFeatures.content.map((feature, count) => {
            return (
              <ContentCard key={`feature-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
            );
          })}
        </FlexRow>
      </PageSection>

      <PageSection>
        <FlexRow>
          <div>
            <h2>{companyFeatures.thingsWeDontDo.header}</h2>
            {companyFeatures.thingsWeDontDo.content.map((feature, count) => {
              return (
                <ContentCard key={`dontDo-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
              );
            })}
          </div>

          <div>
            <h2>{companyFeatures.thingsWeDoDo.header}</h2>
            {companyFeatures.thingsWeDoDo.content.map((feature, count) => {
              return (
                <ContentCard key={`doDo-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
              );
            })}
          </div>
        </FlexRow>
      </PageSection>

      <PageSection style={PageSectionStyle.PrimaryPattern}>Footer</PageSection>
    </AppTemplate>
  );
};

export default Homepage;
