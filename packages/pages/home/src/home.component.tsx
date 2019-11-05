import * as React from 'react';

import { Secondary } from '@somo/pda-components-button/src';
import { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import ContentCard from '@somo/pda-components-content-card/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import StepCard from '@somo/pda-components-step-card/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { getImagePath } from '@somo/pda-utils-imagery/src';

import * as styles from './home.module.css';

interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

interface IHomePageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'homepage'>;
  imagery: IImageProps[];
}

const HomePage: React.FC<IHomePageProps> = ({ i18n, imagery }) => {
  const { homepage, footer } = i18n;
  const { hero, mainFeatures, companyFeatures, switchingSteps, understandEnergy } = homepage;

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
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <FlexRow className={styles.narrowSection} layout={[60, 40]}>
          <div>
            <Text
              className={styles.understandEnergyTitle}
              element="h2"
              type={TextStyles.h2}
              color={ColorStyles.secondary}
            >
              {understandEnergy.title}
            </Text>
            <List
              classNames={styles.understandEnergyList}
              listContent={understandEnergy.list}
              textColor={ColorStyles.secondary}
            />
            <Secondary>{understandEnergy.cta}</Secondary>
          </div>
          <div>
            <Image src={getImagePath(imagery, understandEnergy.image)} alt={understandEnergy.title} isLazy={true} />
          </div>
        </FlexRow>
        <FlexRow className={styles.narrowSectionMobileOnly}>
          <Secondary>{understandEnergy.cta}</Secondary>
        </FlexRow>
      </PageSection>
      <PageSection style={PageSectionStyle.Secondary}>
        <div className={styles.switchingStepsHeader}>
          <Text element="h2" type={TextStyles.h2}>
            {switchingSteps.header}
          </Text>
        </div>
        <FlexRow className={styles.switchingStepsSection}>
          <StepCard
            header={switchingSteps.content.step1.header}
            body={switchingSteps.content.step1.body}
            style={ContentBoxStyle.SecondaryPattern}
          />
          <StepCard
            header={switchingSteps.content.step2.header}
            body={switchingSteps.content.step2.body}
            style={ContentBoxStyle.SecondaryPattern}
          />
          <StepCard
            cta={switchingSteps.content.step3.cta}
            style={ContentBoxStyle.TertiaryPattern}
            isVerticallyCentered={true}
            isHorizontallyCentered={true}
          />
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

export default HomePage;
