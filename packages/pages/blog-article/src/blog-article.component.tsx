// import cx from 'classnames';
import * as React from 'react';

// import Image from '@somo/pda-components-image/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import BlogArticleLayout from '@somo/pda-layouts-blog-article/src';

// import * as styles from './blog-article.module.css';

interface IAuthor {
  fullName: string;
  bio?: string;
  photo?: string;
}

interface IHero {
  heroBackground?: string;
  heroImage?: string;
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

// const ContentTextStyles = {
//   h3: TextStyles.h2,
//   p: TextStyles.body,
// };

// const ContentTextColorStyles = {
//   h3: ColorStyles.primary,
//   p: ColorStyles.tertiary,
// };

const BlogArticle: React.FC<IBlogArticlePageProps> = ({ i18n, hero, content }) => {
  const { footer, blogArticle } = i18n;
  const { body, excerpt } = content;
  const { relatedArticles } = blogArticle;

  return (
    <BlogArticleLayout hero={hero} footer={footer} relatedArticles={relatedArticles}>
      <PageSection>
        {excerpt && (
          <Text element={'h2'} type={TextStyles.h2} color={ColorStyles.primary}>
            {excerpt}
          </Text>
        )}
        {body && (
          <>
            {body.split('\n\n').map((paragraph) => (
              <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
                {paragraph}
              </Text>
            ))}
          </>
        )}
        {/* {content.map((item, count) => {
          if (item.type === 'text') {
            return (
              <Text
                key={`content-${count}`}
                className={styles.blogArticleContent}
                element={item.tag}
                type={ContentTextStyles[item.tag || 'p']}
                color={ContentTextColorStyles[item.tag || 'p']}
              >
                {item.content}
              </Text>
            );
          }

          if (item.type === 'image') {
            return (
              <Image
                key={`content-${count}`}
                className={cx(styles.image, styles.blogArticleContent)}
                src={item.src}
                alt={item.alt}
                isLazy={true}
              />
            );
          }
        })} */}
      </PageSection>
    </BlogArticleLayout>
  );
};

export default BlogArticle;
