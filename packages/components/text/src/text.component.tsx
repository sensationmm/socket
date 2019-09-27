import cx from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as baseStyles from './text.module.css';

export enum TextStyles {
  pageTitle = 'pageTitle',
  pageAbout = 'pageAbout',
  header = 'header',
  header2 = 'header2',
  content = 'content',
  content2 = 'content2',
  disclaimer = 'disclaimer'
}

interface ITextProps {
  children?: React.ReactNode;
  className?: string;
  element?: any;
  type?: TextStyles | keyof typeof TextStyles;

  [prop: string]: any;
}

const Text: React.FC<ITextProps> = ({ className, children, element, type, ...props }) => {
  const finalClassName = cx(className, baseStyles.base, (type && baseStyles[type]) || type);

  return React.createElement(element, { className: finalClassName, ...props }, children);
};

Text.defaultProps = {
  element: 'span',
  type: TextStyles.content,
};

export default Text;
