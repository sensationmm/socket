import * as React from 'react';

import Avatar from '@somo/oxd-components-avatar/src';
import { Secondary } from '@somo/pda-components-button/src';
import ContentBox, { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { formatBlogPostISODate } from '@somo/pda-utils-dates/src';

import * as styles from './blog-post-card.module.css';

export interface IBlogPostCardProps {
  authorName: string;
  authorAvatar?: string;
  date: string;
  title: string;
  maxTitleLength?: number;
  shortDescription: string;
  maxShortDescriptionLength?: number;
  cta: string;
  link: string;
  height?: string | number;
}

const trimText = (text: string, maxNumOfChars: number = 0) =>
  text.length > maxNumOfChars ? `${text.substring(0, maxNumOfChars).trim()}...` : text;

const BlogPostCard: React.FC<IBlogPostCardProps> = ({
  authorAvatar,
  authorName,
  date,
  title,
  maxTitleLength,
  shortDescription,
  maxShortDescriptionLength,
  cta,
  link,
  height,
}) => (
  <ContentBox className={styles.blogPostCard} style={ContentBoxStyle.PrimaryPattern} height={height}>
    <div className={styles.authorWrapper}>
      <div>
        <Avatar picture={authorAvatar} alt={authorName} isSmall={true} />
      </div>
      <div>
        <Text className={styles.authorName} color={ColorStyles.secondary} type={TextStyles.body}>
          {authorName}
        </Text>
        <Text className={styles.date} color={ColorStyles.secondary} type={TextStyles.caption}>
          {formatBlogPostISODate(date)}
        </Text>
      </div>
    </div>
    <Text className={styles.title} element="h3" color={ColorStyles.secondary} type={TextStyles.h2}>
      {trimText(title, maxTitleLength)}
    </Text>
    <Text className={styles.description} element="p" color={ColorStyles.secondary} type={TextStyles.caption}>
      {trimText(shortDescription, maxShortDescriptionLength)}
    </Text>
    <a className={styles.link} href={link} target="_self">
      <Secondary>{cta}</Secondary>
    </a>
  </ContentBox>
);

BlogPostCard.defaultProps = {
  height: 'auto',
  maxTitleLength: 50,
  maxShortDescriptionLength: 100,
};

export default BlogPostCard;
