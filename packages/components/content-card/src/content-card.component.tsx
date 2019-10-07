import cx from 'classnames';
import * as React from 'react';

import Ring from '@somo/pda-components-ring/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './content-card.module.css';

export interface IContentCardProps {
  className?: string;
  icon: string;
  header: string;
  body: string;
}

const ContentCard: React.FC<IContentCardProps> = ({ className, icon, header, body }) => (
  <div className={cx(styles.contentCard, className)}>
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
