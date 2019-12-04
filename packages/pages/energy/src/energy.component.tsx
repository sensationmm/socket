import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { splitArrayIntoChunksOfN } from '@somo/pda-utils-arrays/src';

import * as styles from './energy.module.css';

const EnergyPage: React.FC = () => {
  const [t] = useTranslation();

  const renewable = t('site.energy.renewable.content', { returnObjects: true }) as [];
  const energy = t('site.energy.whereEnergyComesFrom.content', { returnObjects: true }) as [];
  const scoop = t('site.energy.scoop.content', { returnObjects: true }) as [];

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
      <PageSection style={PageSectionStyle.TertiaryPattern}>
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
    </RegularLayout>
  );
};

export default EnergyPage;
