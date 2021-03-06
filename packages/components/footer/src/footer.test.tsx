import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const MenuItems = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

describe('@somo/pda-components-footer component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('FooterMenu').exists()).toBe(false);
  });

  it('should render menu passed as props', () => {
    wrapper = shallow(<Component menu={MenuItems} />);

    expect(wrapper.find('FooterMenu').exists()).toBe(true);
  });
});
