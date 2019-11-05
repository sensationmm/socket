import cx from 'classnames';
import * as React from 'react';

import { addIntersectionObserver, removeIntersectionObserver } from '@somo/pda-utils-browser-support/src';

// @ts-ignore
import * as styles from './lazy-image.module.css';

interface ILazyProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  onError?: (event?: any) => void;
}

const LazyImage: React.FC<ILazyProps> = ({ className = '', onError, ...props }) => {
  let imgRef;
  const [isLoaded, updateLoadedState] = React.useState(false);
  const [isVisible, setVisibility] = React.useState(false);

  React.useEffect(() => {
    if (!imgRef) {
      return;
    }

    addObserver();

    return () => {
      if (!!imgRef) {
        removeIntersectionObserver(imgRef);
      }
    };
  }, [props.src]);

  const handleIntersection = (isIntersecting: boolean) => {
    if (isIntersecting && !!imgRef) {
      removeIntersectionObserver(imgRef);
      setVisibility(true);
    }
  };

  const addObserver = () => {
    if (imgRef) {
      addIntersectionObserver(handleIntersection, imgRef);
    }
  };

  const handleRef = (ref) => {
    if (!ref && imgRef) {
      removeIntersectionObserver(imgRef);
    }
    imgRef = ref;
    addObserver();
  };

  const visibleProp = {} as any;

  if (isVisible) {
    visibleProp.src = props.src;
  }

  return (
    <div className={styles.lazyWrapper}>
      <img
        className={cx(styles.lazy, className, { [styles.lazyLoaded]: isLoaded })}
        ref={handleRef}
        alt={props.alt || ''}
        onError={onError}
        onLoad={() => updateLoadedState(true)}
        {...visibleProp}
      />
    </div>
  );
};

export default LazyImage;
