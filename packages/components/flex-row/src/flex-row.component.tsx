import * as React from 'react';

// @ts-ignore
import * as styles from './flex-row.module.css';

export interface IFlexColumnProps {
  children: React.ReactNode;
  layout?: number[] | string[];
}

const FlexColumn: React.FC<IFlexColumnProps> = ({ children, layout }) => (
  <div className={styles.flexrow}>
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
