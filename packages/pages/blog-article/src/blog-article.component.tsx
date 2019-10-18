import * as React from 'react';

import Image from '@somo/pda-components-image/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import BlogArticleLayout from '@somo/pda-layouts-blog-article/src';

import * as styles from './blog-article.module.css';

interface IBlogArticlePageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'blogArticle'>;
}

const ContentTextStyles = {
  h3: TextStyles.h2,
  p: TextStyles.body,
};

const ContentTextColorStyles = {
  h3: ColorStyles.primary,
  p: ColorStyles.tertiary,
};

const BlogArticle: React.FC<IBlogArticlePageProps> = ({ i18n }) => {
  const { blogArticle, footer } = i18n;
  const { hero, relatedArticles, content } = blogArticle;

  return (
    <BlogArticleLayout hero={hero} footer={footer} relatedArticles={relatedArticles}>
      <PageSection>
        {content.map((item, count) => {
          if (item.type === 'text') {
            return (
              <div key={`content-${count}`} className={styles.blogArticleContent}>
                <Text
                  element={item.tag}
                  type={ContentTextStyles[item.tag || 'p']}
                  color={ContentTextColorStyles[item.tag || 'p']}
                >
                  {item.content}
                </Text>
              </div>
            );
          }

          if (item.type === 'image') {
            return (
              <div key={`content-${count}`} className={styles.blogArticleContent}>
                <Image className={styles.image} src={item.src} alt={item.alt} isLazy={true} />
              </div>
            );
          }
        })}
      </PageSection>
    </BlogArticleLayout>
  );
};

export default BlogArticle;
