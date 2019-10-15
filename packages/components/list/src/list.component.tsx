import cx from 'classnames';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './list.module.css';

interface IListProps {
  classNames?: string;
  listContent: string[];
  textColor?: ColorStyles;
}

const List: React.FC<IListProps> = ({ classNames, listContent, textColor }) => (
  <ul className={cx(styles.list, classNames)}>
    {listContent.map((content) => (
      <li>
        <Text type={TextStyles.segmentCopy} color={textColor}>
          {content}
        </Text>
      </li>
    ))}
  </ul>
);

export default List;
