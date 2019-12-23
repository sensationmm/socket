import cx from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';

import * as baseStyles from './base-button.module.css';

interface IButtonStyles {
  base?: string;
  disabled?: string;
  fullWidth?: string;
  loading?: string;
  content?: string;
  button?: string;
}

export enum ButtonTypes {
  button = 'button',
  internalLink = 'internalLink',
  externalLink = 'externalLink',
}

export interface IBaseButtonProps extends React.HTMLAttributes<HTMLElement> {
  type?: ButtonTypes;
  isFullWidth?: boolean;
  isLoading?: boolean;
  styles?: IButtonStyles;
  className?: string;
  size?: 'mini' | 'medium' | 'regular';
  isSelected?: boolean;
  width?: string | number;
  disabled?: boolean;
  link?: string;
}

function getButtonSizeStyle(size) {
  switch (size) {
    case 'mini':
      return baseStyles.mini;
    case 'medium':
      return baseStyles.medium;
    case 'regular':
    default:
      return baseStyles.regular;
  }
}

export interface IContentProps extends React.HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  styles: any;
}

const Content: React.FC<IContentProps> = ({ isLoading, styles, children }) => {
  return (
    <span className={cx(styles.baseContent, styles.content, { [baseStyles.contentLoading]: isLoading })}>
      {children}
    </span>
  );
};

const BaseButton: React.FC<IBaseButtonProps> = ({
  type,
  children,
  isFullWidth,
  styles = {},
  isLoading,
  isSelected,
  size,
  className,
  width,
  disabled,
  link = '/',
  ...props
}) => {
  const mergedStyles: any = { ...baseStyles, ...styles };
  const buttonClass = cx(
    mergedStyles.base,
    mergedStyles.button,
    getButtonSizeStyle(size),
    {
      [mergedStyles.disabled]: disabled,
      [mergedStyles.fullWidth]: isFullWidth,
      [mergedStyles.loading]: isLoading,
      [mergedStyles.selected]: isSelected,
    },
    className,
  );

  switch (type) {
    case ButtonTypes.button:
    default:
      return (
        <button className={buttonClass} {...props} disabled={disabled || isLoading}>
          <Content isLoading={isLoading} styles={mergedStyles} children={children} />
        </button>
      );

    case ButtonTypes.externalLink:
      return (
        <a className={buttonClass} {...props} href={link} target="_blank" rel="noopener noreferrer">
          <Content styles={mergedStyles} children={children} />
        </a>
      );

    case ButtonTypes.internalLink:
      return (
        <Link className={buttonClass} {...props} to={link}>
          <Content styles={mergedStyles} children={children} />
        </Link>
      );
  }
};

export default BaseButton;
