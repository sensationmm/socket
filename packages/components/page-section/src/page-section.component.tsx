import classnames from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as styles from './page-section.module.css';

export enum PageSectionStyle {
  Default,
  Primary,
  PrimaryPattern,
  Secondary,
  Image,
}

export interface IPageSectionProps {
  style?: PageSectionStyle;
  bgImage?: string[];
}

const PageSection: React.FC<IPageSectionProps> = ({ style, bgImage = {}, children }) => (
  <div
    className={classnames(
      styles.component,
      { [styles.primary]: style === PageSectionStyle.Primary },
      { [styles.primarypattern]: style === PageSectionStyle.PrimaryPattern },
      { [styles.secondary]: style === PageSectionStyle.Secondary },
      { [styles.image]: style === PageSectionStyle.Image },
    )}
    style={style === PageSectionStyle.Image ? { backgroundImage: `url(${bgImage})` } : {}}
  >
    <div className={styles.inner}>{children}</div>
  </div>
);

PageSection.defaultProps = {
  style: PageSectionStyle.Default,
};

export default PageSection;
