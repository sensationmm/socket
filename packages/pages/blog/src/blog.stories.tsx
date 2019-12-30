import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogPage from '.';
import { IBlogPageProps } from './blog.component';

const props: IBlogPageProps = {
  posts: [
    {
      authorName: 'Kevin Reynolds',
      authorAvatar: 'https://picsum.photos/200',
      date: '2019-10-01',
      title: 'Test blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
  ],
};

storiesOf('Pages|blog', module).add('default', () => {
  return <BlogPage {...props} />;
});
