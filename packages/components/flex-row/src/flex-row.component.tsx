import cx from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as styles from './flex-row.module.css';

export interface IFlexColumnProps {
  children: React.ReactNode;
  className?: string;
  layout?: number[] | string[];
}

const FlexColumn: React.FC<IFlexColumnProps> = ({ children, className, layout }) => (
  <div className={cx(styles.flexrow, className)}>
    {(!layout || !Array.isArray(children)) && children}

    {layout &&
      Array.isArray(children) &&
      children.map((child, count) => {
        return (
          <div key={`child-${count}`} style={{ flexBasis: `${layout[count]}%` }}>
            {child}
          </div>
        );
      })}
  </div>
);

export default FlexColumn;
