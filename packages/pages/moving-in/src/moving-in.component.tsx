import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Secondary } from '@somo/pda-components-button/src';
import Image from '@somo/pda-components-image/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { getImagePath } from '@somo/pda-utils-imagery/src';
import * as styles from './moving-in.module.css';

interface IImageProps {
  node: {
    name: string;
    publicURL: string;
  };
}

export interface IMovingInPageProps {
  imagery: IImageProps[];
}

const MovingInPage: React.FC<IMovingInPageProps> = ({ imagery }) => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.movingIn.hero', { returnObjects: true })}>
      <PageSection>
        <div className={styles.getInTouch}>
          <Text element="h2" type={TextStyles.h2}>
            {t('site.movingIn.getInTouch.header')}
          </Text>
          <div className={styles.getInTouchContent}>
            <Text element="p" color={ColorStyles.tertiary} type={TextStyles.body}>
              {t('site.movingIn.getInTouch.content')}
            </Text>
          </div>
          <Secondary>{t('site.movingIn.getInTouch.cta')}</Secondary>
        </div>
      </PageSection>
      <PageSection style={PageSectionStyle.TertiaryPattern} className={styles.ohFriends}>
        <div className={styles.ohFriendsContent}>
          <div>
            <Text element="h2" type={TextStyles.h2} color={ColorStyles.quaternary}>
              {t('site.movingIn.ohFriends.title')}
            </Text>
            <Text type={TextStyles.segmentCopy} element="p" color={ColorStyles.secondary}>
              {t('site.movingIn.ohFriends.content')}
            </Text>
          </div>

          <Image
            src={getImagePath(imagery, 'energy-use-desktop')}
            alt={t('site.movingIn.ohFriends.imageAlt')}
            isLazy={true}
          />
        </div>
        <div className={styles.ohFriendsButton}>
          <Secondary>{t('site.movingIn.ohFriends.cta')}</Secondary>
        </div>
      </PageSection>
      <PageSection isNarrow={true}>
        <div className={styles.movingOut}>
          <Text element="h2" type={TextStyles.h2}>
            {t('site.movingIn.movingOut.header')}
          </Text>

          <Text element="p" color={ColorStyles.tertiary} type={TextStyles.body} className={styles.movingOutContent}>
            {t('site.movingIn.movingOut.content')}
          </Text>

          <div className={styles.movingOutButton}>
            <Secondary>{t('site.movingIn.movingOut.cta')}</Secondary>
          </div>
        </div>
      </PageSection>
    </RegularLayout>
  );
};

export default MovingInPage;
