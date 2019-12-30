import * as React from 'react';

import PageSection from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import * as styles from './content.module.css';

interface IHero {
  title: string;
  subTitle?: string;
  cta?: string;
}

export interface IContentPageProps {
  hero: IHero;
  subTitle: string;
  body: string;
}

const ContentPage: React.FC<IContentPageProps> = ({ hero, subTitle, body }) => {
  return (
    <RegularLayout hero={hero}>
      <PageSection isNarrow={true} className={styles.contentPageWrapper}>
        <Text element="h3" type={TextStyles.h3} className={styles.contentPageSubTitle}>
          {subTitle}
        </Text>
        {body.split('\n\n').map((paragraph, count) => (
          <Text
            key={`text-${count}`}
            element={'p'}
            type={TextStyles.body}
            color={ColorStyles.tertiary}
            className={styles.contentPageParagraph}
          >
            {paragraph}
          </Text>
        ))}
      </PageSection>
    </RegularLayout>
  );
};

export default ContentPage;
