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
      fullName: 'fullname',
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
      relatedArticles: {
        title: 'Related news',
        list: [
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-1',
            },
          },
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-2',
            },
          },
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-3',
            },
          },
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-4',
            },
          },
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-5',
            },
          },
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: '/blog/article-6',
            },
          },
        ],
        cta: {
          text: 'See all news',
          link: '/blog',
        },
      },
    },
  },
};

storiesOf('Pages|blog-article', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <BlogArticlePage {...props} />;
  });
