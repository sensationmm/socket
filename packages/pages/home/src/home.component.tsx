import { navigate } from 'gatsby';
import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import { Secondary } from '@somo/pda-components-button/src';
import FlexRow from '@somo/pda-components-flex-row/src';
// import Footer from '@somo/pda-components-footer/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import Ring from '@somo/pda-components-ring/src';

// @ts-ignore
import * as styles from './home.module.css';

interface IHomepageProps {
  i18n: EON.IWebAppTranslations['homepage'];
}

const ContentCard = ({ icon, header, body }) => {
  return (
    <div>
      <Ring>{icon}</Ring>
      <Text element="h3" type={TextStyles.h3}>
        {header}
      </Text>
      <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
        {body}
      </Text>
    </div>
  );
};

const Homepage: React.FC<IHomepageProps> = ({ i18n }) => {
  const { hero, mainFeatures, understandEnergy, companyFeatures, goodBunch } = i18n;

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
      <PageSection style={PageSectionStyle.Primary}>
        <FlexRow className={styles.narrowSection}>
          <div>
            <Text element="h2" type={TextStyles.h2} color={ColorStyles.secondary}>
              {understandEnergy.title}
            </Text>
            <ul>
              <li>Set goals for how much you spend</li>
              <li>Regular tips from our boffins to help you save</li>
              <li>Easily check and compare your history</li>
              <li>See forecasts based on what you use</li>
            </ul>
            <Secondary>{understandEnergy.cta}</Secondary>
          </div>
          <div></div>
        </FlexRow>
      </PageSection>
      <PageSection>
        <FlexRow>
          <div>
            <Text element="h2" type={TextStyles.h2}>
              {companyFeatures.thingsWeDontDo.header}
            </Text>
            {companyFeatures.thingsWeDontDo.content.map((feature, count) => {
              return (
                <ContentCard key={`dontDo-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
              );
            })}
          </div>

          <div>
            <Text element="h2" type={TextStyles.h2}>
              {companyFeatures.thingsWeDoDo.header}
            </Text>
            {companyFeatures.thingsWeDoDo.content.map((feature, count) => {
              return (
                <ContentCard key={`doDo-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
              );
            })}
          </div>
        </FlexRow>
      </PageSection>
      <PageSection style={PageSectionStyle.Secondary}>
        <FlexRow className={styles.narrowSection}>
          <div>
            <Text element="h2" type={TextStyles.h2}>
              {goodBunch.title}
            </Text>
            <ul>
              <li>Set goals for how much you spend</li>
              <li>Regular tips from our boffins to help you save</li>
              <li>Easily check and compare your history</li>
              <li>See forecasts based on what you use</li>
            </ul>
            <Text element="p" type={TextStyles.segmentCopy} color={ColorStyles.tertiary}>
              {goodBunch.body}
            </Text>
            <Secondary>{goodBunch.cta}</Secondary>
          </div>
          <div></div>
        </FlexRow>
      </PageSection>
      <PageSection style={PageSectionStyle.PrimaryPattern}>Footer</PageSection>
    </AppTemplate>
  );
};

export default Homepage;
