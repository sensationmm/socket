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
  style: PageSectionStyle;
  bgImage: string[];
}

const PageSection: React.FC<IPageSectionProps> = (props) => (
  <div
    className={classnames(
      styles.component,
      { [styles.primary]: props.style === PageSectionStyle.Primary },
      { [styles.primarypattern]: props.style === PageSectionStyle.PrimaryPattern },
      { [styles.secondary]: props.style === PageSectionStyle.Secondary },
      { [styles.image]: props.style === PageSectionStyle.Image },
    )}
    style={props.style === PageSectionStyle.Image ? { backgroundImage: `url(${props.bgImage})` } : {}}
  >
    <div>{props.children}</div>
  </div>
);

PageSection.defaultProps = {
  style: PageSectionStyle.Default,
};

export default PageSection;
