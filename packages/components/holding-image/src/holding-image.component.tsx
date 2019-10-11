import cx from 'classnames';
import * as React from 'react';

import Text, { TextStyles } from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './holding-image.module.css';

interface IHoldingImageProps {
  className?: string;
  text?: string;
}

const HoldingImage: React.FC<IHoldingImageProps> = ({ className, text }) => {
  return (
    <div className={cx(styles.holdingImage, className)}>
      <Text type={TextStyles.h3} element="h3">
        {text}
      </Text>
    </div>
  );
};

export default HoldingImage;
