import { shallow } from 'enzyme';
import * as React from 'react';

import BlogArticle from '.';

describe('@somo/pda-pages-blog-article', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      content: {
        body: '<p>Body</p>',
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
          sharePostHeader: 'Share this post',
        },
      },
    };
    component = shallow(<BlogArticle {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
