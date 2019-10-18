import cx from 'classnames';
import * as React from 'react';

import * as styles from './content-box.module.css';

export enum ContentBoxStyle {
  Default,
  Primary,
  PrimaryPattern,
  Secondary,
  SecondaryPattern,
  Tertiary,
  TertiaryPattern,
}

export interface IContentBoxProps {
  style?: ContentBoxStyle;
  className?: string;
  height?: number | string;
  isVerticallyCentered?: boolean;
  isHorizontallyCentered?: boolean;
}

const ContentBox: React.FC<IContentBoxProps> = ({
  style,
  className,
  height,
  isVerticallyCentered,
  isHorizontallyCentered,
  children,
}) => (
  <div
    className={cx(
      className,
      styles.contentBox,
      { [styles.primary]: style === ContentBoxStyle.Primary },
      { [styles.primaryPattern]: style === ContentBoxStyle.PrimaryPattern },
      { [styles.secondary]: style === ContentBoxStyle.Secondary },
      { [styles.secondaryPattern]: style === ContentBoxStyle.SecondaryPattern },
      { [styles.tertiary]: style === ContentBoxStyle.Tertiary },
      { [styles.tertiaryPattern]: style === ContentBoxStyle.TertiaryPattern },
      { [styles.verticallyCentered]: isVerticallyCentered },
      { [styles.horizontallyCentered]: isHorizontallyCentered },
    )}
    style={{ height }}
  >
    <div className={styles.inner}>{children}</div>
  </div>
);

ContentBox.defaultProps = {
  style: ContentBoxStyle.Default,
  height: 'auto',
  isVerticallyCentered: false,
  isHorizontallyCentered: false,
};

export default ContentBox;
