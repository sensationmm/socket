// import classNames from 'classnames';
import React from 'react';

import TimelineItem, { ITimelineItemContentProps } from './timeline-item.component';

import * as styles from './timeline.module.css';

export interface ITimelineProps {
  activeStep: number;
  items: ITimelineItemContentProps[];
}

const Timeline: React.FC<ITimelineProps> = ({ items, activeStep }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, count) => {
        return (
          <TimelineItem
            key={`item-${count}`}
            {...item}
            isCurrent={activeStep === count + 1}
            isFuture={activeStep < count + 1}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
