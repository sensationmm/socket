import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';

import tokens from '@somo/pda-utils-tokens/src';

import BlogPostCard, { IBlogPostCardProps } from '@somo/pda-components-blog-post-card/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import Select, { FormSelectType } from '@somo/pda-components-form-select/src';
import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

import * as styles from './blog.module.css';

interface IBlogPageProps {
  posts: Array<Omit<IBlogPostCardProps, 'cta'>>;
}

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const BlogPage: React.FC<IBlogPageProps> = ({ posts }) => {
  const [t] = useTranslation();

  const [state, setState] = useState(1);

  const prevState = usePrevious(state);

  if (prevState && state !== prevState) {
    posts.reverse();
  }

  return (
    <RegularLayout hero={t('site.blog.hero', { returnObjects: true })}>
      <PageSection>
        <div className={styles.filter}>
          <span>{t('site.blog.filter.start')}</span>
          <span>
            <Select
              type={FormSelectType.Inline}
              options={[
                { val: '1', label: t('site.blog.filter.latest') },
                { val: '-1', label: t('site.blog.filter.earliest') },
              ]}
              value={t('site.blog.filter.latest')}
              onChange={(val) => setState(val)}
            />
          </span>
          <span>{t('site.blog.filter.end')}</span>
        </div>

        <Media query={tokens.customMedia.m}>
          {(matches) => (
            <FlexRowGrid
              cols={matches ? 3 : 2}
              component={BlogPostCard}
              content={posts.map((post) => ({
                authorName: post.authorName,
                date: post.date,
                title: post.title,
                link: post.link,
                shortDescription: post.shortDescription,
                cta: t('site.blog.buttonRead'),
              }))}
            />
          )}
        </Media>
      </PageSection>
    </RegularLayout>
  );
};

export default BlogPage;
