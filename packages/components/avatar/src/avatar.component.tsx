import cx from 'classnames';
import * as React from 'react';

import { LogoMark, Profile } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';

import styles from './avatar.module.css';

export enum AvatarStyles {
  Primary,
  Secondary,
}

export enum AvatarSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum SvgTypes {
  Profile = 'Profile',
  Logo = 'Logo',
}

interface IProps {
  picture?: string;
  alt?: string;
  size?: AvatarSizes;
  isResponsive?: boolean;
  svgType?: SvgTypes;
  style?: AvatarStyles;
  additionalClass?: string;
}

const SvgList = {
  [SvgTypes.Profile]: Profile,
  [SvgTypes.Logo]: LogoMark,
};

const Avatar: React.FC<IProps> = ({
  picture,
  alt,
  size = 'small',
  isResponsive,
  svgType = 'Profile',
  additionalClass,
  style,
}) => {
  const className = cx(
    styles.avatar,
    additionalClass,
    styles[size],
    { [styles.responsive]: isResponsive },
    { [styles.primary]: style === AvatarStyles.Primary },
    { [styles.secondary]: style === AvatarStyles.Secondary },
  );

  return (
    <div className={className}>
      {picture && picture.length ? (
        <img src={picture} alt={alt} data-testid="avatar-image" />
      ) : (
        <SVG children={SvgList[svgType]} size="80%" data-testid="avatar-svg" />
      )}
    </div>
  );
};

export default Avatar;
