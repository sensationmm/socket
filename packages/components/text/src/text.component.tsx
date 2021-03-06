import cx from 'classnames';
import * as React from 'react';

import * as baseStyles from './text.module.css';

export enum TextStyles {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  body = 'body',
  bodyFixed = 'bodyFixed',
  segmentCopy = 'segmentCopy',
  segmentCopyFixed = 'segmentCopyFixed',
  caption = 'caption',
  supportCopy = 'supportCopy',
  label = 'label',
  cookieTitle = 'cookieTitle',
  cookieBody = 'cookieBody',
  edit = 'edit',
}

export enum ColorStyles {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  quinary = 'quinary',
  error = 'error',
}

interface ITextProps {
  children?: React.ReactNode;
  className?: string;
  element?: any;
  type?: any;
  color?: any;
  isCMSContent?: boolean;
  [prop: string]: any;
}

const Text: React.FC<ITextProps> = ({
  className,
  children,
  element = 'span',
  type = TextStyles.body,
  color = ColorStyles.primary,
  isCMSContent = false,
  ...props
}) => {
  const finalClassName = cx(className, baseStyles.base, baseStyles[type], baseStyles[color], {
    [baseStyles.cmsContent]: isCMSContent,
  });

  return React.createElement(element, { className: finalClassName, ...props }, children);
};

export default Text;
