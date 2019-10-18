import { shallow } from 'enzyme';
import * as React from 'react';

import Blog from '.';

describe('@somo/pda-pages-blog', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
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
      },
      posts: [
        {
          id: '1',
          authorName: 'Kevin Reynolds',
          date: '2019-10-01',
          title: 'Test blog post',
          link: 'http://www.google.com',
          shortDescription: 'This is a short intro of the topic.',
        },
      ],
    };
    component = shallow(<Blog {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
