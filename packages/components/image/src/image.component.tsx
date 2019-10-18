import cx from 'classnames';
import * as React from 'react';

import HoldingImage from '@somo/pda-components-holding-image/src';
import LazyImage from '@somo/pda-components-lazy-image/src';

interface IImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  i18n?: { noImage: string };
  isLazy?: boolean;
  onError?: (event?: any) => void;
}

import * as styles from './image.module.css';

const Image: React.FC<IImageProps> = ({
  i18n = { noImage: 'Image Unavailable' },
  isLazy,
  className = '',
  onError,
  ...props
}) => {
  const [hasError, updateErrorState] = React.useState(false);
  const updateError = () => {
    updateErrorState(true);
  };

  return !props.src || hasError ? (
    <HoldingImage className={cx(styles.fallback, className)} text={i18n.noImage} />
  ) : isLazy ? (
    <LazyImage {...props} className={className} onError={onError || updateError} />
  ) : (
    <img className={className} alt={props.alt || ''} src={props.src || ''} onError={onError || updateError} />
  );
};

export default Image;
