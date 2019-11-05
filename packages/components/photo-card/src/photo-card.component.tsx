import cx from 'classnames';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './photo-card.module.css';

export enum PhotoCardStyle {
  Default,
  Primary,
  Secondary,
}

export interface IPhotoCardProps {
  style?: PhotoCardStyle;
  image: string;
  text?: string;
}

const PhotoCard: React.FC<IPhotoCardProps> = ({ style, image, text }) => (
  <div
    className={cx(
      styles.photoCard,
      { [styles.primary]: style === PhotoCardStyle.Primary },
      { [styles.secondary]: style === PhotoCardStyle.Secondary },
    )}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className={styles.inner}>
      {text && (
        <Text type={TextStyles.bodyFixed} color={ColorStyles.secondary}>
          {text}
        </Text>
      )}
    </div>
  </div>
);

PhotoCard.defaultProps = {
  style: PhotoCardStyle.Default,
};

export default PhotoCard;
