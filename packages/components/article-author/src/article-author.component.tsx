import cx from 'classnames';
import * as React from 'react';

import Avatar from '@somo/oxd-components-avatar/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { formatISODate } from '@somo/pda-utils-dates/src';

import * as styles from './article-author.module.css';

export interface IArticleAuthorProps {
  name: string;
  avatar?: string;
  isAvatarSmall?: boolean;
  isAvatarResponsive?: boolean;
  date?: string;
}

const ArticleAuthor: React.FC<IArticleAuthorProps> = ({ name, avatar, isAvatarSmall, isAvatarResponsive, date }) => (
  <div className={cx(styles.articleAuthor, { [styles.small]: isAvatarSmall })}>
    <div>
      <Avatar picture={avatar} alt={name} isSmall={isAvatarSmall} isResponsive={isAvatarResponsive} />
    </div>
    <div>
      <Text className={styles.name} color={ColorStyles.secondary} type={TextStyles.body}>
        {name}
      </Text>
      {date && (
        <Text className={styles.date} color={ColorStyles.secondary} type={TextStyles.segmentCopyFixed}>
          {formatISODate(date)}
        </Text>
      )}
    </div>
  </div>
);

ArticleAuthor.defaultProps = {
  isAvatarSmall: false,
};

export default ArticleAuthor;
