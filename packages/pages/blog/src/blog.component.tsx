import * as React from 'react';
import Media from 'react-media';

import tokens from '@somo/pda-utils-tokens/src';

import BlogPostCard, { IBlogPostCardProps } from '@somo/pda-components-blog-post-card/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

// import * as styles from './blog.module.css';

interface IBlogPageProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'blog'>;
  posts: Array<Omit<IBlogPostCardProps, 'cta'>>;
}

const BlogPage: React.FC<IBlogPageProps> = ({ i18n, posts }) => {
  const { blog, footer } = i18n;
  const { hero, buttonRead } = blog;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>
        <Media query={tokens.customMedia.m}>
          {/* istanbul ignore next */ (matches) => (
            <FlexRowGrid
              cols={matches ? 3 : 2}
              component={BlogPostCard}
              content={posts.map((post) => ({
                authorName: post.authorName,
                date: post.date,
                title: post.title,
                link: post.link,
                shortDescription: post.shortDescription,
                cta: buttonRead,
              }))}
            />
          )}
        </Media>
      </PageSection>
    </RegularLayout>
  );
};

export default BlogPage;
