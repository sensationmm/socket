import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import BlogArticlePage from '.';

const props = {
  i18n: {
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
    blogArticle: {
      hero: {
        title: 'Nulla vitae elit libero a pharetra.',
        bgImage: ['https://picsum.photos/id/249/800/300'],
      },
      author: {
        name: 'John Smith',
        avatar: 'https://picsum.photos/id/287/100/100',
      },
      publicationDate: '2019-09-07T15:53:00+05:00',
      content: [
        {
          type: 'text',
          tag: 'h3',
          content:
            'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis.',
        },
        {
          type: 'text',
          tag: 'p',
          content:
            'Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          type: 'image',
          src: 'https://picsum.photos/id/242/800/300',
          alt: 'image',
        },
        {
          type: 'text',
          tag: 'p',
          content:
            'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.',
        },
        {
          type: 'text',
          tag: 'p',
          content:
            'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.',
        },
      ],
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
              link: 'http://google.com',
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
              link: 'http://google.com',
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
              link: 'http://google.com',
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
              link: 'http://google.com',
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
              link: 'http://google.com',
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
              link: 'http://google.com',
            },
          },
        ],
        cta: {
          text: 'See all news',
          link: 'http://google.com/',
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
