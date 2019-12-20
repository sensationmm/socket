import classNames from 'classnames';
import React from 'react';

import FlexRow from '@somo/pda-components-flex-row/src';

import * as styles from './text-image.module.css';

export interface ITextImageProps {
  text: JSX.Element;
  image: JSX.Element;
  reverse?: boolean;
}

const TextImage: React.FC<ITextImageProps> = ({ text, image, reverse }) => {
  return (
    <FlexRow className={classNames([styles.textImage], { [styles.reversed]: reverse })} layout={[60, 40]}>
      <div>{text}</div>
      <div>{image}</div>
    </FlexRow>
  );
};

export default TextImage;
