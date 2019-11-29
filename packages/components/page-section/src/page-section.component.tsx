import classNames from 'classnames';
import * as React from 'react';

import * as styles from './page-section.module.css';

export enum PageSectionStyle {
  Default,
  Primary,
  PrimaryPattern,
  Secondary,
  Tertiary,
  TertiaryPattern,
  Quaternary,
  QuaternaryPattern,
  Quinary,
  Senary,
  Image,
}

export interface IPageSectionProps {
  element?: any;
  style?: PageSectionStyle;
  bgImage?: string | string[];
  className?: string;
  isNarrow?: boolean;
}

const PageSection: React.FC<IPageSectionProps> = ({ element, style, bgImage = {}, className, isNarrow, children }) => {
  const finalClassName = classNames(
    styles.component,
    className,
    { [styles.narrow]: isNarrow },
    { [styles.primary]: style === PageSectionStyle.Primary },
    { [styles.primaryPattern]: style === PageSectionStyle.PrimaryPattern },
    { [styles.secondary]: style === PageSectionStyle.Secondary },
    { [styles.tertiary]: style === PageSectionStyle.Tertiary },
    { [styles.tertiaryPattern]: style === PageSectionStyle.TertiaryPattern },
    { [styles.quaternary]: style === PageSectionStyle.Quaternary },
    { [styles.quaternaryPattern]: style === PageSectionStyle.QuaternaryPattern },
    { [styles.quinary]: style === PageSectionStyle.Quinary },
    { [styles.senary]: style === PageSectionStyle.Senary },
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
