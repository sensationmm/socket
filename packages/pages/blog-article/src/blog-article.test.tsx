import { shallow } from 'enzyme';
import * as React from 'react';

import BlogArticle from '.';
import { IBlogArticlePageProps } from './blog-article.component';

jest.mock('@somo/pda-layouts-blog-article/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-blog-article', () => {
  let component;
  let props: IBlogArticlePageProps;

  beforeAll(() => {
    props = {
      content: {
        body: '<p>Body</p>',
        excerpt: 'Excerpt',
      },
      hero: {
        heroBackground: 'heroBackground',
        bgImage: 'heroImage',
        title: 'test title',
        publicationDate: '2019-09-07T15:53:00+05:00',
        author: {
          bio: 'author bio',
          fullName: 'fullname',
          photo: 'photo',
        },
      },
    };
    component = shallow(<BlogArticle {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
