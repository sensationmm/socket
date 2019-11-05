import cx from 'classnames';
import * as React from 'react';

import * as styles from './flex-row.module.css';

export interface IFlexRowProps {
  children: React.ReactNode;
  className?: string;
  layout?: number[] | string[];
}

const FlexRow: React.FC<IFlexRowProps> = ({ children, className, layout }) => (
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

export default FlexRow;
