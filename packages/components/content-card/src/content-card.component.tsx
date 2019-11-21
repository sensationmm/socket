import cx from 'classnames';
import * as React from 'react';

import Emoji from '@somo/pda-components-emoji/src';
import { Logo } from '@somo/pda-components-icons/src';
import Ring, { RingStyles } from '@somo/pda-components-ring/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './content-card.module.css';

export interface IContentCardProps {
  className?: string;
  ringStyle?: RingStyles;
  header: string;
  body: string;
  emoji?: string;
}

const ContentCard: React.FC<IContentCardProps> = ({ className, ringStyle, header, body, emoji }) => (
  <div className={cx(styles.contentCard, className)}>
    <div className={styles.contentCardHeader}>
      <Ring style={ringStyle}>{emoji ? <Emoji size={24}>{emoji}</Emoji> : <SVG children={Logo} />}</Ring>
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
