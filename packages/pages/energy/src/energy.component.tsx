import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import People from '@somo/pda-components-people/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { splitArrayIntoChunksOfN } from '@somo/pda-utils-arrays/src';
import { getImagePath } from '@somo/pda-utils-imagery/src';

import * as styles from './energy.module.css';

interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

interface IEnergyPageProps {
  imagery: IImageProps[];
}

interface IRealPeople {
  text: string;
  image: string;
}

const EnergyPage: React.FC<IEnergyPageProps> = ({ imagery }) => {
  const [t] = useTranslation();

  const renewable = t('site.energy.renewable.content', { returnObjects: true }) as [];
  const energy = t('site.energy.whereEnergyComesFrom.content', { returnObjects: true }) as [];
  const scoop = t('site.energy.scoop.content', { returnObjects: true }) as [];
  const realPeople = t('site.energy.realPeople.content', { returnObjects: true }) as IRealPeople[];

  return (
    <RegularLayout hero={t('site.energy.hero', { returnObjects: true })}>
      <PageSection>
        <Text className={styles.renewableTitle} element="h2" type={TextStyles.h2}>
          {t('site.energy.renewable.title')}
        </Text>
        <div className={styles.renewable}>
          {Array.isArray(renewable) &&
            renewable.map((item, count) => (
              <div key={`renewable-${count}`}>
                <Text className={styles.renewableText} element="p" color={ColorStyles.tertiary}>
                  {item}
                </Text>
              </div>
            ))}
        </div>
      </PageSection>
      <PageSection style={PageSectionStyle.Primary}>
        <Text className={styles.energyTitle} element="h2" type={TextStyles.h2} color={ColorStyles.quaternary}>
          {t('site.energy.whereEnergyComesFrom.title')}
        </Text>
        <div className={styles.energy}>
          {Array.isArray(energy) &&
            splitArrayIntoChunksOfN(energy, 3, true).map((chunk, count) => (
              <div key={`energy-chunk-${count}`}>
                {chunk.map((item, index) => (
                  <Text
                    className={styles.energyText}
                    key={`energy-item-${index}`}
                    type={TextStyles.segmentCopy}
                    element="p"
                    color={ColorStyles.secondary}
                  >
                    {item}
                  </Text>
                ))}
              </div>
            ))}
        </div>
      </PageSection>
      <PageSection isNarrow={true}>
        <Text className={styles.scoopTitle} element="h2" type={TextStyles.h2}>
          {t('site.energy.scoop.title')}
        </Text>
        <div className={styles.renewable}>
          {Array.isArray(renewable) &&
            scoop.map((item, count) => (
              <Text key={`scoop-${count}`} className={styles.scoopText} element="p" color={ColorStyles.tertiary}>
                {item}
              </Text>
            ))}
        </div>
      </PageSection>
      <PageSection isNarrow={true} style={PageSectionStyle.Secondary}>
        <People
          title={t('site.energy.realPeople.title')}
          list={
            Array.isArray(realPeople)
              ? realPeople.map(({ text, image }) => ({ text, image: getImagePath(imagery, image) }))
              : []
          }
          cta={t('site.energy.realPeople.cta')}
        />
      </PageSection>
    </RegularLayout>
  );
};

export default EnergyPage;
