import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection from '@somo/pda-components-page-section/src';
import Share from '@somo/pda-components-share/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import BlogArticleLayout from '@somo/pda-layouts-blog-article/src';
import * as styles from './blog-article.module.css';

interface IAuthor {
  fullName: string;
  bio?: string;
  photo?: string;
}

interface IHero {
  heroBackground?: string;
  bgImage?: string;
  title: string;
  publicationDate: string;
  author: IAuthor;
}

interface IContent {
  excerpt: string;
  body: string;
}

export interface IBlogArticlePageProps {
  hero: IHero;
  content: IContent;
}

const getLocation = () => (typeof window !== 'undefined' ? window.location.href : '/');

const BlogArticle: React.FC<IBlogArticlePageProps> = ({ hero, content }) => {
  const { body, excerpt } = content;
  const [t] = useTranslation();

  return (
    <BlogArticleLayout hero={hero}>
      <PageSection className={styles.blogArticleContent}>
        {excerpt && (
          <Text className={styles.blogArticleExcerpt} element={'h2'} type={TextStyles.h2} color={ColorStyles.primary}>
            {excerpt}
          </Text>
        )}
        {body}
        <Share header={t('site.blogArticle.sharePostHeader')} articleTitle={hero.title} articleLink={getLocation()} />
      </PageSection>
    </BlogArticleLayout>
  );
};

export default BlogArticle;
