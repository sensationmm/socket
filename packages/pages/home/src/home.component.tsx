import * as React from 'react';
import { useTranslation } from 'react-i18next';

import ContentCard from '@somo/pda-components-content-card/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import TextImage from '@somo/pda-components-text-image/src';
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

export interface IHomePageProps {
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
        <TextImage
          text={
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
            </div>
          }
          image={
            <Image
              src={getImagePath(imagery, 'energy-pie')}
              alt={t('site.homepage.understandEnergy.title')}
              isLazy={true}
            />
          }
        />
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
