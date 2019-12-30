import cx from 'classnames';
import * as React from 'react';

import ArticleAuthor from '@somo/pda-components-article-author/src';
import { AvatarSizes } from '@somo/pda-components-avatar/src';
import { ButtonTypes, Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
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

const trimText = (text: string, maxNumOfChars: number) =>
  text.length > maxNumOfChars ? `${text.substring(0, maxNumOfChars).trim()}...` : text;

const BlogPostCard: React.FC<IBlogPostCardProps> = ({
  authorAvatar,
  authorName,
  date,
  title,
  maxTitleLength = 50,
  shortDescription,
  maxShortDescriptionLength = 100,
  cta,
  link,
  height = 'auto',
  className,
}) => (
  <ContentBox className={cx(styles.blogPostCard, className)} style={ContentBoxStyle.PrimaryPattern} height={height}>
    <ArticleAuthor name={authorName} avatar={authorAvatar} date={date} avatarSize={AvatarSizes.Small} />
    <Text className={styles.title} element="h3" color={ColorStyles.secondary} type={TextStyles.h2}>
      {trimText(title, maxTitleLength)}
    </Text>
    <Text className={styles.description} element="p" color={ColorStyles.secondary} type={TextStyles.segmentCopyFixed}>
      {trimText(shortDescription, maxShortDescriptionLength)}
    </Text>
    <SecondaryBtn className={styles.link} type={ButtonTypes.internalLink} link={link} title={cta}>
      {cta}
    </SecondaryBtn>
  </ContentBox>
);

export default BlogPostCard;
