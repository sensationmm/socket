import cx from 'classnames';
import * as React from 'react';

import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '@somo/pda-components-avatar/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { formatISODate } from '@somo/pda-utils-dates/src';

import * as styles from './article-author.module.css';

export interface IArticleAuthorProps {
  name: string;
  avatar?: string;
  avatarSize: AvatarSizes;
  isAvatarResponsive?: boolean;
  date?: string;
}

const ArticleAuthor: React.FC<IArticleAuthorProps> = ({ name, avatar, avatarSize, isAvatarResponsive, date }) => (
  <div className={cx(styles.articleAuthor, styles[avatarSize])}>
    <div>
      <Avatar
        picture={avatar}
        alt={name}
        size={avatarSize}
        style={AvatarStyles.Primary}
        svgType={SvgTypes.Profile}
        isResponsive={isAvatarResponsive}
      />
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

export default ArticleAuthor;
