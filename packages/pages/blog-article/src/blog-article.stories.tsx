import { withKnobs } from '@storybook/addon-knobs';
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
  i18n: {
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
    blogArticle: {
      sharePostHeader: 'Share this post',
    },
  },
};

storiesOf('Pages|blog-article', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <BlogArticlePage {...props} />;
  });
