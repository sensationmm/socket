import cx from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';

import ArticleAuthor from '@somo/pda-components-article-author/src';
import { Secondary } from '@somo/pda-components-button/src';
import ContentBox, { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

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
  className?: string;
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
  className,
}) => (
  <ContentBox className={cx(styles.blogPostCard, className)} style={ContentBoxStyle.PrimaryPattern} height={height}>
    <ArticleAuthor name={authorName} avatar={authorAvatar} date={date} isAvatarSmall={true} />
    <Text className={styles.title} element="h3" color={ColorStyles.secondary} type={TextStyles.h2}>
      {trimText(title, maxTitleLength)}
    </Text>
    <Text className={styles.description} element="p" color={ColorStyles.secondary} type={TextStyles.caption}>
      {trimText(shortDescription, maxShortDescriptionLength)}
    </Text>
    <Link className={styles.link} to={link} target="_self" title={cta}>
      <Secondary>{cta}</Secondary>
    </Link>
  </ContentBox>
);

BlogPostCard.defaultProps = {
  height: 'auto',
  maxTitleLength: 50,
  maxShortDescriptionLength: 100,
};

export default BlogPostCard;
