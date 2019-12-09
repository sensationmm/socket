import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogPage from '@somo/pda-pages-blog/src';

const props = {
  posts: [
    {
      id: '1',
      authorName: 'Kevin Reynolds',
      date: '2019-10-01',
      title: 'Test blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
      cta: 'Read more',
    },
  ],
};

storiesOf('Pages|blog', module).add('default', () => {
  return <BlogPage {...props} />;
});
