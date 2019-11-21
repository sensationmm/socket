import * as React from 'react';
import { useTranslation } from 'react-i18next';

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
  imagery: IImageProps[];
}

interface IMainFeatures {
  icon: string;
  header: string;
  body: string;
}

const HomePage: React.FC<IHomePageProps> = ({ imagery }) => {
  const [t] = useTranslation();

  const mainFeatures = t('site.homepage.mainFeatures.content', { returnObjects: true }) as IMainFeatures[];

  const thingsWeDoDo = t('site.homepage.companyFeatures.thingsWeDoDo.content', {
    returnObjects: true,
  }) as IMainFeatures[];
  const thingsWeDontDo = t('site.homepage.companyFeatures.thingsWeDontDo.content', {
    returnObjects: true,
  }) as IMainFeatures[];

  return (
    <RegularLayout hero={t('site.homepage.hero', { returnObjects: true })}>
      <PageSection>
        <FlexRow>
          {mainFeatures.map((feature, count) => {
            return (
              <ContentCard key={`feature-${count}`} emoji={feature.icon} header={feature.header} body={feature.body} />
            );
          })}
        </FlexRow>
      </PageSection>

      <PageSection style={PageSectionStyle.TertiaryPattern}>
        <FlexRow className={styles.narrowSection} layout={[60, 40]}>
          <div>
            <Text
              className={styles.understandEnergyTitle}
              element="h2"
              type={TextStyles.h2}
              color={ColorStyles.secondary}
            >
              {t('site.homepage.understandEnergy.title')}
            </Text>
            <List
              classNames={styles.understandEnergyList}
              listContent={t('site.homepage.understandEnergy.list', { returnObjects: true })}
              textColor={ColorStyles.secondary}
            />
            <Secondary>{t('site.homepage.understandEnergy.cta')}</Secondary>
          </div>
          <div>
            <Image
              src={getImagePath(imagery, 'energy-pie')}
              alt={t('site.homepage.understandEnergy.title')}
              isLazy={true}
            />
          </div>
        </FlexRow>
        <FlexRow className={styles.narrowSectionMobileOnly}>
          <Secondary>{t('site.homepage.understandEnergy.cta')}</Secondary>
        </FlexRow>
      </PageSection>

      <PageSection style={PageSectionStyle.Secondary}>
        <div className={styles.switchingStepsHeader}>
          <Text element="h2" type={TextStyles.h2}>
            {t('site.homepage.switchingSteps.header')}
          </Text>
        </div>
        <FlexRow className={styles.switchingStepsSection}>
          <StepCard
            header={t('site.homepage.switchingSteps.content.step1.header')}
            body={t('site.homepage.switchingSteps.content.step1.body')}
            style={ContentBoxStyle.SecondaryPattern}
          />
          <StepCard
            header={t('site.homepage.switchingSteps.content.step2.header')}
            body={t('site.homepage.switchingSteps.content.step2.body')}
            style={ContentBoxStyle.SecondaryPattern}
          />
          <StepCard
            cta={t('site.homepage.switchingSteps.content.step3.cta')}
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
              {t('site.homepage.companyFeatures.thingsWeDontDo.header')}
            </Text>
            {thingsWeDontDo.map((feature, count) => {
              return (
                <ContentCard
                  key={`dontDo-${count}`}
                  className={styles.featureContentCard}
                  emoji={feature.icon}
                  header={feature.header}
                  body={feature.body}
                />
              );
            })}
          </div>

          <div>
            <Text element="h2" type={TextStyles.h2}>
              {t('site.homepage.companyFeatures.thingsWeDoDo.header')}
            </Text>
            {thingsWeDoDo.map((feature, count) => {
              return (
                <ContentCard
                  key={`doDo-${count}`}
                  className={styles.featureContentCard}
                  emoji={feature.icon}
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
