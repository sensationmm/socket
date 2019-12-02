import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Secondary } from '@somo/pda-components-button/src';
import ContentCard from '@somo/pda-components-content-card/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
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

      <PageSection style={PageSectionStyle.TertiaryPattern} isNarrow={true}>
        <FlexRow className={styles.understandEnergyRow} layout={[60, 40]}>
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
        <FlexRow className={styles.understandEnergyRowMobileOnly}>
          <Secondary>{t('site.homepage.understandEnergy.cta')}</Secondary>
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
    </RegularLayout>
  );
};

export default HomePage;
