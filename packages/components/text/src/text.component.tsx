import cx from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as baseStyles from './text.module.css';

export enum TextStyles {
  mainTitle = 'mainTitle',
  vehicleTitle = 'vehicleTitle',
  vehicleSubTitle = 'vehicleSubTitle',
  vehiclePrice = 'vehiclePrice',
  vehicleBody = 'vehicleBody',
  cardTitle = 'cardTitle',
  menuTitle = 'menuTitle',
  menuItem = 'menuItem',
  bullet = 'bullet',
  cardFocalText = 'cardFocalText',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  overline = 'overline',
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
  type: TextStyles.body1,
};

export default Text;
