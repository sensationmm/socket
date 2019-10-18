import { shallow } from 'enzyme';
import * as React from 'react';

import BlogArticle from '.';

describe('@somo/pda-pages-blog-article', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      i18n: {
        footer: {
          title: 'Our smart technology needs a smart meter.',
          subTitle: "Check you're on the latest smart meter and start taking control your energy.",
          copyright: '2019 © Socket Energy. All rights reserved.',
        },
        blogArticle: {
          hero: {
            title: 'Take control. Own your energy.',
            subTitle: "It's how energy should work.",
            cta: 'Join the waiting list',
          },
          author: {
            name: 'John Smith',
            avatar: '/path-to-image.jpg',
          },
          publicationDate: '2019-09-07T15:53:00+05:00',
          content: [
            {
              type: 'text',
              tag: 'h3',
              content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            },
            {
              type: 'text',
              tag: 'p',
              content: 'Nulla vitae elit libero, a pharetra augue.',
            },
            {
              type: 'image',
              src: '/path-to-image.jpg',
              alt: 'image',
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
            ],
            cta: {
              text: 'See all news',
              link: 'http://google.com/',
            },
          },
        },
      },
    };
    component = shallow(<BlogArticle {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
