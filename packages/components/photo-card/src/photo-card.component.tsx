import cx from 'classnames';
import * as React from 'react';

import Image from '@somo/pda-components-image/src';
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
    style={{ backgroundImage: text !== '' ? `url(${image})` : '' }}
  >
    {text !== '' ? (
      <div className={styles.inner}>
        <Text type={TextStyles.bodyFixed} color={ColorStyles.secondary}>
          {text}
        </Text>
      </div>
    ) : (
      <Image src={image} alt={image} isLazy={true} />
    )}
  </div>
);

PhotoCard.defaultProps = {
  style: PhotoCardStyle.Default,
};

export default PhotoCard;
