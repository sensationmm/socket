import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import ContentCard from '@somo/pda-components-content-card/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { RingStyles } from '@somo/pda-components-ring/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { getImagePath } from '@somo/pda-utils-imagery/src';

import * as styles from './smart-tariff.module.css';

interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

interface ISwitchingFeature {
  icon: string;
  title: string;
  text: string;
}

interface ISmartTariffPageProps {
  imagery: IImageProps[];
}

const SmartTariffPage: React.FC<ISmartTariffPageProps> = ({ imagery }) => {
  const [t] = useTranslation();

  const plusPointsList = t('site.smartTariff.plusPoints.list', { returnObjects: true }) as [];
  const switchingList = t('site.smartTariff.switching.content', { returnObjects: true }) as ISwitchingFeature[];

  return (
    <RegularLayout hero={t('site.smartTariff.hero', { returnObjects: true })}>
      <PageSection style={PageSectionStyle.Secondary} isNarrow={true}>
        <FlexRow className={styles.plusPointsRow} layout={[65, 35]}>
          <div className={styles.textWrapper}>
            <Text className={styles.plusPointsTitle} element="h2" type={TextStyles.h2}>
              {t('site.smartTariff.plusPoints.title')}
            </Text>
            {Array.isArray(plusPointsList) && (
              <List classNames={styles.plusPointsList} listContent={plusPointsList} textColor={ColorStyles.tertiary} />
            )}
            <SecondaryBtn>{t('site.smartTariff.plusPoints.cta')}</SecondaryBtn>
          </div>
          <div>
            <Image
              src={getImagePath(imagery, 'pie-chart')}
              alt={t('site.smartTariff.plusPoints.title')}
              isLazy={true}
            />
          </div>
        </FlexRow>
        <FlexRow className={styles.buttonWrapperMobileOnly}>
          <SecondaryBtn>{t('site.smartTariff.plusPoints.cta')}</SecondaryBtn>
        </FlexRow>
      </PageSection>
      <PageSection>
        <Text className={styles.switchingTitle} element="h2" type={TextStyles.h2}>
          {t('site.smartTariff.switching.title')}
        </Text>
        <Text className={styles.switchingText} element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
          {t('site.smartTariff.switching.subtitle')}
        </Text>
        <div>
          {Array.isArray(switchingList) && (
            <FlexRow>
              {switchingList.map((item, count) => (
                <ContentCard
                  key={`switching-item-${count}`}
                  ringStyle={RingStyles.Primary}
                  header={item.title}
                  body={item.text}
                  emoji={item.icon}
                />
              ))}
            </FlexRow>
          )}
        </div>
      </PageSection>
    </RegularLayout>
  );
};

export default SmartTariffPage;
