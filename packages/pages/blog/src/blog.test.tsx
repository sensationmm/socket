import { mount } from 'enzyme';
import * as React from 'react';

import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import Blog from '.';

jest.mock('react-media', () => jest.fn((props) => props.children()));
jest.mock('@somo/pda-components-flex-row-grid/src', () => jest.fn((props) => <span>{props.children}</span>));
jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-blog', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      posts: [
        {
          id: '1',
          authorName: 'Kevin Reynolds',
          date: '2019-10-01',
          title: 'Test blog post',
          link: 'http://www.google.com',
          shortDescription: 'This is a short intro of the topic.',
        },
        {
          id: '2',
          authorName: 'Kevin Reynolds',
          date: '2019-10-01',
          title: 'Another test blog post',
          link: 'http://www.google.com',
          shortDescription: 'This is a short intro of the topic.',
        },
      ],
    };
    component = mount(<Blog {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });

  it('should revert post order on select change', () => {
    component
      .find('Select')
      .props()
      .onChange(-1);
    component.update();
    expect(component.find(FlexRowGrid).props().content[0].authorName).toEqual(props.posts[1].authorName);
  });
});
