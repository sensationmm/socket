import cx from 'classnames';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './list.module.css';

interface IListProps {
  classNames?: string;
  listContent: string[];
  textColor?: ColorStyles;
  isCMSContent?: boolean;
}

const List: React.FC<IListProps> = ({ classNames, listContent, textColor = 'secondary', isCMSContent }) => (
  <ul className={cx(styles.list, styles[textColor], classNames, { [styles.cmsContent]: isCMSContent })}>
    {listContent.map((content, index) => (
      <li key={`listItem-${index}`}>
        <Text type={TextStyles.segmentCopy} color={textColor}>
          {content}
        </Text>
      </li>
    ))}
  </ul>
);

export default List;
