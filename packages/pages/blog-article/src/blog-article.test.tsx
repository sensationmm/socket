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
    };
    component = shallow(<BlogArticle {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
