import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const menuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

describe('@somo/pda-components-footer component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toBeDefined();
  });

  it('should render menu passed as props', () => {
    wrapper = shallow(<Component menu={menuMock} />);

    expect(wrapper.find('.nav ul li').length).toEqual(menuMock.length);
  });
});
