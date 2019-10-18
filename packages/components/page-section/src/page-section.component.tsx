import classNames from 'classnames';
import * as React from 'react';

import * as styles from './page-section.module.css';

export enum PageSectionStyle {
  Default,
  Primary,
  PrimaryPattern,
  Secondary,
  Image,
}

export interface IPageSectionProps {
  element?: any;
  style?: PageSectionStyle;
  bgImage?: string[];
  className?: string;
}

const PageSection: React.FC<IPageSectionProps> = ({ element, style, bgImage = {}, className, children }) => {
  const finalClassName = classNames(
    styles.component,
    className,
    { [styles.primary]: style === PageSectionStyle.Primary },
    { [styles.primaryPattern]: style === PageSectionStyle.PrimaryPattern },
    { [styles.secondary]: style === PageSectionStyle.Secondary },
    { [styles.image]: style === PageSectionStyle.Image },
  );
  const inlineStyle = style === PageSectionStyle.Image ? { backgroundImage: `url(${bgImage})` } : {};

  return React.createElement(
    element,
    { className: finalClassName, style: inlineStyle },
    <div className={styles.inner}>{children}</div>,
  );
};

PageSection.defaultProps = {
  element: 'div',
  style: PageSectionStyle.Default,
};

export default PageSection;
