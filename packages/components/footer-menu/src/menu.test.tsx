import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const MenuItems = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

describe('@somo/pda-components-footer-menu component', () => {
  let wrapper;

  it('should render menu passed as props', () => {
    wrapper = shallow(<Component links={MenuItems} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('ul li').length).toEqual(MenuItems.length);
  });
});
