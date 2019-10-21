import { shallow } from 'enzyme';
import * as React from 'react';

import BlogArticle from '.';

describe('@somo/pda-pages-blog-article', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      content: {
        body: 'Body',
        excerpt: 'Excerpt',
      },
      hero: {
        heroBackground: 'heroBackground',
        heroImage: 'heroImage',
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
          author: {
            name: 'John Smith',
            avatar: '/path-to-image.jpg',
          },
          publicationDate: '2019-09-07T15:53:00+05:00',
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
