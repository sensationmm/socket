import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const MenuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

describe('@somo/pda-components-menu component', () => {
  let wrapper;

  it('should render menu passed as props', () => {
    wrapper = shallow(<Component links={MenuMock} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('ul li').length).toEqual(MenuMock.length);
  });
});
