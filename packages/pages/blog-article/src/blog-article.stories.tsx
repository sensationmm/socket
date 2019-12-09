import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogArticlePage from '.';

const props = {
  content: {
    body: 'Body',
    excerpt: 'Excerpt',
  },
  hero: {
    heroBackground: 'heroBackground',
    heroImage: 'heroImage',
    publicationDate: '2019-09-07T15:53:00+05:00',
    title: 'Hero title',
    author: {
      bio: 'author bio',
      fullName: 'full name',
      photo: 'photo',
    },
  },
};

storiesOf('Pages|blog-article', module).add('default', () => {
  return <BlogArticlePage {...props} />;
});
