import * as React from 'react';

import Ring from '@somo/pda-components-ring/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './content-card.module.css';

export interface IContentCardProps {
  icon: string;
  header: string;
  body: string;
}

const ContentCard: React.FC<IContentCardProps> = ({ icon, header, body }) => (
  <div className={styles.contentCard}>
    <div className={styles.contentCardHeader}>
      <Ring>{icon}</Ring>
      <Text element="h3" className={styles.contentCardTitle} type={TextStyles.h3}>
        {header}
      </Text>
    </div>

    <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
      {body}
    </Text>
  </div>
);

export default ContentCard;
