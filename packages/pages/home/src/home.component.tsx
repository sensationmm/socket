import * as React from 'react';

// import { Secondary } from '@somo/pda-components-button/src';
import ContentCard from '@somo/pda-components-content-card/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

// @ts-ignore
import * as styles from './home.module.css';

interface IHomepageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'homepage'>;
}

const Homepage: React.FC<IHomepageProps> = ({ i18n }) => {
  const { homepage, footer } = i18n;
  const { hero, mainFeatures, companyFeatures } = homepage;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>
        <FlexRow>
          {mainFeatures.content.map((feature, count) => {
            return (
              <ContentCard key={`feature-${count}`} icon={feature.icon} header={feature.header} body={feature.body} />
            );
          })}
        </FlexRow>
      </PageSection>
      {/* <PageSection style={PageSectionStyle.Primary}>
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
      </PageSection> */}
      <PageSection>
        <FlexRow>
          <div>
            <Text element="h2" type={TextStyles.h2}>
              {companyFeatures.thingsWeDontDo.header}
            </Text>
            {companyFeatures.thingsWeDontDo.content.map((feature, count) => {
              return (
                <ContentCard
                  key={`dontDo-${count}`}
                  className={styles.featureContentCard}
                  icon={feature.icon}
                  header={feature.header}
                  body={feature.body}
                />
              );
            })}
          </div>

          <div>
            <Text element="h2" type={TextStyles.h2}>
              {companyFeatures.thingsWeDoDo.header}
            </Text>
            {companyFeatures.thingsWeDoDo.content.map((feature, count) => {
              return (
                <ContentCard
                  key={`doDo-${count}`}
                  className={styles.featureContentCard}
                  icon={feature.icon}
                  header={feature.header}
                  body={feature.body}
                />
              );
            })}
          </div>
        </FlexRow>
      </PageSection>
      {/* <PageSection style={PageSectionStyle.Secondary}>
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
      </PageSection> */}
    </RegularLayout>
  );
};

export default Homepage;
