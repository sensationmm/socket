import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogPage from '@somo/pda-pages-blog/src';

const props = {
  i18n: {
    blog: {
      hero: {
        title: 'Musings & News-things.',
        subTitle: 'It’s the latest info, news and updates from the Socket Team.',
      },
      buttonRead: 'Read article',
      filter: {
        start: 'Show me',
        end: 'articles',
      },
    },
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
  },
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

storiesOf('Pages|blog', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <BlogPage {...props} />;
  });
