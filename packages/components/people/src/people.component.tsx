import * as React from 'react';

import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import PhotoCard, { PhotoCardStyle } from '@somo/pda-components-photo-card/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './people.module.css';

interface IPeopleCardProps {
  text: string;
  image: string;
}

export interface IPeopleProps {
  title: string;
  list: IPeopleCardProps[];
  cta: string;
}

const People: React.FC<IPeopleProps> = ({ title, list, cta }) => (
  <>
    <Text className={styles.title} element="h2" type={TextStyles.h2} color={ColorStyles.primary}>
      {title}
    </Text>
    {list.length > 0 && (
      <FlexRow className={styles.list} layout={[50, 50]}>
        {list.map((item, count) => (
          <PhotoCard key={`people-${count}`} style={PhotoCardStyle.Secondary} text={item.text} image={item.image} />
        ))}
      </FlexRow>
    )}
    <div className={styles.ctaWrapper}>
      <SecondaryBtn>{cta}</SecondaryBtn>
    </div>
  </>
);

export default People;
