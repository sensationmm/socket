import cx from 'classnames';
import * as React from 'react';

import { Profile } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';

import styles from './avatar.module.css';

const AVATAR_SIZE = '60px';
const AVATAR_SIZE_SMALL = '30px';

interface IProps {
  picture?: string;
  alt?: string;
  isSmall?: boolean;
  additionalClass?: string;
}

const Avatar: React.FC<IProps> = ({ picture, alt, isSmall = false, additionalClass }) => {
  const svgSize = isSmall ? AVATAR_SIZE_SMALL : AVATAR_SIZE;
  const className = cx(styles.avatar, additionalClass, { [styles.small]: isSmall });

  return picture && picture.length ? (
    <img className={className} src={picture} alt={alt} data-testid="avatar-image" />
  ) : (
    <div className={cx(styles.defaultAvatarWrapper, { [styles.small]: isSmall })}>
      <SVG className={className} children={Profile} size={svgSize} data-testid="avatar-svg" />
    </div>
  );
};

export default Avatar;
