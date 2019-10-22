// import cx from 'classnames';
import * as React from 'react';

// import Image from '@somo/pda-components-image/src';
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

interface IBlogArticlePageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'blogArticle'>;
  hero: IHero;
  content: IContent;
}

const getLocation = () => (typeof window !== 'undefined' ? window.location.href : '/');

const BlogArticle: React.FC<IBlogArticlePageProps> = ({ i18n, hero, content }) => {
  const { footer, blogArticle } = i18n;
  const { body, excerpt } = content;
  const { relatedArticles, sharePostHeader } = blogArticle;

  return (
    <BlogArticleLayout hero={hero} footer={footer} relatedArticles={relatedArticles}>
      <PageSection>
        {excerpt && (
          <Text className={styles.blogArticleExcerpt} element={'h2'} type={TextStyles.h2} color={ColorStyles.primary}>
            {excerpt}
          </Text>
        )}
        {body && (
          <>
            {body.split('\n\n').map((paragraph) => (
              <Text
                className={styles.blogArticleParagraph}
                element={'p'}
                type={TextStyles.body}
                color={ColorStyles.tertiary}
              >
                {paragraph}
              </Text>
            ))}
          </>
        )}
        <Share header={sharePostHeader} articleTitle={hero.title} articleLink={getLocation()} />
      </PageSection>
    </BlogArticleLayout>
  );
};

export default BlogArticle;
