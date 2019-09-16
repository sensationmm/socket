import cx from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as baseStyles from './base-button.module.css';

interface IButtonStyles {
  base?: string;
  disabled?: string;
  fullWidth?: string;
  loading?: string;
  content?: string;
  button?: string;
}

export interface IBaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  isLoading?: boolean;
  styles?: IButtonStyles;
  className?: string;
  size?: 'mini' | 'regular' | 'large';
  icon?: any;
  iconProps?: any;
}

function getButtonSizeStyle(size) {
  switch (size) {
    case 'large':
      return baseStyles.large;
    case 'mini':
      return baseStyles.mini;
    case 'regular':
    default:
      return baseStyles.regular;
  }
}

const BaseButton: React.FC<IBaseButtonProps> = ({
  children,
  isFullWidth,
  styles = {},
  disabled,
  isLoading,
  size,
  className,
  icon,
  iconProps = {},
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
    },
    className,
  );

  return (
    <button className={buttonClass} {...props} disabled={disabled || isLoading}>
      <div className={cx(mergedStyles.content, { [baseStyles.contentLoading]: isLoading })}>{children}</div>
    </button>
  );
};

export default BaseButton;
