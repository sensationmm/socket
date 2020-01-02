import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import Emoji from '@somo/pda-components-emoji/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './timeline.module.css';

export interface ITimelineItemContentProps {
  emoji: string;
  heading: string;
  text: string;
  notification?: {
    heading: string;
    text: string;
    label: string;
    link: string;
    action: string;
  };
}

export interface ITimelineItemProps extends ITimelineItemContentProps {
  isCurrent?: boolean;
  isFuture?: boolean;
}

const TimelineItem: React.FC<ITimelineItemProps> = ({
  emoji,
  heading,
  text,
  isCurrent = false,
  isFuture = false,
  notification,
}) => {
  let textColor;

  if (isCurrent) {
    textColor = ColorStyles.primary;
  } else if (isFuture) {
    textColor = ColorStyles.quinary;
  } else {
    textColor = ColorStyles.tertiary;
  }

  return (
    <div className={classNames(styles.timelineItem, { [styles.current]: isCurrent }, { [styles.future]: isFuture })}>
      <div className={styles.icon}>
        <Emoji size={isCurrent ? 24 : 16}>{emoji}</Emoji>
      </div>

      <div className={styles.content}>
        <Text element="label" type={TextStyles.caption} color={ColorStyles.quinary} className={styles.itemHeader}>
          {heading}
        </Text>
        <Text element="p" type={TextStyles.body} color={textColor}>
          {text}
        </Text>

        {notification &&
          !isFuture &&
          (isCurrent ? (
            <div className={styles.notification}>
              <Text element="p" type={TextStyles.body} color={textColor}>
                {notification.heading}
              </Text>
              <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
                {notification.text}
              </Text>
              <div className={styles.link}>
                <Link to={notification.action}>{notification.link}</Link>
              </div>
            </div>
          ) : (
            <div className={styles.link}>
              <Link to={notification.action}>{notification.label}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimelineItem;
