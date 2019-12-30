import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import People from '@somo/pda-components-people/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { splitArrayIntoChunksOfN } from '@somo/pda-utils-arrays/src';
import { getImagePath } from '@somo/pda-utils-imagery/src';
import * as styles from './about.module.css';

interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

export interface IAboutPageProps {
  imagery: IImageProps[];
}

interface IGoodBunch {
  text: string;
  list: [];
}

interface IRealPeople {
  text: string;
  image: string;
}

const AboutPage: React.FC<IAboutPageProps> = ({ imagery }) => {
  const [t] = useTranslation();

  const energy = t('site.about.energyMarket.content', { returnObjects: true }) as [];
  const goodBunch = t('site.about.goodBunch.content', { returnObjects: true }) as IGoodBunch[];
  const realPeople = t('site.about.realPeople.content', { returnObjects: true }) as IRealPeople[];

  return (
    <RegularLayout hero={t('site.about.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2" type={TextStyles.h2}>
          {t('site.about.energyMarket.title')}
        </Text>
        <div className={styles.energyMarket}>
          {Array.isArray(energy) &&
            splitArrayIntoChunksOfN(energy, 4).map((chunk, count) => (
              <div key={`energy-market-chunk-${count}`}>
                {chunk.map((item, index) => (
                  <Text
                    className={styles.energyMarketText}
                    key={`energy-market-item-${index}`}
                    element="p"
                    color={ColorStyles.tertiary}
                  >
                    {item}
                  </Text>
                ))}
              </div>
            ))}
        </div>
      </PageSection>
      <PageSection style={PageSectionStyle.TertiaryPattern}>
        <Text className={styles.goodBunchTitle} element="h2" type={TextStyles.h2} color={ColorStyles.quaternary}>
          {t('site.about.goodBunch.title')}
        </Text>
        <div className={styles.goodBunch}>
          {Array.isArray(goodBunch) &&
            goodBunch.map((item, count) => (
              <div className={styles.goodBunchBlock} key={`good-bunch-${count}`}>
                {item.text && (
                  <Text
                    className={styles.goodBunchText}
                    type={TextStyles.body}
                    color={ColorStyles.secondary}
                    element="p"
                  >
                    {item.text}
                  </Text>
                )}
                {item.list && item.list.length > 0 && (
                  <ul className={styles.goodBunchList}>
                    {item.list.map((listItem, index) => (
                      <li key={`good-bunch-list-item-${index}`} className={styles.goodBunchListItem}>
                        <Text type={TextStyles.body} color={ColorStyles.secondary}>
                          {listItem}
                        </Text>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
        <div className={styles.goodBunchCta}>
          <SecondaryBtn>{t('site.about.goodBunch.cta')}</SecondaryBtn>
        </div>
      </PageSection>
      <PageSection isNarrow={true}>
        <People
          title={t('site.about.realPeople.title')}
          list={
            Array.isArray(realPeople)
              ? realPeople.map(({ text, image }) => ({ text, image: getImagePath(imagery, image) }))
              : []
          }
        />
      </PageSection>
    </RegularLayout>
  );
};

export default AboutPage;
