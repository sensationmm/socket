import * as React from 'react';

import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import PhotoCard, { PhotoCardStyle } from '@somo/pda-components-photo-card/src';
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

interface IAboutPageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'about'>;
  imagery: IImageProps[];
}

const AboutPage: React.FC<IAboutPageProps> = ({ i18n, imagery }) => {
  const { about, footer } = i18n;
  const { hero, energyMarket, goodBunch, realPeople } = about;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>
        <Text element="h2" type={TextStyles.h2}>
          {energyMarket.title}
        </Text>
        <div className={styles.energyMarket}>
          {splitArrayIntoChunksOfN(energyMarket.content, 4).map((chunk, count) => (
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
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Text className={styles.goodBunchTitle} element="h2" type={TextStyles.h2} color={ColorStyles.quaternary}>
          {goodBunch.title}
        </Text>
        <div className={styles.goodBunch}>
          {goodBunch.content.map((item, count) => (
            <div className={styles.goodBunchBlock} key={`good-bunch-${count}`}>
              {item.text && (
                <Text className={styles.goodBunchText} type={TextStyles.body} color={ColorStyles.secondary} element="p">
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
          <SecondaryBtn>{goodBunch.cta}</SecondaryBtn>
        </div>
      </PageSection>
      <PageSection isNarrow={true}>
        <Text className={styles.realPeopleTitle} element="h2" type={TextStyles.h2} color={ColorStyles.primary}>
          {realPeople.title}
        </Text>
        <FlexRow className={styles.realPeopleList} layout={[50, 50]}>
          {realPeople.content.map((item, count) => (
            <PhotoCard
              key={`real-people-${count}`}
              style={PhotoCardStyle.Secondary}
              text={item.text}
              image={getImagePath(imagery, item.image)}
            />
          ))}
        </FlexRow>
        <div className={styles.realPeopleCta}>
          <SecondaryBtn>{realPeople.cta}</SecondaryBtn>
        </div>
      </PageSection>
    </RegularLayout>
  );
};

export default AboutPage;
