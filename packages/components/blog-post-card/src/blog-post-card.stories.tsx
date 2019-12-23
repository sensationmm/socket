import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogPostCard from '.';

const BlogPostCardHeights = {
  Auto: 'auto',
  '300': 300,
};

storiesOf('Components|blog-post-card', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <BlogPostCard
      height={select('Height', BlogPostCardHeights, 'auto')}
      authorName={text('Author name', 'John Smith')}
      authorAvatar={text('Author avatar', 'https://picsum.photos/id/287/100/100')}
      date="2019-09-07T15:53:00+05:00"
      title={text('Title', 'Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero.')}
      maxTitleLength={number('Max title length', 50)}
      shortDescription={text(
        'Short description',
        'Nulla vitae elit libero a nulla vitae elit libero a pharetra libero a nulla libero a nulla.',
      )}
      maxShortDescriptionLength={number('Max description length', 100)}
      cta={text('CTA', 'Read article')}
      link={text('Link', '/')}
    />
  ));
